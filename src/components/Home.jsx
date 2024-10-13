import React from 'react';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <section className="pt-0 pb-20 md:pb-10 bg-gradient-to-b from-white via-pink-200 to-pink-300 overflow-x-clip h-screen w-screen"> 
    <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag text-white">Version 1.0 is here</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-pink-200 via-pink-400 to-pink-500 text-transparent bg-clip-text mt-6">
              Polkadot scanner
            </h1>
            <p className="text-xl text-blakc tracking-tight mt-6">
              Simplifying the tracker
            </p>
            <div className="flex gap-3 items-center mt-[30px]">
              <a href="">
                <button className="btn btn-primary px-5 py-3 bg-black text-white rounded-md">Get Started</button>
              </a>
              <button className="btn btn-text gap-1 px-5 py-3 bg-transparent text-black border-pink-500 border rounded-md">
                <span>Learn more</span>
                <svg
                  className="h-5 w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;