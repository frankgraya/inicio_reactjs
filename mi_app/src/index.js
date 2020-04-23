//const element = document.createElement('h1')
//element.innerText = 'Hola  React com estas hola '
//const container = document.getElementById('root')
//container.appendChild(element)


import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firtsName: 'Raul',
  lastName: 'palacios',
  avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png',
}

function getName(user){
  return '${user.firtsName}'
}
const name = 'Raul'

const element = <h1>Hello React {getName(user)} </h1>
const container = document.getElementById('root')

//esto es jsx
//ReactDOM.render(___QUE ,DONDE___)
ReactDOM.render(element,container);
