import imgOne from "../../assets/ProjectOne.png";
import imgTwo from "../../assets/ProjectTwo.jpg";
import imgThree from "../../assets/ProjectThree.png";
import imgFour from "../../assets/ProjectFour.png";
import imgFive from "../../assets/ProjectFive.jpg";
import imgSix from "../../assets/ProjectSix.png";
import imgSeven from "../../assets/ProjectSeven.png";
import imgEight from "../../assets/ProjectEight.jpg";
import imgNine from "../../assets/ProjectNine.png";
import imgTen from "../../assets/ProjectTen.png";
import imgEleven from "../../assets/ProjectEleven.png";
import imgTwelve from "../../assets/ProjectTwelve.png";

const Projects = () => {
  return (
    <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto min-h-[calc(100vh-655px)] sm:mt-30 mt-20 lg:mt-28 mb-10">
      {/* container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-15">
        {/* 1 */}
        <div className="relative group">
          <img
            src={imgOne}
            alt="gym"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 left-15 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Gym Management System</h3>
          </div>
        </div>

        {/* 2 */}
        <div className="relative group">
          <img
            src={imgTwo}
            alt="সহজ কুরআন শিক্ষা"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-20 left-25 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>সহজ কুরআন শিক্ষা</h3>
          </div>
        </div>

        {/* 3 */}
        <div className="relative group">
          <img
            src={imgThree}
            alt="SBI General Secure"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-21 left-23 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>SBI General Secure</h3>
          </div>
        </div>

        {/* 4 */}
        <div className="relative group">
          <img
            src={imgFour}
            alt="My Tamimi App"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-24 left-26 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>My Tamimi App</h3>
          </div>
        </div>

        {/* 5 */}
        <div className="relative group">
          <img
            src={imgFive}
            alt="Sleeptot-Baby White Noise"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 left-15 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Sleeptot-Baby White Noise</h3>
          </div>
        </div>

        {/* 6 */}
        <div className="relative group">
          <img
            src={imgSix}
            alt="German Language App"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-18 left-20 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>German Language App</h3>
          </div>
        </div>

        {/* 7 */}
        <div className="relative group">
          <img
            src={imgSeven}
            alt="Walliflex"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-28 left-32 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Walliflex</h3>
          </div>
        </div>

        {/* 8 */}
        <div className="relative group">
          <img
            src={imgEight}
            alt="Telefood"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-30 left-32 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Telefood</h3>
          </div>
        </div>

        {/* 9 */}
        <div className="relative group">
          <img
            src={imgNine}
            alt="Cinebaz"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-30 left-32 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Cinebaz</h3>
          </div>
        </div>

        {/* 10 */}
        <div className="relative group">
          <img
            src={imgTen}
            alt="Sole Retriever"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-25 left-26 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Sole Retriever</h3>
          </div>
        </div>

        {/* 11 */}
        <div className="relative group">
          <img
            src={imgEleven}
            alt="Quiz Battle
"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-26 left-30 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Quiz Battle</h3>
          </div>
        </div>

        {/* 12 */}
        <div className="relative group">
          <img
            src={imgTwelve}
            alt="TeQuip"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 lg:left-32 left-35 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>TeQuip</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
