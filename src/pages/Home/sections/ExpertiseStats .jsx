import React from "react";
import { IoCalendarSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const ExpertiseStats = () => {
  // Parent container animation for stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each child animation
  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-black sm:mt-30 mt-20 lg:mt-28 sm:py-12 py-5 sm:px-none px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="xl:w-8/12 lg:10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 items-center justify-around">
          {/* Profile + Quote */}
          <motion.div
            className="stat-figure text-secondary flex xl:flex-row flex-col items-center sm:gap-5 gap-3"
            variants={childVariants}
          >
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content xl:w-24 xl:h-24 w-15 h-15 border-2 rounded-full">
                <img
                  className="size-5"
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  alt="image"
                />
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-center text-white font-semibold xl:text-2xl text-xl">
                Do not suffer novices, hire a <br /> skilled team!
              </h1>
              <div className="flex flex-col xl:items-start items-center">
                <p className="text-white">Fuad Bin Omar, COO</p>
                <p className="flex items-center gap-2 text-center">
                  <IoCalendarSharp />
                  Book My Calendar
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex sm:flex-row flex-col gap-6 xl:gap-10 lg:gap-4"
            variants={childVariants}
          >
            <motion.div
              className="stat place-items-center"
              variants={childVariants}
            >
              <div className="stat-value xl:text-5xl lg:text-4xl text-3xl font-semibold text-[#F86011]">
                16
              </div>
              <div className="stat-desc text-white xl:text-2xl lg:text-lg text-xl">
                Years of Expertise
              </div>
            </motion.div>

            <motion.div
              className="stat place-items-center"
              variants={childVariants}
            >
              <div className="stat-value xl:text-5xl lg:text-4xl text-3xl font-semibold text-[#F86011]">
                365
              </div>
              <div className="stat-desc text-white xl:text-2xl lg:text-lg text-xl">
                Deliver Projects
              </div>
            </motion.div>

            <motion.div
              className="stat place-items-center"
              variants={childVariants}
            >
              <div className="stat-value xl:text-5xl lg:text-4xl text-3xl font-semibold text-[#F86011]">
                25
              </div>
              <div className="stat-desc text-white xl:text-2xl lg:text-lg text-xl">
                Countries Served
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseStats;
