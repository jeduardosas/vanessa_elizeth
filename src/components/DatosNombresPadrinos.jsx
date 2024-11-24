import '../styles/datos-nombres-papas.css'


const DatosNombresPadrinos = ({data = {},datosPadrinosVisible}) => {
  const {padrinos = {}} = data;
  const {padrino = '', madrina = ''} = padrinos
  return (
    <div className='datos-nombres-papas'>
      <div className='datos-nombres-papas_title'>
        <p>Y de mis padrinos</p>
      </div>
      <div id='datosPadrinosSection' className={`datos-nombres-papas_cards ${datosPadrinosVisible && 'animate__animated animate__fadeInUp'}`}>  
        <div className='datos-nombres-papas_card'>
          <p>{padrino}</p>
          <p>{madrina}</p>
        </div>
      </div>
    </div> 
  )
}

export default DatosNombresPadrinos