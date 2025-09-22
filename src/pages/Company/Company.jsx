import Swal from "sweetalert2";
import team from "../../assets/team.png";
import teer from "../../assets/teer.png";

const Company = () => {
  const consultation = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Wait for the call.",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div>
      <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto min-h-[calc(100vh-655px)] sm:mt-30 mt-20 lg:mt-28">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold">DeshITBD</h1>
            <h2 className="text-[#FA8370] font-semibold text-2xl my-5 tracking-[0.3em] uppercase">
              Simplifying Complexity Through Technology
            </h2>
            <p className="max-w-xl text-justify leading-relaxed">
              We, DeshITbd is a mobile application development startup in
              Bangladesh. We can develop apps from sketch to workable apps and
              bring them to the marketplace like Google Play. We have a
              full-stack mobile application development team consisting of
              system analysts, programmers, testers, deployment specialists, and
              database engineers. We have already launched several apps
              successfully. We also have some software products and our clients
              are using them with satisfaction. You will find our product here
              and project here.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={team} alt="team image" className="max-w-sm" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center justify-between gap-10 mt-28">
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold text-center mb-5">
              Mission
            </h1>
            {/* <h2 className="text-[#FA8370] font-semibold text-2xl my-5 tracking-[0.3em] uppercase">
            Simplifying Complexity Through Technology
          </h2> */}
            <p className="max-w-xl text-justify leading-relaxed">
              Our mission is to transform ideas into digital products and enable
              organizations to leverage technology for betterment. Our priority
              is to deliver impactful digital solutions with superior user
              experience. We build such a solution that can accelerate the
              growth of your business.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={teer} alt="team image" className="max-w-sm" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FA7470] to-[#FA9370] text-white sm:py-15 py-10">
        <div className="xl:w-8/12 lg:w-10/12 w-11/12 mx-auto">
          <h1 className="sm:text-5xl text-2xl font-bold text-center mb-8">
            How we work
          </h1>
          <p className="text-lg text-justify leading-relaxed">
            We believe in agile development. We manage our projects by following
            Scrum, the most popular widely practiced agile approach. Delivering
            working applications on budget, and on time is always our concern
            and Scrum enables us to manage our projects in such a way. Scope of
            flexibility and collaboration enable us to manage the resources
            effectively and deliver the quality product.
          </p>
          <div className="text-center mt-8">
            <button
              onClick={consultation}
              className="bg-white text-[#FA7470] btn rounded-full border-none px-10 hover:bg-gray-100"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
