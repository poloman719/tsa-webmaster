import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 30, 30], fov: 30 }}>
      <color attach="background" args={["#0000FF"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
