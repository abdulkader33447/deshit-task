import RotatingCircle from "../../../components/RotatingCircle/RotatingCircle";
import { motion } from "framer-motion";

const Hero = () => {
  const services = [
    {
      title: "Dedicated Team",
      desc: "Our dedicated team service offers you a full-time, specialized team committed to your project. This model ensures focused expertise, quicker turnaround times, and seamless integration with your existing processes.",
      delay: 0.5,
    },
    {
      title: "Staff Augmentation",
      desc: "With our staff augmentation services, you can temporarily extend your team with experienced professionals. This approach allows you to scale resources flexibly, reduce hiring overhead, and address skill gaps efficiently.",
      delay: 0.6,
    },
    {
      title: "End-to-End Project",
      desc: "We manage your entire project from concept to completion with our end-to-end services. This comprehensive approach ensures consistency, reduces risks, and delivers a cohesive final product aligned with your business objectives.",
      delay: 0.7,
    },
  ];

  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      },
    }),
  };

  return (
    <div className="sm:w-8/12 w-11/12 mx-auto ">
      {/* Hero top section */}
      <div className="lg:flex items-center gap-10 space-y-10 lg:space-y-0">
        {/* left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <h1 className="lg:text-6xl font-semibold text-center md:text-4xl text-2xl sm:mb-7 mb-4">
            Software <br />
            Development <br /> Outsourcing Services
          </h1>
          <p className="text-center sm:text-xl lg:text-2xl text-base text-gray-700">
            Expand your capabilities by hiring our expert developers. We deliver
            top-notch software outsourcing solutions tailored to your needs
            while saving your time and resources.
          </p>
        </motion.div>

        {/* right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="sm:w-full w-9/12 mx-auto mt-15"
        >
          <RotatingCircle />
        </motion.div>
      </div>

      {/* Services section */}
      <div className="flex lg:flex-row flex-col sm:gap-10 gap-6 sm:mt-14 mt-15">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={service.delay}
            className="border-l-4 border-orange-400 pl-3 sm:pl-5 lg:pl-6 py-3"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
              {service.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
