import styled from '@emotion/styled'
import MarioPipeAsset from '../../../assets/images/mario_pipe.png'

function MarioPipe(props) {
  const { xPosition } = props;

  const StyledMarioPipe = styled.div`
  content: url(${MarioPipeAsset});
  height: 100px;
  width: 73px;
  margin-top: auto;
  position: sticky;
  left: ${xPosition}px;
  z-index: -1;
`;

  return (
    <StyledMarioPipe />
  )
}


export default MarioPipe;