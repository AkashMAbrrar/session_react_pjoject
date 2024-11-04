import BannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}>
      <div className="hero-overlay bg-opacity-25 min-h-[600px]"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-50">
            Make Yourself More Pro Active
          </h1>
          <p className="mb-5 text-white font-bold">
            Coffee is more than just a beverage; it’s a daily ritual and a
            source of energy that fuels millions around the world.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// https://i.ibb.co.com/tZLR9Wq/banner.jpg
