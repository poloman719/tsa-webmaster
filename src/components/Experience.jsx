import { OrbitControls, Environment } from "@react-three/drei";
import { Turbine } from "./Turbine";
import { EffectComposer, SSAO } from "@react-three/postprocessing";

export const Experience = () => {  
  return (
    <>
      <OrbitControls />
      <Turbine />
      <EffectComposer>
        <SSAO />
      </EffectComposer>
      <pointLight position={[0,30,5]}/>
    </>
  );
};
