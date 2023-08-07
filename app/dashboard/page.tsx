"use client";
import DefaultLayout from "@/app/layout/DefaultLayout";
import Link from "next/link";

export default function DashBoard() {

    return(
        <>
        <DefaultLayout>
        <Link href="/question">
            Question
        </Link>
        </DefaultLayout>
        </>

    )
}