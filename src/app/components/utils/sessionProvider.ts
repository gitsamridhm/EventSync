"use client";
import {useEffect, useState} from "react";
import { Session } from "@/types";
import Cookies from 'js-cookie';
import {usePathname} from "next/navigation";

const PROTECTED_ROUTES = ['/dashboard', '/friends', '/meetups', '/notifications', '/settings', '/meetups/create', '/meetups/edit']
export default function useSession(){
    const [session, setSession] = useState<Session>(new Session(null, null)); // session = userID
    const [status, setStatus] = useState<'loading' | 'done' | 'error'>('loading');
    const pathname = usePathname();
    const token = Cookies.get('token');

    useEffect(() => {
        if (!PROTECTED_ROUTES.map((route) => pathname.startsWith(route)).includes(true)){
            setStatus('loading');
            setSession(new Session(null, null));
            return;
        }

        if (!token) {
            setStatus('error');
            return;
        }
        fetch('/api/auth/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            const data = res.json();
            data.then((userData) => {
                if ('data' in userData) {
                    setSession(new Session(userData.data.userID, token));
                    setStatus('done');
                } else {
                    setStatus('error');
                    Cookies.set('token', '');
                }
            });
        });

    }, [pathname, token]);

    return {session, status};
}