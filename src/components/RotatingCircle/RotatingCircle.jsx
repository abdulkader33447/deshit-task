import {
  FaBolt,
  FaCrown,
  FaSyncAlt,
  FaBullseye,
  FaFacebook,
} from "react-icons/fa";
import "./RotatingCircle.css"

const RotatingCircle = () => {
  
  const radius = 135;
  const centerX = 140;
  const centerY = 140;
  
 
  const angles = [0, 72, 144, 216, 288]; // degrees
  
  // Icon mapping
  const icons = [FaBolt, FaCrown, FaSyncAlt, FaBullseye, FaFacebook];

  return (
    <div className="relative flex items-center justify-center sm:w-[300px] w-[200px] sm:h-[300px] h-[200px] mx-auto">
      {/* Center text */}
      <div className="absolute text-center z-10">
        <h2 className="font-bold text-lg">API Development</h2>
        <p className="text-sm">
          APIs that Power Your Digital Ecosystem
        </p>
      </div>

      {/* Visible Circle Border */}
      <div className="absolute w-[280px] h-[280px] border-2 border-gray-200 rounded-full opacity-80 animate-pulse"></div>

      {/* Rotating Container */}
      <div className="absolute w-[280px] h-[280px] rounded-full">
        <div className="absolute w-full h-full animate-spin-slow origin-center">
          {/* Icons positioned on circle circumference */}
          {angles.map((angle, index) => {
            // Convert degrees to radians
            const radian = (angle * Math.PI) / 180;
            
            // Calculate exact position using trigonometry
            const x = centerX + radius * Math.cos(radian);
            const y = centerY + radius * Math.sin(radian);
            
            const IconComponent = icons[index];
            
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  width: '28px',
                  height: '28px',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Icon container with border */}
                <div className="w-6 h-6 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center">
                  <IconComponent size={15} className="text-orange-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;