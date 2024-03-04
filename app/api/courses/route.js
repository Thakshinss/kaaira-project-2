import {getCourses} from "@/app/lib/data"
import { NextResponse} from "next/server";

export const GET = async (req, res) => {
    try {
        const courses = getCourses();
        return NextResponse.json({ message:"oK",courses }, { status: 200 });
    } catch (err) {
        return NextResponse.json (
            { message: "Error", err },
            {
                status: 500,
            }
        );
    }
};