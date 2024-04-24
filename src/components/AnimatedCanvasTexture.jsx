import { CanvasTexture } from "three"

const createCanvas = (width) => {
  const canvas = document.createElement('canvas')
  canvas.style.display = 'block'
  canvas.width = width
  canvas.height = width
  return canvas;
}

const createImage = (src, width) => {
  const image = document.createElement('img')
  image.style.display = 'none'
  image.width = width
  image.src = src
  return image
}

const AnimatedCanvasTexture = (src, width, timeFactor) => {
  let startTime = null;
  const canvas = createCanvas(width)
  const image = createImage(src, width)
  const ctx = canvas.getContext('2d');

  const animate = (time) => {
    if (!startTime || time - startTime > width / timeFactor)
      startTime = time;
    
    const displacement = (time - startTime) * timeFactor;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(
      image,
      0,
      0,
      width - displacement,
      width,
      displacement,
      0,
      width - displacement,
      width
    )
    
    ctx.drawImage(
      image,
      width - displacement,
      0,
      displacement,
      width,
      0,
      0,
      displacement,
      width
    );

    requestAnimationFrame(animate);
  }
  
  requestAnimationFrame(animate);

  return new CanvasTexture(canvas);
}

export default AnimatedCanvasTexture;