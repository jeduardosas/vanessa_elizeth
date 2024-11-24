import React from 'react';

const Confirmacion = ({data = {}}) => {
  const { nombre, confirmacion } = data
  return (
    <>
      <div className='confirmar-title'>
        
        <h2>Confirmación de Asistencia</h2>
      </div>

      <div className="confirmar-card">
        <div className="confirmar-border centrar">
          <div className="confirmar-whats">
            <img src="/img/icons/confirmacion.svg" alt="" />
            <p>WhatsApp</p>
          </div>
          <button>
            <a 
              target="_blank" 
              href={`https://api.whatsapp.com/send?phone=52${confirmacion}&text=¡Hola!👋%0AQuiero%20confirmar%20mi%20asistencia%0Aa%20los%20XV%20de%20${nombre}%20👑`}>CONFIRMAR</a></button>
        </div>
      </div>
    </>
  )
}

export default Confirmacion