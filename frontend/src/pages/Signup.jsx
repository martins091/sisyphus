import React from "react";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-[#321E90] via-[#000102] to-[#321E90]">
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-20">
        <div className="text-white bg-[#2862F1] relative pt-10 rounded-tr-3xl rounded-tl-3xl lg:rounded-tr-none lg:rounded-tl-3xl lg:rounded-bl-3xl lg:w-1/2 pb-6">
          <div className="pl-10 flex items-center">
            <img src="sparlogo.png" alt="" />
            <h1 className="text-xl lg:text-3xl font-semibold">Spar</h1>
          </div>
          <div className="mt-4 lg:mt-8">
            <img
              src="spar3.png"
              alt="person on computer"
              className="w-full lg:h-auto"
            />
          </div>
          <div className="mt-8 lg:mt-12 pl-6 lg:pl-16">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              We simplify your <br />
              financial handlings
            </h1>
            <p className="mt-2 lg:mt-4 text-xs md:text-sm">
              Register your business or file your tax <br /> returns seamlessly
              with Spar
            </p>
          </div>
          <div className=" absolute pl-6 lg:pl-14 bottom-10 right-5 left-5 hidden lg:block">
            <p className="text-xs lg:text-sm">
              Copyright &copy; 2021 Show<sup>TM</sup> Inc. Proudly made in
              India.
            </p>
          </div>
          <div className="absolute bottom-0 -left-20 hidden lg:block">
            <img src="design2.png" alt="" />
          </div>
        </div>
        <div className="bg-white w-full rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none lg:rounded-tr-3xl lg:rounded-br-3xl pt-10 lg:pt-0">
          {/* this is the sign up form */}
          <SignupForm />
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <img src="design1.png" alt="" />
      </div>
    </div>
  );
};

export default Signup;
