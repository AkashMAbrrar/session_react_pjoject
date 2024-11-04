/* eslint-disable react/prop-types */

const Heading = ({ title, subtitle }) => {
  return (
    <div className=" flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-4xl text-slate-50 text-center">{title}</h1>
      <p className="text-xl  text-slate-50 text-center font-thin mt-6">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
