// app/login/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../authContext";
import Avatar1 from "../assets/images/Avatar (1).png";
import Avatar2 from "../assets/images/Avatar (2).png";
import Avatar3 from "../assets/images/Avatar (3).png";
import Avatar4 from "../assets/images/Avatar (4).png";
import Image from "next/image";
import loginBackground from "../assets/images/Login.jpg";

const avatars = [
  { src: Avatar1, id: "avatar1" },
  { src: Avatar2, id: "avatar2" },
  { src: Avatar3, id: "avatar3" },
  { src: Avatar4, id: "avatar4" },
  // Add more avatars as needed
];

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedAvatar) {
      const user = { username, password, avatar: selectedAvatar };
      login(user);
      router.push("/levels");
    } else {
      alert("Please select an avatar");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={loginBackground}
          alt="Quiz Background"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 bg-main opacity-85"></div>
      </div>
      <div className="z-10 text-center flex flex-col gap-8 mx-8">
        <h1 className="text-center text-second changabold text-3xl">
          تسجيل دخول
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="rounded bg-second py-2 placeholder:changabold text-right placeholder:text-right px-2 changaregular text-third placeholder:text-third/90"
            type="text"
            dir="rtl"
            placeholder="الإسم..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="rounded bg-second py-2 placeholder:changabold text-right placeholder:text-right px-2 changaregular text-third placeholder:text-third/90"
            dir="rtl"
            type="password"
            placeholder="كلمة المرور..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center gap-4">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className={`cursor-pointer border-2 rounded-full p-1 ${
                  selectedAvatar === avatar.id
                    ? "border-main"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAvatar(avatar.id)}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.id}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 mx-8 py-1 changabold text-main bg-second rounded shadow-xl"
          >
            تأكيد المعلومات
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
