"use client";
import useSession from "@/app/components/utils/sessionProvider";
import Sidebar from "@/app/components/sidebar";
import {useState} from "react";
import {defaultUser} from "@/types";

export default function MeetupInvite({ params }: { params: { token: string } }){
    const session = useSession();
    const [tokenData, setTokenData] = useState<any>(null);
    const [inviteError, setInviteError] = useState<string>("");
    const [meetup, setMeetup] = useState<any>(null);

    if (!tokenData){
        fetch('/api/auth/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params.token}`
            }
        }).then((data) => {
                data.json().then((tokenData) => {
                    setTokenData(tokenData);
                })
        })
    }

    if (session.status == "done" && tokenData) {

        if ("error" in tokenData || tokenData.type != "meetup-invitation") {
            setInviteError("Invitation is invalid or expired");
        } else if (tokenData.userID != session.session.userID) {
            setInviteError("This invitation is not for you");
        } else {
            fetch(`/api/meetup/${tokenData.meetup}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.session.token}`
                }
            }).then((data) => {
                data.json().then((meetup) => {
                    setMeetup(meetup);
                })
            });
        }
    }
    // TODO: Create UI for invitation
    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={defaultUser} active="meetups"/>

        </div>
    )
}