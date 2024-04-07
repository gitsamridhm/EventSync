"use client";
import {defaultUser, User} from "@/types";
import Sidebar from "@/app/components/sidebar";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {useState} from "react";
import CreateMeetupStep1 from "@/app/components/create-meetup/createMeetupStep1";
import CreateMeetupStep2 from "@/app/components/create-meetup/createMeetupStep2";
import CreateMeetupStep3 from "@/app/components/create-meetup/createMeetupStep3";
import useSession from "@/app/components/utils/sessionProvider";
import {useRouter} from "next13-progressbar";

export default function CreateMeetup() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [attendees, setAttendees] = useState<User[]>([]);
    const [friends, setFriends] = useState<(User|null)[]>([null]);
    const [loadingUser, setLoadingUser] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [meetupCreationLoading, setMeetupCreationLoading] = useState<0 | 1 | 2>(0); // 0 = not started, 1 = loading, 2 = done
    const session = useSession();
    const router = useRouter();

    function createMeetup() {
        setMeetupCreationLoading(1)
        fetch('/api/meetup/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.session.token}`
            },
            body: JSON.stringify({
                title: name,
                description: description,
                date: date,
                location: location,
                creator: session.session.userID,
                invited: attendees.map((user) => user._id)
            })
        }).then((data) => {
            data.json().then((meetup) => {
                setMeetupCreationLoading(2);
                router.push(`/meetups/${meetup._id}`)
            })
        });
    }

    if (session.status == "done" && loadingUser) {
        fetch(`/api/user/${session.session.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.session.token}`
            }
        }).then((data) => {
            data.json().then((user) => {
                setUserEmail(user.email);
                const friendPromises = user.friends.map((friendID: string) => {
                    return fetch(`/api/user/${friendID}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${session.session.token}`
                        }
                    }).then((res) => res.json());
                });

                Promise.all(friendPromises).then((friends) => {
                    setFriends(friends);
                });
            });
        });
        setLoadingUser(false);
    }



    function changeStep(){
        setStep((step) => step + 1);
    }

    return (
        <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
            <Sidebar user={defaultUser} active="notifications"/>
            <div className="flex flex-col h-screen w-full">
                <div className="flex flex-row p-4 justify-between items-center dark:border-stone-800 dark:bg-stone-950 border-b">
                    <h1 className="text-2xl font-bold ">Create a Meetup</h1>
                    <Breadcrumbs>
                        {step > 0 ? <BreadcrumbItem className="text-sm" onClick={()=>setStep(1)}>Name & Description</BreadcrumbItem> : null}
                        { step > 1 ? <BreadcrumbItem onClick={()=>setStep(2)}>Location & Time</BreadcrumbItem> : null}
                        { step > 2 ? <BreadcrumbItem onClick={()=>setStep(2)}>Attendees</BreadcrumbItem> : null}
                    </Breadcrumbs>
                </div>
                <div className=" flex justify-center items-center h-full w-full">
                    {step == 1 ? <CreateMeetupStep1 name={name} description={description} setName={setName} setDescription={setDescription} changeStep={changeStep}/> : null}
                    {step == 2 ? <CreateMeetupStep2 time={time} location={location} date={date} changeStep={changeStep} setLocation={setLocation} setTime={setTime} setDate={setDate}/> : null}
                    {step == 3 ? <CreateMeetupStep3 attendees={attendees} createMeetup={createMeetup} meetupCreationLoading={meetupCreationLoading} userEmail={userEmail} setAttendees={setAttendees} friends={friends}/> : null}
                </div>
            </div>
        </div>
    )
}