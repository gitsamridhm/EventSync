"use client";
import { useContext } from "react";
import { userContext } from "@/app/providers";
import Sidebar from "@/app/components/sidebar";

export default function Notifications() {
    const {user, updateUser} = useContext(userContext);

    return (
      <div className="flex flex-row bg-neutral-100 dark:bg-black h-screen w-screen">
          <Sidebar user={user} active="notifications"/>
      </div>
    )
}