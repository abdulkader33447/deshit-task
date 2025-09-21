import React from "react";
import { BsBoxArrowUpRight, BsMenuButtonWide } from "react-icons/bs";
import { CiGlobe, CiMobile3 } from "react-icons/ci";
import { FiMonitor } from "react-icons/fi";
import { GiShipWheel } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import {
  HiOutlineBookmarkSquare,
  HiOutlineCheckBadge,
  HiOutlineCloud,
  HiOutlineLockClosed,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { SiGooglegemini } from "react-icons/si";
import { motion } from "framer-motion";

const text = "Software Development Services";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="sm:w-8/12 w-11/12 mx-auto sm:mt-30 mt-20 lg:mt-28">
      <h1 className="sm:text-3xl text-2xl font-bold text-center">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            whileInView="visible"
            //   animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      {/* service container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8">
        {/* Mobile App Development */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <CiMobile3 className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Mobile App Development</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outsource mobile development to our global team for user-friendly
            apps across iOS and Android. We ensure high-quality, secure, and
            performant applications that accelerate your time-to-market and
            control costs.
          </p>
        </motion.div>

        {/* Web Development */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <CiGlobe className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Web Development</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our offshore web development teams craft responsive, secure websites
            using PHP, Ruby on Rails, AngularJS, ReactJS, and NodeJS.
            Outsourcing ensures high-quality, cost-effective solutions tailored
            to your needs.
          </p>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <FiMonitor className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">UI/UX Design</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our remote UI/UX designers create engaging, user-centric interfaces.
            Outsourcing design services ensures aesthetically pleasing and
            functional products, speeding up development and enhancing user
            satisfaction.
          </p>
        </motion.div>

        {/* DevOps */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <BsBoxArrowUpRight className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">DevOps</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outsource DevOps to our global team to streamline software delivery
            with automation and CI/CD. This approach enhances collaboration,
            reduces time-to-market, and improves software quality efficiently.
          </p>
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <HiOutlineCheckBadge className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Quality Assurance</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our global QA team provides thorough testing services, including
            manual and automated checks. Outsourcing QA ensures your software is
            flawless and reliable, reducing risks and meeting user expectations.
          </p>
        </motion.div>

        {/* Cyber Security */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <HiOutlineLockClosed className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Cyber Security</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Protect your business with our offshore cyber security services,
            covering everything from vulnerability assessments to ongoing
            monitoring. Outsourcing provides expert security solutions to
            safeguard your data and infrastructure.
          </p>
        </motion.div>

        {/* Salesforce */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <HiOutlineCloud className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Salesforce</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outsource Salesforce implementation and customization to our skilled
            team to optimize this leading CRM. We handle setup, integration, and
            support, efficiently enhancing your sales processes and customer
            engagement.
          </p>
        </motion.div>

        {/* Odoo */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <HiOutlineBookmarkSquare className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Odoo</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Maximize Odoo’s potential with our offshore team’s implementation,
            customization, and support services. Outsourcing helps streamline
            operations and improve efficiency without the overhead of an
            in-house team.
          </p>
        </motion.div>

        {/* Magento */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <HiOutlineShoppingCart className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Magento</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our offshore experts customize and optimize Magento e-commerce
            platforms to drive sales and growth. Outsourcing ensures a secure,
            high-performance online store tailored to your business needs.
          </p>
        </motion.div>

        {/* Drupal */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <GiShipWheel className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Drupal</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outsource your Drupal projects to our global team for secure,
            high-performing CMS solutions. We provide end-to-end services,
            ensuring your site is well-managed and aligned with your business
            goals.
          </p>
        </motion.div>

        {/* Ruby On Rails */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <BsMenuButtonWide className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Ruby On Rails</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Utilize our offshore Ruby on Rails experts to build scalable,
            high-performance web applications quickly and efficiently. This
            approach accelerates development and reduces costs while ensuring
            robust and secure applications.
          </p>
        </motion.div>

        {/* NodeJS Development */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <GoShieldCheck className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">NodeJS Development</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our offshore NodeJS developers create fast, scalable applications
            with real-time capabilities. Outsourcing to our team provides
            efficient, high-performance backends and APIs while allowing you to
            focus on your core business.
          </p>
        </motion.div>

        {/* PHP Development */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <CiMobile3 className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">PHP Development</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outsource your PHP development to our skilled team, which
            specializes in frameworks like Laravel and Symfony. We deliver
            dynamic, feature-rich websites and secure, scalable, and
            budget-friendly applications.
          </p>
        </motion.div>

        {/* Angular & React */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-4 max-w-sm mx-auto"
        >
          <motion.div variants={cardVariants}>
            <SiGooglegemini className="mb-4 size-10 text-[#F86011]" />
          </motion.div>
          <h1 className="text-lg font-bold mb-2">Angular JS And ReactJS</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Leverage our offshore team’s expertise in AngularJS and ReactJS for
            building fast, interactive web applications. Outsourcing ensures
            cutting-edge technology and a superior user experience while
            managing development costs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
