const board = document.querySelector('#board')
const colors = ['#CD5C5C', '#ADFF2F', '#FF69B4', '#00FF7F', '#FF6347', '#FFFF00', '#00FFFF', '#00BFFF', '#4B0082','#9ACD32','#DC143C','#00FF00','#FF4500','#E6E6FA','#5F9EA0','#20B2AA','#191970','#6A5ACD','#F5F5F5']
const SQUARES_NUMBER = 500

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomcolor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomcolor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}