import { useState, useEffect } from 'react';

// To use this component, apply the "handleMouseMove" function to the
// onMouseMove event listener of the parent component.
// To use the coordinates, use variables localMousePos.x & localMousePos.y
// Same for global mouse position variables.
// Tutorial for mouse position: https://codingbeautydev.com/blog/react-get-mouse-position/

import React from 'react'

const useMousePosition = () => {
  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});

  const handleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
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

