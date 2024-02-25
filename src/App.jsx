import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { DefaultLoadingManager } from "three";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import AnimatedCanvas from "./components/AnimatedCanvas";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    DefaultLoadingManager.onLoad = () => setLoading(false);
  }, []);

  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
      {loading && <LoadingScreen />}
      {/* <AnimatedCanvas /> */}
    </>
  );
}

export default App;
