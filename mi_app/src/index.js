//const element = document.createElement('h1')
//element.innerText = 'Hola  React com estas hola '
//const container = document.getElementById('root')
//container.appendChild(element)


import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello REACT </h1>
const container = document.getElementById('root')

//esto es jsx
//ReactDOM.render(___QUE ,DONDE___)
ReactDOM.render(element,container)
