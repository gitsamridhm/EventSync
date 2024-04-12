'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useRouter} from "next13-progressbar";
import { Next13ProgressBar } from 'next13-progressbar';
import useSession from "@/app/components/utils/sessionProvider";
import { createContext, useState, useEffect } from 'react';
import {usePathname} from 'next/navigation';
import {User} from "@/types";
import useUserTheme from "@/app/components/utils/theme/updateTheme";

const userContext = createContext<User | null>(null);

const PROTECTED_ROUTES = ['/dashboard', '/friends', '/meetups', '/notifications', '/settings', '/meetups/create', '/meetups/edit']
export function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const session = useSession();
    const [user, setUser] = useState<User | null>(null);
    const pathname = usePathname();
    const [theme, setTheme] = useUserTheme();

    useEffect(() => {
        // Only fetch user data if the route is protected
        if (!PROTECTED_ROUTES.map((route) => pathname.startsWith(route)).includes(true)) return;

        if (session.status == "error") {
            router.push("/login"+(pathname ? `?redirect=${pathname}` : '?redirect=/dashboard'));
            return;
        }

        if (session.status == "done" && !user){
            fetch(`/api/user/${session.session.userID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.session.token}`
                }
            }).then((data) => {
                data.json().then((userData) => {
                    setUser(userData);
                    setTheme(userData.theme);
                })
            });
        }

    }, [pathname, router, session.session.token, session.session.userID, session.status, setTheme, user]);

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <userContext.Provider value={user}>
                    {children}
                    <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />
                </userContext.Provider>
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export { userContext }
