"use client"
import Image from "next/image";
import { Meetup, defaultMeetup, User, defaultUser } from "@/types";
import MeetupCard from "@/app/components/meetupCard";
import { useState, useEffect } from "react";
import { useRouter } from "next13-progressbar"

//AOS - animate on scroll library
import AOS from 'aos'
import 'aos/dist/aos.css';

//team member object for cards
type TeamMember = {
    name: string;
    role: string;
}

function About() {
    const router = useRouter()

    useEffect(() => {
        //initialize animate on scroll library
        AOS.init()
    })

    const teamMembers: TeamMember[] = [
        {
            name: 'Aaryan Parikh',
            role: 'CEO Cofounder',
        },
        {
            name: 'Neel Parpia',
            role: 'CTO Cofounder',
        },
        {
            name: 'Eshaan E',
            role: 'Senior Developer',
        },
        {
            name: 'Parkar Rathore',
            role: 'Senior Developer',
        },
        {
            name: 'Nicholas Wang',
            role: 'Undecided'
        },
        {
            name: 'Robert McCrary',
            role: 'Software Developer',
        },
        {
            name: 'Jake Orchanian',
            role: 'Software Developer',
        }
    ];

    return (
        <div className="h-[100vh] w-full">
            <header className="flex justify-between items-center h-20 bg-slate-900 text-white py-4">
                <div className="flex items-center justify-start">
                    <img
                        src="/sm-dark-logo.png"
                        alt="Logo"
                        className="max-h-20 p-[-10px] m-[-10px]"
                    />
                    <h1 className="text-[2vh] font-semibold">About</h1>
                </div>
                <div className="flex justify-end gap-[2vw] mr-[2vw]">
                    <button onClick={() => router.push("/")} className="text-1xl text-center font-bold bg-none rounded-md hover:text-gray-500 transition-colors duration-300 delay-100 ease-in-outs">Home</button>
                    <button onClick={() => router.push("/login")} className="text-1xl p-4 text-center font-bold w-32 bg-blue-500 hover:bg-blue-700 transition-colors duration-300 rounded-md">Login</button>
                </div>
            </header>

            <section className="py-8 px-8">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div data-aos="flip-down" data-aos-duration="1000" key={member.name} className="bg-slate-900 rounded-lg shadow p-6">
                            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                            <p className="text-lg mb-2">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-8 my-20 px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
                <p className="text-xl">
                    EventSync is committed to enhancing the way friends connect and enjoy shared experiences.
                    Our platform is designed to facilitate seamless and enjoyable hangouts among friends,
                    offering a range of intuitive features for effortless event planning and coordination.
                    From scheduling gatherings and sharing locations to managing attendee preferences and
                    sending timely notifications, EventSync streamlines the entire process, ensuring that
                    friends can come together and create unforgettable memories without the usual hassle.
                    With EventSync, every hangout becomes an opportunity to strengthen bonds, foster deeper
                    connections, and make every moment spent with friends truly special and memorable.
                </p>
            </section>

            <section className="text-center items-center mb-20">
                <h1 className="text-3xl font-bold">Check out our <a className="text-blue-600 underline" href="https://www.linkedin.com/company/event-sync/">IOS App!</a></h1>
                <div className="flex justify-around mt-[10vh]">
                    <h1 className="text-2xl font-bold">Coming Soon...</h1>
                </div>
            </section>

            <section className="text-center items-center mb-20">
                <h1 className="text-3xl font-bold">Check us out on <a className="text-blue-600 underline" href="https://www.linkedin.com/company/event-sync/">LinkedIn!</a></h1>
                <div className="flex justify-around mt-[10vh]">
                    <img data-aos="fade-down-right" className="h-[20vh]" src="/LinkedIn-logo-for-about-page.png" />
                    <img data-aos="fade-up-left" className="h-[25vh]" src="/lg-dark-logo.png" />
                </div>
            </section>

            <div className="flex h-20 pr-6 text-center justify-between bg-slate-900">
                <img className="h-30 ml-4 justify-start" src="/lg-dark-logo.png" />
                <button onClick={() => router.push("/")} className="text-1xl text-center font-bold w-32 bg-none rounded-md hover:text-gray-500 transition-colors duration-300 delay-100 ease-in-out">Home</button>
            </div>
        </div>
    )
}

export default About;