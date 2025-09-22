import { motion } from "framer-motion";
import imgOne from "../../../assets/Rectangle 1.png";
import imgTwo from "../../../assets/Rectangle 2.png";
import imgThree from "../../../assets/Rectangle 3.png";
import Swal from "sweetalert2";

const text = "Our Projects & Portfolio";

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

const handleReadMore = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Content will be coming soon",
    icon: "success",
    draggable: true,
  });
};

const Portfolio = () => {
  return (
    <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto sm:mt-30 mt-20 lg:mt-28">
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
      <div className="flex lg:flex-row flex-col items-center justify-around xl:gap-20 gap-10 mt-10">
        <img className="xl:w-full lg:w-65" src={imgOne} alt="dheki shak" />
        <img
          className="xl:w-full lg:w-65"
          src={imgTwo}
          alt="mountain, city, sky"
        />
        <img className="xl:w-full lg:w-65" src={imgThree} alt="Glass ball" />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleReadMore}
          className="btn text-center bg-[#F86011] text-white border-none hover:bg-[#e65406] hover:border-none sm:mt-20 mt-10"
        >
          Read more case studies
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
