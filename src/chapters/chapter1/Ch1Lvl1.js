import React, { useState, useEffect, useRef } from 'react'
import MarioPipe from './Ch1Styles/MarioPipe'
import MainBodyContainer from '../../components/styles/MainBodyContainer.styled'
import useMousePosition from '../../components/UseMousePosition';
import concreteNouns from '../../data/PartsOfSpeech/ConcreteNouns'
import actionVerbs from '../../data/PartsOfSpeech/ActionVerbs'
import shuffleArray from '../../components/UseShuffleArray';
import WordComponent from './Ch1Styles/WordComponent';

function Ch1Lvl1(props) {
  const [wordQueue, setWordQueue] = useState([]);
  const [activeWords, setActiveWords] = useState([]);
  const [mainBodyWidth, setMainBodyWidth] = useState();

  const mousePosition = useMousePosition();
  const mainBodyContainerRef = useRef()

  useEffect(() => {
    let wordArray = concreteNouns.concat(actionVerbs);
    setWordQueue(shuffleArray(wordArray));
  }, []);

  useEffect(() => {
    setMainBodyWidth(mainBodyContainerRef.current.clientWidth)
    window.addEventListener("resize", handleResize, false);
  }, [])

  const randomXPosition = () => {
    const pixelPosition = Math.random() * mainBodyWidth
    return pixelPosition;
  }
  
  const makeWord = () => {
    const currentWord = wordQueue.shift();
    
    setActiveWords(activeWords => 
      [...activeWords, {word: currentWord, wordPosition: randomXPosition()}]
    );
    
    wordQueue.push(currentWord);
  }
  
  const handleResize = () => {
    setMainBodyWidth(mainBodyContainerRef.current.clientWidth)
  }

  return (
    <MainBodyContainer 
    onMouseMove={mousePosition.handleMouseMove}
    style={{flexDirection: 'column'}}
    ref={mainBodyContainerRef}
    >
      <areaAbovePipe style={{display: 'flex'}}>
        
        <button onClick={makeWord} >Make Random Word</button>
        
        {activeWords.map((wordObject) => {
          return <WordComponent wordPositionProp={wordObject.wordPosition} wordProp={wordObject.word} />
        })}

      </areaAbovePipe>
      <MarioPipe xPosition={mousePosition.localMousePos.x} />
    </MainBodyContainer>
  )
}

export default Ch1Lvl1