import React from 'react'




const Ubicaciones = ({cardCeremoniaVisible,cardRecepcionVisible, data = {}}) => {
  const {religiosa, recepcion} = data
  return (
    <>
      <div className="ubicaciones-title centrar">
          <img src="/img/icons/ubicacion.svg" alt="" />
          <h3>Ubicaciones</h3>
      </div>
      <div className="ubicaciones-cards">
        <div id='cardCeremoniaSection' className={`ubicaciones-card_card ${cardCeremoniaVisible && 'animate__animated animate__fadeInLeft'}`}>
          <div className='card_icon'>
            <img src='./img/icons/CHURCH.svg' alt="icon-church" />
          </div>
          <div>
            <h3 className='card-title'>Ceremonia Religiosa</h3>
          </div>
          
          <div>
            <p className='card-hora'>{religiosa.hora}:{religiosa.minutos} Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>{religiosa.lugar}</p>
            <p className='card-contenido'>{religiosa.direccion}</p>
            <p className='card-contenido'>{religiosa.direccionCol}</p>
            <p className='card-from'>{religiosa.direccionCd}</p>
          </div>
          <div className='card-button'>
            <button>
              <a href={`${religiosa.ubicacion}`} target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>

        <div id='cardRecepcionSection' className={`ubicaciones-card_card ${cardRecepcionVisible && 'animate__animated animate__fadeInRight'}`}>
          <div className='card_icon'>
            <img src="/img/icons/recepcion.svg" alt="" />
          </div>
          <div >
            <h3 className='card-title'>Recepción</h3>
          </div>

          <div>
            
            <p className='card-hora'>{recepcion.hora}:{recepcion.minutos} Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>{recepcion.lugar}</p>
            <p className='card-contenido'>{recepcion.direccion}</p>
            <p className='card-contenido'>{recepcion.direccionCol}</p>
            <p className='card-from'>{recepcion.direccionCd}</p>
          </div>
          <div className='card-button'>
            <button>
              <a href={`${recepcion.ubicacion}`} target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Ubicaciones