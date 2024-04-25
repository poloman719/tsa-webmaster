import {
  Environment,
  Text,
  PerspectiveCamera,
  Sphere,
  OrbitControls
} from "@react-three/drei";
import { Turbine } from "./Turbine";
import { Vector3, TextureLoader } from "three";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import Water from "./Water";

const INIT_POSITION = [-24.56, 0, 22.1];
const INIT_ROTATION = [0.787, -0.947, 0.594];
const Z_AXIS = [0.8116667977715285, 0.4136968039773573, -0.4123735730793531];
const X_AXIS = [0.48406585590836715, -0.08126689626216396, 0.871249642017496];
const Y_AXIS = [0.32692087198435676, -0.9067803736025805, -0.2662181389577968];

let targetY = 0;
let targetX = 0;
let mouseX = 0;
let mouseY = 0;
const target = new Vector3();
addEventListener("mousemove", (e) => {
  mouseX = e.clientX - innerWidth / 2;
  mouseY = e.clientY - innerHeight / 2;
});

export const Experience = () => {
  // useFrame((state, delta) => {
  //   const camera = state.camera;
  //   const factor = 1000;
  //   targetX += (mouseX / factor - targetX) * 0.02;
  //   targetY += (mouseY / factor - targetY) * 0.02;
  //   camera.getWorldPosition(target);
  //   target.addScaledVector(new Vector3(...X_AXIS), targetX);
  //   target.addScaledVector(new Vector3(...Y_AXIS), targetY);
  //   target.addScaledVector(new Vector3(...Z_AXIS), 30);
  //   camera.lookAt(target);
  //   camera.rotateZ(-0.09);
  // });

  return (
    <>
      <OrbitControls />
      {/* <PerspectiveCamera
        // rotation={INIT_ROTATION}
        // position={INIT_POSITION}
        fov={30}
        makeDefault
      /> */}
      {/* <Turbine /> */}
      <Environment preset='dawn' background />
      <Text
        scale={[3, 3, 3]}
        color='black'
        position={[30, 25, 0]}
        rotation={INIT_ROTATION}
      >
        ECOVISTA
      </Text>
      <Water />
      <mesh position={[0, -.5, 0]} scale={[5, .5, 5]}>
        <boxGeometry />
        <meshStandardMaterial color={"peru"}/>
      </mesh>
      <mesh position={[2.75, 0, 0]} scale={[.5, .5, 5]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"}/>
      </mesh>
      <mesh position={[-2.75, 0, 0]} scale={[.5, .5, 5]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"}/>
      </mesh>
      <mesh position={[0, 0, 2.75]} scale={[5, .5, .5]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"}/>
      </mesh>
      {/* <mesh position={[0, 0, -2.75]} scale={[5, .5, .5]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"}/>
      </mesh> */}
    </>
  );
};
/* code to get local axes
  const camera = state.camera;
  let X = new Vector3();
  let Y = new Vector3();
  let Z = new Vector3();
  camera.getWorldDirection(Z);
  camera.rotateY(Math.PI / 2);
  camera.getWorldDirection(Y);
  camera.rotateY(-Math.PI / 2);
  camera.rotateX(Math.PI / 2);
  camera.getWorldDirection(X);
  camera.rotateX(-Math.PI / 2);
  console.log(X);
  console.log(Y);
  console.log(Z);
*/
