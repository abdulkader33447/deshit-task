import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message sent.",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto sm:mt-30 mt-20 lg:mt-28">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
        {/* address */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Our Location</h1>
          <p className="text-xl">
            D/36, Block-E Lalmatiya, Dhaka <br /> Dhaka 1207, Bangladesh
          </p>
          <h1 className="text-2xl font-bold mt-8">Say Hello</h1>
          <p className="flex text-xl items-center gap-3 text-[#FA8370]">
            <IoCall /> +880 181 332 0587
          </p>
          <hr className="text-[#a0a0a0]" />
          <p className="flex text-xl items-center gap-3 text-[#d0d0d0]">
            <IoMdMail />{" "}
            <span className="text-[#717171]">info@deshit-bd.com</span>
          </p>
        </div>

        {/* form */}
        <form className="space-y-4 py-10">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
            required
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-full bg-[#FDF8F8] focus:outline-none"
            />
            <input
            required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full bg-[#FDF8F8] focus:outline-none"
            />
          </div>

          {/* Subject */}
          <input
          required
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-full bg-[#FDF8F8] focus:outline-none"
          />

          {/* Comment */}
          <textarea
            placeholder="Your Comment"
            rows="5"
            className="w-full px-4 py-3 rounded-2xl bg-[#FDF8F8] focus:outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="cursor-pointer px-6 py-3 rounded-2xl bg-[#FA8370] text-white font-medium shadow-xl hover:bg-[#e65406] transition"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
