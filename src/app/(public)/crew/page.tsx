'use client';
import Image from "next/image";
import { Directors } from "./Directors";
import { Regulars } from "./Regulars";
import { Management } from "./Management";
import {  FaDiscord, FaGithub } from "react-icons/fa6";
import { InView } from "react-intersection-observer";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const Page = () => {
  return (
    <section className="flex flex-col w-full gap-y-8">
      <div className="flex flex-col items-center justify-center w-full min-h-screen h-fit gap-y-8 pt-24">
        <h2 className="font-bold font-header text-pink-gradient">Executives</h2>
        <Directors/>
      </div>
      <div className="flex flex-col items-center justify-center w-full min-h-fit h-screen gap-y-8">
        <h2 className="font-bold font-header text-pink-gradient">Management</h2>
        <Management/>
      </div>
    </section>
  );
};
export default Page;