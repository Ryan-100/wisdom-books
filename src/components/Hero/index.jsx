import React from "react";
import SearchForm from "../SearchForm";

const Hero = () => {
  return (
    <div
      className="object-contain bg-center space-y-5 text-white max-w-screen min-h-[60vh] flex flex-col items-center justify-center text-center "
      style={{
        backgroundImage: 'url("/img/hero.png")',
      }}
    >
      <h2 className="title text-2xl lg:text-4xl capitalize">
        find your book of choice.
      </h2>
      <br />
      <p className="font-light lg:text-xl text-lg w-4/6 md:w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
        sapiente quibusdam consequatur perspiciatis facere laboriosam non
        nesciunt at id repudiandae, modi iste? Eligendi, rerum!
      </p>
      <SearchForm />
    </div>
  );
};

export default Hero;
