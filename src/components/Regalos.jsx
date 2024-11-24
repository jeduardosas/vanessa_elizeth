import React from 'react'
import useScrollVisible from '../hooks/useScrollVisible'
import '../styles/regalos.css'


const Regalos = ({data = {}}) => {
  const { regalos } = data
  const sobreContentVisible = useScrollVisible('sobreContent')
  const barraContentVisible = useScrollVisible('barraContent')
  return (
    <div className='regalos'>
      <h1 className='regalos-title'>Lluvia de Sobres</h1>
      <div className="regalos-cards">
        <div id='barraContent' className={`regalos-card ${barraContentVisible && 'animate__animated animate__zoomIn'}`}>
          <img src="./img/icons/sobres.svg" alt="sobre-icon" />
          <div style={{marginBottom:'20px'}}  className='regalos-card-content regalo-card-sobre'>
              <p>{regalos.frase}</p>
          </div>
          <h3 className='regalos-card-title'>Muchas Gracias</h3>
          <div className='regalos-img'>
            <img src="/img/icons/sobre.svg" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Regalos