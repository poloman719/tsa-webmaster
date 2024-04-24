import { useLoader } from "@react-three/fiber";
import AnimatedCanvasTexture from "./AnimatedCanvasTexture";
import waterHeightImage from "./water_height.jpg";
import waterNormalImage from "./water_normal.png";
import { CanvasTexture } from "three";
import { useRef, useEffect } from "react";

const W = 1024;
const H = 1024;
const SPEED = 5;

const Water = () => {
  const planeMesh = useRef();
  const startTime = useRef();
  const canvasRef = useRef(document.getElementById("canvas"));

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.width = W;
    canvas.height = H;

    requestAnimationFrame(animate)
  }, [])

  const animate = (time) => {
    const ctx = canvasRef.current.getContext("2d");

    if (!startTime.current || (time - startTime.current) * SPEED / 1000 > W) startTime.current = time;
    
    const displacement = (time - startTime.current) * SPEED / 1000;
    console.log(startTime.current)

    ctx.clearRect(0, 0, W, H)
    
    const img = new Image();
    img.src = waterNormalImage;

    ctx.drawImage(
      img,
      0,
      0,
      W - displacement,
      W,
      displacement - 25,
      0,
      W - displacement + 25,
      W + 25
    )
    
    ctx.drawImage(
      img,
      W - displacement,
      0,
      displacement,
      W,
      0,
      0,
      displacement,
      W + 25
    );

    if (planeMesh.current) {
      const texture = new CanvasTexture(canvasRef.current);

      // planeMesh.current.material.displacementMap = texture;
      planeMesh.current.material.normalMap = texture;
      // you need a second canvas for normalMap
    }

    requestAnimationFrame(animate);
  }

  return (
    <mesh ref={planeMesh} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.2]}>
      <planeGeometry args={[5, 5, 1024, 1024]} />
      <meshStandardMaterial>
        <canvasTexture attach="normalMap" needsUpdate />
        <canvasTexture attach="displacementMap" needsUpdate />
      </meshStandardMaterial>
    </mesh>
  );
};

export default Water;
