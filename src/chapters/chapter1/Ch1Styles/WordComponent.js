import React from 'react'
import styled from '@emotion/styled';

function WordComponent(props) {
  const { wordPositionProp, wordProp } = props;

  const StyledWordComponent = styled.div`
    left: ${wordPositionProp}px;
    position: absolute;
  `;

  return (
    <StyledWordComponent>{wordProp}</StyledWordComponent>
  )
}

export default WordComponent;