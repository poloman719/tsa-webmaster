import { useLoader } from "@react-three/fiber";
import { CanvasTexture, TextureLoader } from "three";

const Water = () => {
  const height = useLoader(TextureLoader, "water_height.jpg");
  const normal = useLoader(TextureLoader, "water_normal.png");
  const texture = CanvasTexture()

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} scale={[2, 1, 0.2]}>
      <planeGeometry args={[3, 5, 1024, 1024]} />
      <meshStandardMaterial displacementMap={height} normalMap={normal}/>
    </mesh>
  );
};

export default Water;
