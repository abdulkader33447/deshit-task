import { motion } from "framer-motion";
import image from "../../../assets/Rectangle 4.png";

const text = "Clients Testimonials";

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

const Testimonial = () => {
  return (
    <div className="sm:w-8/12 w-11/12 mx-auto sm:mt-30 mt-20 lg:mt-28">
      <h1 className="text-2xl font-bold text-center">
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
      <p className="max-w-[900px] mx-auto sm:text-xl text-center mt-5">
        We Measure Success Through Client Satisfaction. 
        <span className="text-lg font-bold">Words from Our Clients</span>
      </p>
      <div className="flex items-center justify-center sm:mt-20 mt-10">
        <img src={image} alt="image" />
      </div>
      <div className="border border-dashed lg:rounded-xl rounded-lg lg:px-20 px-2 lg:py-5 py-2 text-center mt-5">
        <p>
          Everything went extremely well. My project was fairly complex and
          required Nascenia to investigate new technologies/APIs. They succeeded
          with flying colors and I can’t wait to get started on another project.
          I was very impressed with their communication and willingness to move
          directions slightly. The code produced was excellent. Fantastic team!
        </p>
      </div>
      <div className="sm:mt-10 mt-5 text-center">
        <p>
          <span className="sm:font-bold font-black">Patrick Stockwell,</span>
           Founder, Volta Inc. San Francisco Bay Area, USA, Project: Baller ID
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 sm:mt-4 mt-2">
        <span className="bg-orange-400 sm:p-[5px] p-[4px] rounded-full"></span>
        <span className="bg-gray-200 sm:p-[5px] p-[4px] rounded-full"></span>
        <span className="bg-gray-200 sm:p-[5px] p-[4px] rounded-full"></span>
      </div>
    </div>
  );
};

export default Testimonial;
