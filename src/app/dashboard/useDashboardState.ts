import {useContext, useState} from "react";
import {userContext} from "@/app/providers";
import {AppNotification, Meetup, User} from "@/types";
import {useRouter} from "next13-progressbar";
import useSession from "@/app/components/utils/sessionProvider";

export default function useDashboardState() {
    const {user, updateUser} = useContext(userContext);
    const [meetups, setMeetups] = useState<(Meetup | null)[]>([null, null, null, null]);
    const [search, setSearch] = useState('');
    const [knownUsers, setKnownUsers] = useState<User[]>([]);
    const [notifications, setNotifications] = useState<(AppNotification | null)[]>([null, null, null, null]);
    const router = useRouter();
    // Get TOKEN from cookie
    const { session, status } = useSession();

    return {
        user,
        meetups,
        setMeetups,
        search,
        setSearch,
        knownUsers,
        setKnownUsers,
        notifications,
        setNotifications,
        router,
        session,
        status
    };

}