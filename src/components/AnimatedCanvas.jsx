import { useRef, useEffect } from "react";

const TIME_FACTOR = 0.05;
const WIDTH = 1000;

const AnimatedCanvas = () => {
  const canvas = useRef();
  const ctx = useRef();
  const requestRef = useRef();
  const startTime = useRef();
  const img = useRef();

  const animate = (time) => {
    if (!startTime.current || time - startTime.current > WIDTH / TIME_FACTOR)
      startTime.current = time;

    const displacement = (time - startTime.current) * TIME_FACTOR;
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.current.drawImage(
      img.current,
      0,
      0,
      WIDTH - displacement,
      WIDTH,
      displacement,
      0,
      WIDTH - displacement,
      WIDTH
    );
    ctx.current.drawImage(
      img.current,
      WIDTH - displacement,
      0,
      displacement,
      WIDTH,
      1,
      0,
      displacement,
      WIDTH
    );

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [canvas]);

  return (
    <>
      <img
        style={{ display: "none" }}
        src='water_height.jpg'
        alt=''
        width={WIDTH}
        ref={img}
      />
      <canvas
        style={{ display: "block" }}
        ref={canvas}
        width={innerWidth}
        height={innerHeight}
      ></canvas>
    </>
  );
};

export default AnimatedCanvas;
