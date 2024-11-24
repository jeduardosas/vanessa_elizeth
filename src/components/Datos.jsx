import DatosNombres from "./DatosNombres"
import DatosFecha from "./DatosFecha"
import DatosNombresPapas from "./DatosNombresPapas"

const Datos = ({datosVisible, datosFechaVisible, data = {},datosPapasVisible,datosPadrinosVisible}) => {
  
  return (
    <div className='datos-nombres'>
      {/* <DatosNombres 
        datosVisible={datosVisible} 
        data={data} /> */}
      <DatosNombresPapas
        data={data}
        datosPapasVisible ={datosPapasVisible}
        datosPadrinosVisible={datosPadrinosVisible} />
      <DatosFecha 
        datosFechaVisible={datosFechaVisible}
        data={data} />
    </div>
  )
}

export default Datos