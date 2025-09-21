import React from "react";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { motion } from "framer-motion";

const Benefits = () => {
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
    <div className="sm:w-8/12 w-11/12 mx-auto sm:mt-30 mt-10 lg:mt-28">
      <div className="text-center sm:my-12">
        <motion.h1
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:text-3xl text-xl font-bold text-center mb-5"
        >
          Benefits Of Software Development Outsourcing
        </motion.h1>
        <motion.p
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[900px] mx-auto sm:text-xl"
        >
          Outsourcing software development cuts costs, gives you access to
          expert skills, and offers flexibility. It accelerates project
          timelines, minimizes risks, and introduces new global ideas to your
          work.
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-15 gap-8 sm:mt-15 mt-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <div>
            <SiHomeassistantcommunitystore className="text-[#F86011] sm:size-10 size-7 mt-2" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold">Cost Efficiency</h1>
            <p>
              Outsourcing software development allows you to significantly cut
              costs by leveraging talent from regions with lower labor costs.
              You save on expenses like salaries, benefits, and office space,
              enabling you to allocate resources more effectively.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <div>
            <SiHomeassistantcommunitystore className="text-[#F86011] sm:size-10 size-7 mt-2" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold">
              Access to Expertise
            </h1>
            <p>
              By outsourcing, you tap into a global pool of experts who bring
              specialized skills and experience to your project. Whether you
              need cutting-edge technology, niche expertise, or
              industry-specific knowledge, outsourcing provides access to talent
              that may not be readily available in-house.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <div>
            <SiHomeassistantcommunitystore className="text-[#F86011] sm:size-10 size-7 mt-2" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold">Scalability</h1>
            <p>
              Outsourcing offers the flexibility to scale your development team
              up or down based on the demands of your project. Whether you’re
              facing a tight deadline or adjusting to a changing market, you can
              easily adapt without the complexities of hiring or downsizing
              permanent staff.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <div>
            <SiHomeassistantcommunitystore className="text-[#F86011] sm:size-10 size-7 mt-2" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold">
              Faster Time to Market
            </h1>
            <p>
              With a dedicated outsourced team, you can accelerate your project
              timelines. Experienced developers can focus on your project
              full-time, ensuring faster completion and allowing you to bring
              your product to market quicker than if relying solely on in-house
              resources.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <div>
            <SiHomeassistantcommunitystore className="text-[#F86011] sm:size-10 size-7 mt-2" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold">
              Focus on Core Business
            </h1>
            <p>
              Outsourcing lets your internal team concentrate on core business
              activities, such as strategy, marketing, and customer relations.
              While the outsourced team handles the technical aspects, your
              in-house team can focus on what they do best, driving growth and
              innovation.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <div>
            <SiHomeassistantcommunitystore className="text-[#F86011] sm:size-10 size-7 mt-2" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold">Risk Management</h1>
            <p>
              Outsourcing can help mitigate risks associated with software
              development. Experienced outsourcing partners are familiar with
              common project challenges and can navigate them effectively,
              reducing the likelihood of costly mistakes and ensuring a smoother
              development process.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
