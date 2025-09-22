import gym from "../../assets/gym.png";
import imgOne from "../../assets/Group 1000002600.jpg";
import imgTwo from "../../assets/Group 1000002602.png";
import imgThree from "../../assets/Group 1000002603.png";
import imgFour from "../../assets/Group 1000002604.jpg";
import imgFive from "../../assets/image 18.png";

const Products = () => {
  return (
    <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto min-h-[calc(100vh-655px)] sm:mt-30 mt-20 lg:mt-28">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-15">

        <div className="relative group">
          <img
            src={gym}
            alt="gym"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 left-15 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Gym Management System</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgTwo}
            alt="Inventory Management System"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-11 left-13 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Inventory Management System</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgThree}
            alt="School Management System"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-13 left-15 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>School Management System</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgFour}
            alt="Transpiration Tracker"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-20 left-22 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Transpiration Tracker</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgFive}
            alt="Logistics Management System"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-12 left-14 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Logistics Management System</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgOne}
            alt="Parcel Delivery App"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute sm:-bottom-7 -bottom-6 sm:left-20 left-22 bg-white flex justify-center sm:py-4 py-4 sm:px-10 px-5 rounded-xl shadow">
            <h3>Parcel Delivery App</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
