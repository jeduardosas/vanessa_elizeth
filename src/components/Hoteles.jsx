
import '../styles/hoteles.css'



const Hoteles = ({data = {}}) => {
  const { hoteles } = data;
  return (
    <div className='hoteles'>
      <h2 className='hoteles-title'>Sugerencias de Hospedaje</h2>

      <div className='div-hoteles'>

        {hoteles.map((hotel,index)=>(
          <div key={index} className='hotel-card'>
            <p className='hotel-card_title'>{hotel.nombre}</p>
            <div className='hotel-card_section'>
              <p>{hotel.direccion}</p>
              <p>{hotel.direccion_colonia}</p>
              <p>{hotel.telefono}</p>
            </div>
            <div className='hotel-card-buton centrar'>
              <button>
                <a href={`${hotel.ubicacion}`}>Ver Ubicación</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hoteles