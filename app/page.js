"use client";
import React from "react";
import Logo from "./assets/images/WhiteLogo.svg";
import backgroundImage from "./assets/images/City 2.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/reusable/Navbar";

const Page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
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
      <div className="z-10 text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Logo} alt="Logo" className="w-52 my-8 mx-auto" />
        </motion.div>
        <motion.h5
          className="changaregular text-lg text-second mx-6"
          dir="rtl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          اختبر معرفتك بسيرة النبي محمد صلى الله عليه وسلّم وانطلق في رحلة
          تعليمية ممتعة ومفيدة تستكشف فيها حياته وأثره العظيم.
        </motion.h5>
        <div className="w-fit mx-auto flex flex-col gap-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-second rounded"
          >
            <Link href="/levels">
              <p className="changaregular text-main px-2 py-1">
                الانتقال إلى التحدّيات
              </p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-second rounded"
          >
            <Link href="/quiz">
              <p className="changaregular text-main px-2 py-1">تسجيل دخول</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
