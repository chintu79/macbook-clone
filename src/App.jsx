import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import "./styles.css";

const App = () => {
  return (
    <div className="h-screen w-full">
      <navbar className="fixed top-5 w-full flex justify-center align-center">
        {[
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "TV",
          "Music",
          "Support",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "TV",
          "Music",
          "Support",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white text-sm px-4 py-2 rounded-full hover:bg-gray-500 hover:rounded-full transition-all duration-300 cursor-pointer"
          >
            {item}
          </a>
        ))}
      </navbar>
      <div className="text-white w-[400px] flex flex-col justify-center items-center absolute top-32 left-[52%] -translate-x-1/2">
        <h3 className="masked text-7xl font-bold w-[500px] tracking-tighter">
        Mackbook pro.
        </h3>
        <p className="mr-19 text-lg pt-2 font-normal">Oh so pro!</p>
        <p className="text-center mr-20 text-sm pt-2">
          This is a simple macbook pro clone made using react-three-fiber and
          three.js.
        </p>
      </div>
      <Canvas camera={{ fov: 10, position: [0, -10, 300] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
