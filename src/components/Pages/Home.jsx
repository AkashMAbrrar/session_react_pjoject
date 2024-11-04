import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Heading from "../Heading";
import Categories from "../Categories";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading
        title={"Browse Coffees By Category"}
        subtitle={
          "Choose Your Desire Coffee Category To Browse Through Specific Coffee That Fit In Your Taste."
        }></Heading>
      {/* Categories tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested Component */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
