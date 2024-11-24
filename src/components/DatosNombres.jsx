import React from 'react'



const DatosNombres = ({datosVisible, data = {}}) => {
  const {nombre} = data;
  return (
    <>
      <p className={`datos-nombre-nb ${datosVisible && 'animate__animated animate__zoomIn'}`}>Mis XV años</p>
      <p className={`datos-nombre-b ${datosVisible && 'animate__animated animate__zoomIn'}`}>{nombre}</p>
      
    </>
  )
}

export default DatosNombres