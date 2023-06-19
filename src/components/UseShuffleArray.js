const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    const temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
  }
  return array
}

export default shuffleArray