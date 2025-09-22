import { motion } from "framer-motion";

const text = "Our Advanced Development Technology";

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

const Technology = () => {
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
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold text-center mb-5 flex flex-wrap justify-center">
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

        <p className="max-w-[900px] mx-auto sm:sm:text-xl text-center text-lg">
          Our advanced development technologies, including AI, machine learning,
          blockchain, and microservices, enable us to deliver innovative,
          future-proof solutions with exceptional efficiency and scalability.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-10 sm:mt-15 mt-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5">
            Machine Learning
          </h1>
          <p className="sm:text-xl">
            We integrate machine learning into client projects to automate
            processes, predict outcomes, and personalize experiences. This
            technology boosts efficiency and innovation, providing scalable
            solutions that grow with your business.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5">
            Blockchain
          </h1>
          <p className="sm:text-xl">
            We build secure, decentralized solutions powered by blockchain. From
            smart contracts to supply chain transparency, our blockchain
            services enhance trust, security, and efficiency in digital
            ecosystems.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5">Big Data</h1>
          <p className="sm:text-xl">
            Utilize Big Data to analyze large volumes of information and gain
            actionable insights. Real-time analytics and predictive modeling
            drive better decision-making and optimize operations, keeping your
            projects competitive and agile.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5">
            Internet of Things (IoT)
          </h1>
          <p className="sm:text-xl">
            Leverage IoT to connect and manage devices, enabling real-time
            monitoring and automation. This technology enhances operational
            efficiency and data-driven decision-making, ensuring your projects
            are smart and future-ready.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5">
            Natural Language Processing
          </h1>
          <p className="sm:text-xl">
            Our experts use Natural Language Processing to create intuitive,
            language-driven applications. By automating tasks like customer
            support and data processing, we enhance user interactions and
            improve efficiency in client projects.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5">
            Facial Recognition
          </h1>
          <p className="sm:text-xl">
            We implement facial recognition technology to enhance security and
            personalize user experiences in client projects. This technology
            offers accurate identification and streamlined authentication,
            making your applications secure and user-friendly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
