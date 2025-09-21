import {
  FiMessageSquare,
  FiShield,
  FiCheckSquare,
  FiGlobe,
  FiLayers,
  FiUser,
  FiMove,
  FiGrid,
  FiClipboard,
  FiTarget,
  FiDownload,
  FiZap,
  FiAward,
} from "react-icons/fi";
import { motion } from "framer-motion";

const text = "Outsourced Software Development Workflow";

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

const steps = [
  FiMessageSquare,
  FiShield,
  FiCheckSquare,
  FiGlobe,
  FiLayers,
  FiUser,
  FiMove,
  FiGrid,
  FiMessageSquare,
  FiTarget,
  FiClipboard,
  FiAward,
  FiDownload,
  FiZap,
];

const Workflow = () => {
  return (
    <section className="sm:w-8/12 w-11/12 mx-auto sm:mt-30 mt-20 lg:mt-28">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="sm:text-3xl text-2xl font-bold text-center mb-5">
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
        <p className="max-w-[900px] mx-auto sm:text-xl text-center">
          Our Strategic Development Plan streamlines project execution, enhances
          collaboration, and ensures timely delivery with flexible scaling—all
          while maintaining high-quality standards.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden md:block mx-auto max-w-6xl h-[350px]">
        {/* Yellow connector path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          stroke="#facc15"
          strokeWidth="2"
        >
          <polyline
            points="60,40 250,40 440,40 630,40 760,110 630,180 440,180 250,180 60,180 60,260 250,260 440,260 630,260 760,260"
            fill="none"
          />
        </svg>

        {steps.map((Icon, idx) => {
          const positions = [
            { top: "10%", left: "5%" },
            { top: "10%", left: "22%" },
            { top: "10%", left: "39%" },
            { top: "10%", left: "56%" },
            { top: "30%", left: "72%" },
            { top: "52%", left: "56%" },
            { top: "52%", left: "39%" },
            { top: "52%", left: "22%" },
            { top: "52%", left: "5%" },
            { top: "72%", left: "5%" },
            { top: "72%", left: "22%" },
            { top: "72%", left: "39%" },
            { top: "72%", left: "56%" },
            { top: "72%", left: "72%" },
          ];
          const pos = positions[idx];
          return (
            <div
              key={idx}
              className="absolute flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full shadow-md"
              style={{ top: pos.top, left: pos.left }}
            >
              <Icon className="text-orange-500" size={24} />
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Timeline */}
      <div className="md:hidden relative max-w-md mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-yellow-300" />
        <ul className="space-y-10">
          {steps.map((Icon, index) => (
            <li key={index} className="relative flex items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <Icon className="text-orange-500" size={22} />
              </div>
              <div className="ml-6 mt-1 text-gray-700 font-medium">
                Step {index + 1}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Workflow;
