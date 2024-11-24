import '../styles/datos-nombres-papas.css'
import DatosNombresPadrinos from './DatosNombresPadrinos'


const DatosNombresPapas = ({data = {},datosPapasVisible,datosPadrinosVisible}) => {
  const { padres={} } = data;
  const {papa='', mama=''} = padres
  return (
    <div className='datos-nombres-papas'>
      <div className='datos-nombres-papas_title'>
        <p>En compañia de mis padres</p>
      </div>
      <div id='datosPapasSection' className={`datos-nombres-papas_cards ${datosPapasVisible && 'animate__animated animate__fadeInUp'}`}>  
        <div className='datos-nombres-papas_card'>
          <p>{papa}</p>
          <p>{mama}</p>
        </div>
        
      </div>
      <DatosNombresPadrinos
        data = {data}
        datosPadrinosVisible={datosPadrinosVisible} />
      
    </div> 
  )
}

export default DatosNombresPapas