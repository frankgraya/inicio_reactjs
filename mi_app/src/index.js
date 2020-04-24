//const element = document.createElement('h1')
//element.innerText = 'Hola  React com estas hola '
//const container = document.getElementById('root')
//container.appendChild(element)


import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firtsName: 'Raul',
  lastName: 'palacios'
}

function getName(user){
  return user.firtsName + user.lastName;
}


const element =
<h1>
  Hello React {getName(user)}
</h1>

ReactDOM.render(element,document.getElementById('root')
);
