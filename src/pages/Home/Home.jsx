import Benefits from "./sections/Benefits";
import Client from "./sections/Client";
import ExpertiseStats from "./sections/ExpertiseStats ";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Technology from "./sections/Technology";
import Testimonial from "./sections/Testimonial";
import Workflow from "./sections/Workflow";

const Home = () => {
  return (
    <div className="sm:mt-30 mt-10">
      <Hero />
      <Client />
      <ExpertiseStats />
      <Services />
      <Benefits />
      <Workflow />
      <Technology />
      <Portfolio />
      <Testimonial />
    </div>
  );
};

export default Home;
