import { useState, useEffect, useRef } from 'react';

const useMousePosition = () => {
  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});

  const handleMouseMove = (event) => {
    // Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;
    const globalX = event.clientX;
    const globalY = event.clientY;

    setLocalMousePos({ x: localX, y: localY });
    setGlobalMousePos({ x: globalX, y: globalY });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return { localMousePos, globalMousePos, handleMouseMove }
}

export default useMousePosition;

