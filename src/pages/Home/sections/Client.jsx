import un from "../../../assets/un.png";
import itc from "../../../assets/itc.png";
import gp from "../../../assets/gp.png";
import nokia from "../../../assets/nokia.png";
import vivo from "../../../assets/vivo.png";
import { motion } from "framer-motion";

const logos = [
  { src: un, alt: "United Nations logo" },
  { src: itc, alt: "ITC logo" },
  { src: gp, alt: "Grameenphone logo" },
  { src: nokia, alt: "Nokia logo" },
  { src: vivo, alt: "Vivo logo" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // smooth ease
    },
  },
};

const Client = () => {
  return (
    <div className="sm:w-8/12 w-11/12 mx-auto sm:mt-30 mt-10 lg:mt-28">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center text-xl sm:text-2xl lg:text-3xl font-bold"
      >
        Trusted By 100+ Companies including
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-28 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            variants={itemVariants}
            className="h-5 sm:h-8 lg:h-10 object-contain"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Client;
