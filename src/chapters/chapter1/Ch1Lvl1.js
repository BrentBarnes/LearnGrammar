import React, { useEffect } from 'react'
import MarioPipe from './Ch1Styles/MarioPipe'
import MainBodyContainer from '../../components/styles/MainBodyContainer.styled'
import useMousePosition from '../../components/UseMousePosition';

function Ch1Lvl1(props) {
  const mousePosition = useMousePosition();

  

  return (
    <MainBodyContainer className='Chapter 1 Level 1 div' onMouseMove={mousePosition.handleMouseMove}>
      <p>
        Your cursor position:
        <br />
        {JSON.stringify(mousePosition.localMousePos)}
      </p>
      <MarioPipe />
    </MainBodyContainer>
  )
}

export default Ch1Lvl1