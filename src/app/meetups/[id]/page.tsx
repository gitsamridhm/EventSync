// TODO: Complete the MeetupProfile component
"use client";
import { defaultUser } from "@/types";
import Sidebar from "@/app/components/sidebar";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Input, Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import CreateMeetupStep1 from "@/app/components/create-meetup/createMeetupStep1";
import CreateMeetupStep2 from "@/app/components/create-meetup/createMeetupStep2";
import CreateMeetupStep3 from "@/app/components/create-meetup/createMeetupStep3";

export default function MeetupProfile({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
      <Sidebar user={defaultUser} active="notifications" />
      <div className="flex items-center justify-center align-middle flex-col h-screen w-full p-4 md:p-8">
        <div className="w-full h-full bg-gray-200 dark:bg-neutral-800 text-black dark:text-white rounded-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg"
            className="border-b-[1.5px] border-gray-500 w-full h-1/4 object-cover rounded-t-xl"
          />
          <div className="relative p-14">
            <button className="absolute top-14 right-14 flex bg-blue-500/30 hover:bg-blue-500/40 text-blue-500 rounded-xl px-8 py-2 transition-all">
              Edit
            </button>
            <div className="flex items-center mb-1">
              <h1 className="text-2xl font-semibold mr-3">Meeting name</h1>
              <img
                src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612763581/1800"
                className="border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full mr-1"
              />
              <h2 className="text-sm">[creator]</h2>
            </div>
            <h2>
              [description] we will be meeting at the golden gate bridge first,
              then we'll walk to the park.
            </h2>
            <div className="mt-6">
              <div className="flex">
                <ClockIcon className="block w-6 h-6 text-gray-500 hover:text-gray-400 mr-1 transition-all" />
                <h2>July 12th, 2029</h2>
              </div>
              <div className="flex mt-1">
                <MapPinIcon className="block w-6 h-6 text-gray-500 hover:text-gray-400 mr-1 transition-all" />
                <h2>Golden Gate Park</h2>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex mb-1">
                <div className="flex -mr-1.5">
                  <img
                    src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612763581/1800"
                    className="border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full z-10"
                  />
                  <img
                    src="https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg"
                    className="-translate-x-3 border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full"
                  />
                </div>
                <span>
                  [creator] and 4 others are{" "}
                  <span className="font-semibold">coming</span>
                </span>
              </div>
              <div className="flex mb-1">
                <div className="flex -mr-1.5">
                  <img
                    src="https://bestfriends.org/sites/default/files/2023-02/Victory3427MW_Social.jpg"
                    className="border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full z-10"
                  />
                  <img
                    src="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
                    className="-translate-x-3 border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full"
                  />
                </div>
                <span>
                  [name] and 2 others are{" "}
                  <span className="font-semibold">not coming</span>
                </span>
              </div>
              <div className="flex mb-1">
                <div className="flex -mr-1.5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDb8nupIgI-CcUXjpWxenl2yDLFnXsul2ozPZN280Ew&s"
                    className="border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full z-10"
                  />
                  <img
                    src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
                    className="-translate-x-3 border-[1.5px] border-gray-500 w-6 h-6 object-cover rounded-full"
                  />
                </div>
                <span>
                  [name] and [name] are{" "}
                  <span className="font-semibold">undecided</span>
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-12">
              <button className="bg-blue-500 hover:bg-blue-600 shadow-md text-center rounded-xl px-8 py-2 transition-all">
                I'm coming
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 shadow-md text-center rounded-xl px-8 py-2 transition-all">
                I'm not coming
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
