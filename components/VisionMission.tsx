"use client";

import { youtube } from "@/contants";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        width="61"
        height="63"
        viewBox="0 0 61 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60.16" height="62.16" rx="6" fill="#E1AD56" />
        <path
          d="M22.1892 34.069C21.6846 32.9349 21.4033 31.6731 21.4033 30.3435C21.4033 25.4055 25.2835 21.4023 30.07 21.4023C34.8565 21.4023 38.7367 25.4055 38.7367 30.3435C38.7367 31.6731 38.4553 32.9349 37.9508 34.069"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M30.0703 16.7356V18.0689"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M43.4036 30.0688H42.0703"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.0706 30.0688H16.7373"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M39.4975 20.6406L38.5547 21.5834"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.5864 21.5845L20.6436 20.6417"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.426 39.8107C34.7732 39.375 35.3135 38.1419 35.4655 36.9016C35.5108 36.5311 35.206 36.2238 34.8327 36.2238L25.3725 36.224C24.9863 36.224 24.6762 36.5518 24.7223 36.9351C24.8712 38.173 25.2469 39.0772 26.6746 39.8107M33.426 39.8107C33.426 39.8107 26.9096 39.8107 26.6746 39.8107M33.426 39.8107C33.264 42.404 32.5151 43.4311 30.0791 43.4023C27.4735 43.4504 26.874 42.181 26.6746 39.8107"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    title: "Vision",
    description:
      "To transform everyday spaces with beautifully crafted cabinetry that inspires comfort, functionality, and lasting value."
  },
  {
    icon: (
      <svg
        width="61"
        height="63"
        viewBox="0 0 61 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60.16" height="62.16" rx="6" fill="#E1AD56" />
        <path
          d="M34.2456 17.4032C32.9322 16.9706 31.5288 16.7366 30.0706 16.7366C22.7068 16.7366 16.7373 22.7061 16.7373 30.0699C16.7373 37.4336 22.7068 43.4032 30.0706 43.4032C37.4344 43.4032 43.404 37.4336 43.404 30.0699C43.404 28.6763 43.1901 27.3326 42.7936 26.0699"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M36.7367 30.07C36.7367 33.7519 33.7519 36.7367 30.07 36.7367C26.3881 36.7367 23.4033 33.7519 23.4033 30.07C23.4033 26.3881 26.3881 23.4033 30.07 23.4033"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.0703 20.0699L30.0703 30.0699M40.0703 20.0699V16.7366M40.0703 20.0699H43.4036"
          stroke="#2E2E2E"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    ),

    title: "Mission",
    description:
      "To deliver exceptional cabinetry through thoughtful design, quality craftsmanship, and a commitment to every client’s unique vision."
  }
];

function VisionMission() {
  return (
    <div>
      <motion.div
        className="w-full bg-[#2a2a2a] px-4 py-12 sm:px-6 md:px-14 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="bg-white h-[1.7px] w-10" />
            <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
          </div>
          <h2 className="font-serif text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            Vision & Mission
          </h2>
          <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[16px] mt-4 max-w-[650px] px-2 sm:px-4 leading-relaxed">
            We are committed to creating beautifully crafted cabinetry that
            combines thoughtful design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-2 md:px-6 lg:px-14">
          {features.map((feature, i) => {
            return (
              <motion.div
                key={i}
                className="w-full h-full bg-[#242424] rounded p-4 sm:p-5 md:p-6 md:py-10 flex flex-col gap-4 sm:flex-row sm:items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -8, backgroundColor: "#444444" }}
              >
                <motion.div
                  className="text-[#E1AD56] flex-shrink-0 mx-auto sm:mx-0"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-[12px] sm:text-[13px] md:text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <div className="px-4 py-8 my-8 sm:px-6 md:p-8 md:my-14 flex items-center justify-center">
        <Image
          src={youtube}
          alt="youtube preview"
          width={1500}
          height={1500}
          className="w-full h-auto max-w-[1500px]"
        />
      </div>
    </div>
  );
}

export default VisionMission;
