import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Water = () => {
  const height = useLoader(TextureLoader, "water.jpg");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3, 5, 1024, 1024]} />
      <meshStandardMaterial displacementMap={height} />
    </mesh>
  );
};

export default Water;
