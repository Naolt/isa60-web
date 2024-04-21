/* eslint-disable @next/next/no-img-element */
import {
  IconBrandFacebook,
  IconBrandYoutube,
  IconClock,
  IconLocation,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="p-10 sm:p-20 flex flex-col gap-12 lg:gap-20  lg:px-32 lg:py-16">
      <div className="flex justify-between flex-wrap gap-32">
        {/* contact information */}
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="capitalize font-bold text-5xl text-black">
            Contact us
          </h1>
          <p className="text-gray-700">
            Get in Touch! Do you have a question, want to volunteer, or have a
            project that aligns with our mission? Reach out and let&apos;s start
            a conversation.
          </p>
          <h2 className="font-medium text-2xl">About information</h2>
          {/* about information */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <span className="flex justify-center items-center p-2 border border-gray-900 rounded-xl">
                <IconMail size={24} className=" text-gray-900" />
              </span>
              <span className="font-medium text-lg">
                <Link
                  href="mailto:thomasisatpeace@gmail.com"
                  className={`text-center sm:text-start font-medium hover:text-primary transition-colors duration-75 ease-in-out
      }`}
                >
                  thomasisatpeace@gmail.com
                </Link>{" "}
                |{" "}
                <Link
                  href="mailto:isa60intethiomin@gmail.com"
                  className={`text-center sm:text-start font-medium hover:text-primary transition-colors duration-75 ease-in-out
      }`}
                >
                  isa60intethiomin@gmail.com
                </Link>
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="flex justify-center items-center p-2 border border-gray-900 rounded-xl">
                <IconPhoneCall size={24} className=" text-gray-900" />
              </span>
              <span className="font-medium text-lg">
                +251911746538 / +251912466019
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="flex justify-center items-center p-2 border border-gray-900 rounded-xl">
                <IconLocation size={24} className=" text-gray-900" />
              </span>
              <span className="font-medium text-lg">
                Jemo Mikael, Mina Mall building 5th floor
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="flex justify-center items-center p-2 border border-gray-900 rounded-xl">
                <IconClock size={24} className=" text-gray-900" />
              </span>
              <span className="font-medium text-lg">08:00 - 17:00</span>
            </div>
          </div>
          {/* social links */}
          <div className="flex gap-6">
            <Link href={"mailto:thomasisatpeace@gmail.com"}>
              <span className="flex justify-center items-center p-2 border bg-primary hover:bg-yellow-500 transition-colors duration-75 ease-in-out rounded-full">
                <IconMail size={24} className=" text-white" />
              </span>
            </Link>
            <span className="flex justify-center items-center p-2 border bg-primary rounded-full">
              <IconBrandFacebook size={24} className=" text-white" />
            </span>
            <Link
              href={"https://www.youtube.com/channel/UCamASmjNlJaPFYq5risvkcA"}
              target="_blank"
            >
              <span className="flex justify-center items-center p-2 border bg-primary rounded-full  hover:bg-yellow-500 transition-colors duration-75 ease-in-out">
                <IconBrandYoutube size={24} className=" text-white" />
              </span>
            </Link>
          </div>
        </div>

        {/* contact form */}
        <div className="flex-1">
          <img
            src="/assets/Leadership/tomas.jpg"
            alt="Director Image"
            className="flex-1 w-full h-[600px] object-top object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="w-full flex justify-between  rounded-xl gap-48">
        {/* contact form */}
        {/*<div className="flex-1 border-2 border-primary rounded p-8 max-w-[500px] flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label htmlFor="full_name" className="font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="border border-yellow-400 p-4 rounded-md"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              type="text"
              className="border border-yellow-400 p-4 rounded-md"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="full_name" className="font-medium">
              Message
            </label>
            <textarea
              className="border border-yellow-400 p-4 rounded-md h-48"
              placeholder="Enter your full name"
            />
          </div>
          <button className="bg-primary text-black p-4 rounded-md font-medium">
            Send Message
          </button>
        </div>*/}
        {/* map */}
        <div className="flex-1 h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.948404854809!2d38.718320593089764!3d8.97081774798827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b87d728536d7b%3A0xde1f55499d07d56c!2sMina%20Mall%2C%20Jemo%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1713082936924!5m2!1sen!2set"
            //width="600"
            loading="lazy"
            className="flex-1 rounded-xl w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
