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
      <div className="relative hidden xl:block mx-auto max-w-6xl ml-50 h-[350px]">
        {/* Yellow connector path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          stroke="#facc15"
          strokeWidth="2"
        >
          <polyline
            points="60,40 250,40 440,40 630,40 770,40 770,180 440,180 250,180 60,180 60,340 250,340 440,340 630,340 770,340 "
            fill="none"
          />
        </svg>

        {steps.map((Icon, idx) => {
          const positions = [
            { top: "4%", left: "4%" },
            { top: "4%", left: "22%" },
            { top: "4%", left: "39%" },
            { top: "4%", left: "56%" },
            { top: "20%", left: "70%" },
            { top: "43%", left: "56%" },
            { top: "43%", left: "39%" },
            { top: "43%", left: "22%" },
            { top: "43%", left: "4%" },
            { top: "89%", left: "4%" },
            { top: "89%", left: "22%" },
            { top: "89%", left: "39%" },
            { top: "89%", left: "56%" },
            { top: "89%", left: "70%" },
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

      {/* laptop layout */}
      <div className="relative xl:hidden hidden lg:block mx-auto max-w-5xl h-[370px]">
        {/* Yellow connector path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          stroke="#facc15"
          strokeWidth="2"
        >
          <polyline
            points="60,40 250,40 440,40 500,40 570,40 570,180 440,180 250,180 60,180 60,360 250,360 440,360 680,360 630,360 "
            fill="none"
          />
        </svg>

        {steps.map((Icon, idx) => {
          const positions = [
            { top: "4%", left: "5%" },
            { top: "4%", left: "30%" },
            { top: "4%", left: "53%" },
            { top: "4%", left: "79%" },
            { top: "43%", left: "5%" },
            { top: "43%", left: "30%" },
            { top: "43%", left: "53%" },
            { top: "43%", left: "79%" },
            { top: "92%", left: "5%" },
            { top: "92%", left: "30%" },
            { top: "92%", left: "53%" },
            { top: "92%", left: "79%" },
            { top: "92%", left: "96%" },
            { top: "68%", left: "5%" },
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
      <div className="relative xl:hidden md:hidden block mx-auto max-w-5xl h-[350px]">
        {/* Yellow connector path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          stroke="#facc15"
          strokeWidth="2"
        >
          <polyline
            points="20,40 40,40 440,40 330,40 330,40 330,180 330,180 250,180 40,180 40,340 250,340 440,340 680,340 630,340 "
            fill="none"
          />
        </svg>

        {steps.map((Icon, idx) => {
          const positions = [
            { top: "4%", left: "5%" },
            { top: "4%", left: "37%" },
            { top: "4%", left: "64%" },
            { top: "4%", left: "89%" },
            { top: "43%", left: "5%" },
            { top: "43%", left: "30%" },
            { top: "43%", left: "53%" },
            { top: "43%", left: "79%" },
            { top: "92%", left: "5%" },
            { top: "92%", left: "30%" },
            { top: "92%", left: "53%" },
            { top: "92%", left: "74%" },
            { top: "92%", left: "91%" },
            { top: "68%", left: "5%" },
          ];
          const pos = positions[idx];
          return (
            <div
              key={idx}
              className="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-md"
              style={{ top: pos.top, left: pos.left }}
            >
              <Icon className="text-orange-500" size={20} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Workflow;
