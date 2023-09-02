import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
//import dunes from "./desktop_pc/textures2/Material.074_30_baseColor.png";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import CanvasLoader from "../Loader";

//import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';
import {codeBanner, eliteBanner, genomeBanner, genomeWebBanner, rmgBanner} from "../../assets";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./laptop/scene.gltf");
  const colorMap = useLoader(TextureLoader, codeBanner)
  const eliteBannerImg = useLoader(TextureLoader, eliteBanner)
  const rmgBannerImg = useLoader(TextureLoader, rmgBanner)
  const genomeBannerImg = useLoader(TextureLoader, genomeBanner)
  const genomeWebBannerImg = useLoader(TextureLoader, genomeWebBanner)

    let position = [0, -0.2, -0.8];


    return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />

      <spotLight
          position={[1, 3, 0]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow={true}
          shadow-mapSize={1024}
      />




        {/*<mesh position={position}>
            <sphereGeometry args={[.1, 24,24]}/>
            <meshStandardMaterial color={"blue"} />
        </mesh>*/}

        <mesh position={[1, 3, 0]}>
            <sphereGeometry args={[.1, 24,24]}/>
            <meshStandardMaterial color={"red"} />
        </mesh>
      <pointLight position={[10, 15, 30]} intensity={0.2}/>

      <spotLight position={position} intensity={1}/>

      <spotLight position={[0, -0.7, -9]} intensity={1} castShadow={true}
                 shadow-mapSize={1024}/>


        {/*speacail*/}
        <mesh position={[-0.045, -0.211, 0.09]} rotation={[-0.18, 0.06, 0.01]} scale={[1.08, 0.61, .1]}>
            <planeGeometry/>
            <meshPhongMaterial map={colorMap} shininess={25} side={THREE.DoubleSide} />
        </mesh>
        {/*speacail*/}



        {/*left*/}
      <mesh position={[-9, -0.9, -1]} rotation={[0, -1.8, 0]} scale={[-5.1, 2.9, .1]}>
        <planeGeometry />
        <meshStandardMaterial map={genomeWebBannerImg} side={THREE.DoubleSide} flipY={false}  />
      </mesh>
        {/*right*/}
        <mesh position={[6, -0.75, 0]} rotation={[0, -1.5, 0]} scale={[4, 2.2, .1]}>
            <planeGeometry/>
            <meshStandardMaterial map={rmgBannerImg} side={THREE.DoubleSide} />
        </mesh>
        {/*back [5, 3, .1]*/}
        <mesh position={[0, -1, -10]} rotation={[0, 0, 0]} scale={[5, 3, .1]}>
            <planeGeometry/>
            <meshStandardMaterial map={eliteBannerImg} side={THREE.DoubleSide} />
        </mesh>
        {/*front*/}
        <mesh position={[0, -1, 13]} rotation={[0, 0, 0]} scale={[-5.6, 3.3, .1]}>
            <planeGeometry/>
            <meshStandardMaterial map={genomeBannerImg} side={THREE.DoubleSide} />
        </mesh>


      <primitive
        object={computer.scene}
        scale={isMobile ? 0.80 :1.3}
        position={isMobile ? [0, -3, -3.2] : [0.65, -0.66, 1]}
        rotation={[0, 3.2, 0]}
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
      camera={{ fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
          autoRotate
          enablePan={false}
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
