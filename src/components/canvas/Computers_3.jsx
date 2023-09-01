import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
//import dunes from "./desktop_pc/textures2/Material.074_30_baseColor.png";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import CanvasLoader from "../Loader";

const IMG_SRC = './desktop_pc/textures2/Material.074_30_baseColor.png';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./laptop/scene.gltf");
    const colorMap = useLoader(TextureLoader, IMG_SRC)


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />

      <spotLight
          position={[-50, 60, 0]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow={true}
          shadow-mapSize={1024}
      />
      <pointLight position={[0,2.5,-3]} intensity={1} />

      <mesh position={[-6, -0.7, -1]} rotation={[0, -1.8, 0]} scale={[6, 4, .1]}>
        <planeBufferGeometry/>
        <meshStandardMaterial
            map={colorMap}
            side={THREE.DoubleSide} />
      </mesh>


      <primitive
        object={computer.scene}
        scale={isMobile ? 4 : 7}
        /*position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}*/
        /*rotation={[-0.3, -2, -0.29]}*/
        position={isMobile ? [0, -3, -3.2] : [0, -3.5, -3.5]}
          rotation={[0, -1.8, 0]}
      />

    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
        className="cursor-pointer"
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
