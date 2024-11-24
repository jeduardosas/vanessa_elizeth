import React from 'react'

const DatosFecha = ({datosFechaVisible, data = {}}) => {
  const { fechaDia, fechaMes, fechaYear } = data
  return (
    <div id='datosFechaSection' className={`datos-fecha ${datosFechaVisible && 'animate__animated animate__zoomIn'}`}>
      <p className='datos-fecha-title'>Celebremos Juntos el día</p>
      <div className="datos-fecha_div">
        <p>{fechaDia}</p>
        <p>{fechaMes}</p> 
        <p>{fechaYear}</p>
      </div>
    </div>
  )
}

export default DatosFecha