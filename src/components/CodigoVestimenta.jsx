import React from 'react'
import '../styles/vestimenta.css'

const CodigoVestimenta = ({data}) => {
  return (
    <div className='vestimenta'>
      <h1 className='vestimenta-title'>Mesa de Regalos</h1>
      <div className='vestimenta-cards'>
        <div className='vestimenta-card'>
          <div className='vestimenta-card-icons'> 

          </div>
          <div className='vestimenta-card-title'>
            <img src="./img/icons/regalo.svg" alt="vestimenta-icon" />
            <p>Liverpool Galerias Cuernavaca</p>
          </div>

          <div className='vestimenta-card-colors'>
            <p>{`#${data.regalos.numMesa}`}</p>
          </div>

          <button>
            <a href={data.regalos.url}>Ir a Mesa de Regalos</a>
          </button>
        </div>
        
      </div>

      <h1 style={{marginTop:'100px'}} className='vestimenta-title'>Codigo de Vestimenta</h1>
      <div className='vestimenta-cards'>
        <div className='vestimenta-card'>
          <div className='vestimenta-card-icons'> 

          </div>
          <div className='vestimenta-card-title'>
            <img src="./img/icons/vestimenta.svg" alt="vestimenta-icon" />
            <p>Formal</p>
          </div>

          <div className='vestimenta-card-colors'>
            <p>Permitir solo el color lila para nuestra bella quinceañera</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CodigoVestimenta