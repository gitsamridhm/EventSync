import {getUser} from "@/db/read/user";
import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import verifyJWT from "@/app/api/utils/verifyJWT";

export async function POST(request: NextRequest) {
 // TODO: Implement CSRF protection @gam3rr
    // Get user data from request body
    const data = await request.json();
    // Get user data by email
    const user = await getUser(data);
    // Check if user exists
    if (!user) {
        return NextResponse.json({error: 'User not found'});
    }
    // Return user data as JSON
    return NextResponse.json(user.toJSON());
}