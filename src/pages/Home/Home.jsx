import Client from "./sections/Client";
import ExpertiseStats from "./sections/ExpertiseStats ";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const Home = () => {
  return (
    <div className="sm:mt-30 mt-10">
      <Hero />
      <Client />
      <ExpertiseStats />
      <Services />
    </div>
  );
};

export default Home;
