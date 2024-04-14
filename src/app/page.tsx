"use client";
import Image from "next/image";
import { Meetup, defaultMeetup, User, defaultUser } from "@/types";
import MeetupCard from "@/app/components/meetupCard";
import { useState, useEffect } from "react";
import { useRouter } from "next13-progressbar"

//AOS - animate on scroll library
import AOS from 'aos'
import 'aos/dist/aos.css';

type Feature = {
    name: string,
    id: number,
    info: string,
    image: string
}

export default function Home() {
    const router = useRouter();

    const features: Feature[] = [
        {
            id: 1,
            name: "Meetups",
            info: "Create memorable hangouts with friends effortlessly. Event Sync simplifies scheduling, location sharing, and attendee management for seamless gatherings.",
            image: "path/to/feature1-image.jpg",
        },
        {
            id: 2,
            name: "Notifications",
            info: "Stay connected and informed about hangout plans with real-time updates and reminders. Get alerts about upcoming events, changes, and messages from friends.",
            image: "path/to/feature2-image.jpg",
        },
        {
            id: 3,
            name: "Friends",
            info: "Connect effortlessly with friends and plan hangouts together. Manage your friends list, collaborate on event planning, and make every gathering memorable.",
            image: "path/to/feature3-image.jpg",
        },
    ];

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="h-[100vh] w-full">

            <header className="flex items-center justify-between h-20 bg-slate-900">
                <div className="flex justify-start items-center">
                    <img
                        src="/sm-dark-logo.png"
                        alt="Logo"
                        className="max-h-20 px-[-10px] m-[-10px]"
                    />
                    <h1 className="text-[2vh] m-0 font-semibold">EventSync</h1>
                </div>
                <div className="flex justify-end gap-[2vw]">
                    <button onClick={() => router.push("/about")} className="text-1xl text-center font-bold bg-none rounded-md hover:text-gray-500 transition-colors duration-300 delay-100 ease-in-outs">About Us</button>
                    <button onClick={() => router.push("/login")} className="text-1xl mr-[2vw] p-4 text-center font-bold w-32 bg-blue-500 hover:bg-blue-700 transition-colors duration-300 rounded-md">Login</button>
                </div>
            </header>

            <section className="flex flex-col items-center justify-center h-[100vh] text-center bg-gradient-to-b from-slate-900 to-black">
                <h1 data-aos="fade-right" data-aos-duration="700" className="text-[4vw] font-bold mb-4">Connect, Plan, and Hang Out!</h1>
                <h2 data-aos="fade-left" data-aos-duration="700" className="text-[3vw]">Bringing Friends Together Has Never Been Easier</h2>
            </section>

            <section className="text-center items-center mb-[25vh] mx-[5vw]">
                <h1 data-aos="fade-right" data-aos-duration="1000" className="font-bold text-[4vw] mb-4">What is EventSync?</h1>
                <p data-aos="fade-left" data-aos-duration="1000" className="text-[2vw] text-center">
                    EventSync is your all-in-one solution for effortless event planning and 
                    coordination. Our platform simplifies the process of organizing memorable 
                    gatherings with friends, offering intuitive tools for scheduling, 
                    location sharing, attendee management, and real-time notifications. With 
                    EventSync, you can easily connect with friends, plan hangouts, and create 
                    unforgettable experiences, making every event a special celebration of friendship 
                    and joy. Say goodbye to the hassle of coordinating events and hello to seamless 
                    socializing with EventSync!
                </p>
            </section>

            <section className="flex flex-col items-center justify-center text-center mt-0 m-10">
                <h1 className="text-[4vw] font-bold">Revolutionizing The Way Friends Connect</h1>
                <section className="py-8">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <div key={feature.id} data-aos="flip-down" data-aos-duration="1000" className="rounded-lg bg-slate-900 p-4">
                                    <img className="w-full h-64 rounded-lg border-solid border-1 border-gray-500 mb-4" alt={feature.name + " demo image"} />
                                    <h3 className="text-2xl font-semibold mb-2">{feature.name}</h3>
                                    <p>{feature.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

            <section className="flex text-center items-center justify-center mt-14">
                <div>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl text-center font-bold mt-10">Don't have an account?</h1>
                    <button data-aos="fade-left" data-aos-duration="1000" onClick={() => router.push("/signup")} className=" m-10 text-2xl text-center font-bold w-48 p-4 bg-blue-500 hover:bg-blue-700 transition-colors duration-300  rounded-md">Signup</button>
                </div>
            </section>

            <section className="flex h-20 pr-6 text-center justify-between bg-slate-900">
                <img className="h-30 ml-4 justify-start" src="/lg-dark-logo.png" />
                <button onClick={() => router.push("/about")} className="text-1xl text-center font-bold w-32 bg-none rounded-md hover:text-gray-500 transition-colors duration-300 delay-100 ease-in-out">About Us</button>
            </section>
        </div>
    );

}
