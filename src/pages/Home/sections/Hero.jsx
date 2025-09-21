import RotatingCircle from "../../../components/RotatingCircle/RotatingCircle";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="lg:flex gap-10 space-y-15">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="lg:text-6xl font-semibold text-center md:text-4xl text-2xl sm:mb-7 mb-4">
            Software <br />
            Development <br /> Outsourcing Services
          </h1>
          <p className="text-center sm:text-2xl">
            Expand your capabilities by hiring our expert developers. We deliver
            top-notch software outsourching solutions tailored to your needs
            while saving your time and resources.
          </p>
        </motion.div>
        {/* right */}
        <motion.div className="sm:w-full w-8/12 mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <RotatingCircle />
        </motion.div>
      </div>
      <div className="flex lg:flex-row flex-col sm:gap-10 gap-5 mt-20">
        <motion.div
          className="border-l-3 border-orange-400 pl-2 sm:pl-4 lg:pl-4 py-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        //   animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
            Dedicated Team
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Our dedicated team service offers you a full-time, specialized team
            committed to your project. This model ensures focused expertise,
            quicker turnaround times, and seamless integration with your
            existing processes.
          </p>
        </motion.div>
        <motion.div
          className="border-l-3 border-orange-400 pl-2 sm:pl-4 lg:pl-4 py-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        //   animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
            Dedicated Team
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Our dedicated team service offers you a full-time, specialized team
            committed to your project. This model ensures focused expertise,
            quicker turnaround times, and seamless integration with your
            existing processes.
          </p>
        </motion.div>
        <motion.div
          className="border-l-3 border-orange-400 pl-2 sm:pl-4 lg:pl-4 py-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        //   animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
            Dedicated Team
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Our dedicated team service offers you a full-time, specialized team
            committed to your project. This model ensures focused expertise,
            quicker turnaround times, and seamless integration with your
            existing processes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
