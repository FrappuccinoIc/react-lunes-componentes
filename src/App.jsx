import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Saludo' //Import de node, deja conseguir las variables y/o funciones que quisieramos exportar, definido en el archivo en si

function App() {
  return ( /* DEBE ABRIRSE CON PARENTESIS OVALADOS */
    <>
      <Saludo nombre="Juan" apellido="Pérez" /> {/* Se puede ejecutar la función de react que en este caso reemplaza o da un fragmento html por retornar */}
    </>
  )
}

export default App
