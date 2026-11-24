import { About } from "@/widgets/about/about";
import { Exhibitions } from "@/widgets/exhibitions/exhibitions";
import { Hero } from "@/widgets/hero/hero";
import { Painters } from "@/widgets/painters/painters";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Exhibitions />
      <Painters />
    </>
  );
};

export default Home;
