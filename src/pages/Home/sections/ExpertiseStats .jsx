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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-black sm:mt-30 mt-10 lg:mt-28 sm:py-12 py-5 sm:px-none px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="sm:w-8/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 items-center justify-between">

          {/* Profile + Quote */}
          <motion.div className="stat-figure text-secondary flex sm:gap-5" variants={childVariants}>
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content sm:w-24 sm:h-24 w-15 h-15 border-2 rounded-full">
                <img
                  className="size-5"
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  alt="image"
                />
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-center text-white font-semibold text-2xl">
                Do not suffer novices, hire a <br /> skilled team!
              </h1>
              <p className="text-white">Fuad Bin Omar, COO</p>
              <p className="flex items-center gap-2 text-white">
                <IoCalendarSharp />
                Book My Calendar
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex sm:flex-row flex-col gap-6 sm:gap-10" variants={childVariants}>
            <motion.div className="stat place-items-center" variants={childVariants}>
              <div className="stat-value sm:text-5xl text-3xl font-semibold text-[#F86011]">16</div>
              <div className="stat-desc text-white text-xl">Years of Expertise</div>
            </motion.div>

            <motion.div className="stat place-items-center" variants={childVariants}>
              <div className="stat-value sm:text-5xl text-3xl font-semibold text-[#F86011]">365</div>
              <div className="stat-desc text-white text-xl">Deliver Projects</div>
            </motion.div>

            <motion.div className="stat place-items-center" variants={childVariants}>
              <div className="stat-value sm:text-5xl text-3xl font-semibold text-[#F86011]">25</div>
              <div className="stat-desc text-white text-xl">Countries Served</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseStats;
