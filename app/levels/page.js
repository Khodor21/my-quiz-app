"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../authContext";
import backgroundImage from "../assets/images/City 2.jpg";
import Image from "next/image";
import Navbar from "../components/reusable/Navbar";
import Link from "next/link";
import { IoMdLock } from "react-icons/io";
import { IoMdUnlock } from "react-icons/io";

const Page = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [isLoggedIn, router]);
  return (
    <div className="h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Quiz Background"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 bg-main opacity-85"></div>
      </div>
      <Navbar />
      <div className="z-10 text-center flex flex-col gap-4 mx-10">
        <h1 className="text-center changabold text-lg text-second" dir="rtl">
          استمتع باجتياز المستويات!
        </h1>
        {[...Array(10).keys()].map((index) => (
          <Link key={index} href={`/levels/${index + 1}`}>
            <div className="bg-second rounded w-full max-w-xl cursor-pointer">
              <div className="flex justify-between mx-2">
                <IoMdLock className="text-main text-xl mt-[6px]" />{" "}
                <p className="changaregular text-main px-2 py-1">
                  المستوى {index + 1}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
