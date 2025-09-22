import imgOne from "../../assets/flutter.png";
import imgTwo from "../../assets/mern.png";
import imgThree from "../../assets/laravel.png";

const Training = () => {
  return (
    <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto min-h-[calc(100vh-655px)] sm:mt-30 mt-20 lg:mt-28 mb-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-15">
        <div className="relative group">
          <img
            src={imgOne}
            alt="Flutter"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-32 left-35 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Flutter</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgTwo}
            alt="Mern Stack"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-28 left-30 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Mern Stack</h3>
          </div>
        </div>
        <div className="relative group">
          <img
            src={imgThree}
            alt="PHP Laravel
"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-28 left-30 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>PHP Laravel</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
