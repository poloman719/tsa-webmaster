import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { DefaultLoadingManager } from "three";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

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
      {loading && <LoadingScreen/>}
    </>
  );
}

export default App;
