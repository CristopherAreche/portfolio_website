import React from "react";

const RedirectionPage = () => {
  return (
    <div className="py-5 min-vh-100 bg-white w-100 flex justify-center items-center">
      <div className="gap-5 flex flex-col justify-center items-center p-5 w-[39rem] rounded-lg shadow-lg">
        <h3 className="text-4xl font-bold text-gray-700 uppercase">
          Discover My Portfolio 2.0
          <span className="text-3xl text-green-600">
            {" "}
            The Evolution Continues.
          </span>
        </h3>
        <p className="text-gray-500 text-xl">
          Welcome! If you are reading this message, it is most likely that you
          have accessed the first version of my portfolio. Now, I invite you to
          experience the evolution: my Portfolio 2.0. Discover more impactful
          projects and an even more refined experience. Click here to explore
          the next phase of my work.
        </p>

        <button className="text-white w-[12rem] font-bold text-2xl rounded-full py-3 px-0 bg-green-600 cursor-pointer hover:scale-110 ease-out transition-all duration-300 shadow-lg">
          <a
            href="https://portfolio-2-0-weld.vercel.app/"
            className=" outline-none hover:text-white w-full"
          >
            {" "}
            Portfolio 2.0
          </a>
        </button>
      </div>
    </div>
  );
};

export default RedirectionPage;
