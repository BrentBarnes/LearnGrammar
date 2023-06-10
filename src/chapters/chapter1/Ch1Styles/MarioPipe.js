import styled from '@emotion/styled'
import MarioPipeAsset from '../../../assets/images/mario_pipe.png'

const StyledMarioPipe = styled.div`
  content: url(${MarioPipeAsset});
  height: 100px;
  position: absolute;
  bottom: 0px;
`;

function MarioPipe() {

  return (
    <StyledMarioPipe />
  )
}


export default MarioPipe;