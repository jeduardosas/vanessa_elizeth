
import { useState } from "react";
import { useLocation, Navigate} from "react-router-dom";
import getData from '../../data'
import Modal from 'react-modal'
import CountDown from "/@/components/ContDown";
import Header from "/@/components/Header";
import Datos from "/@/components/Datos";
import Ubicaciones from "/@/components/ubicaciones";
import CodigoVestimenta from "../components/CodigoVestimenta";
import Confirmacion from '/@/components/Confirmacion';
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Slider from "../components/Slider";
import Regalos from "../components/Regalos";
import Reproductor from "../components/Reproductor";
import Footer from "../components/Footer";
import useScrollVisible from "/@/hooks/useScrollVisible";
import Hoteles from "../components/Hoteles";
import 'animate.css'
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'

/* estilos para el modal */
const customStyles = {
  content:{
    width:'80%',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%)',
    textAlign:'center',
    border:'none',
    boxShadow:'10px 10px 10px #bdbdbd',
    backgroundColor:'var(--color_card)'
  },
};




const Invitacion = () => {

  const data = getData('XV') || {}
  

  const song = '/music/song.mp3'

  /* estado para manejar la reproduccion del audio */
  const [play,setPlay] = useState(false);
  const [modalIsOpen, setModalIsopen] = useState(true); /* estado para manejar el modal */
  const [isPlaying,setIsPlaying] = useState(true); //estado para manejar si el audio esta en play

  
  /* VALIDACION DE LOS PARAMS DE LA URL */
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<1 || pases >10){
    return <Navigate to="/notfound" />
  }
  
  /* VARIABLES PARA MANEJAR LAS ANIMACIONES */
  const confirmacionVisible = useScrollVisible('confirmacionSection')
  const datosVisible = useScrollVisible('datosSection')
  const datosFechaVisible = useScrollVisible('datosFechaSection')
  const datosPapasVisible = useScrollVisible('datosPapasSection')
  const datosPadrinosVisible = useScrollVisible('datosPadrinosSection')
  const cardCeremoniaVisible = useScrollVisible('cardCeremoniaSection')
  const cardRecepcionVisible = useScrollVisible('cardRecepcionSection')

  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }
  

  return (
    <div className="centrar">

      <div className="img-fondo">
        <img loading="lazy" className="img-fondo-1" src={`/img/${data.imagenes.imgFondo1}.webp`} alt="iimg-fondo" />
        <img loading="lazy" className="img-fondo-2" src={`/img/${data.imagenes.imgFondo2}.webp`} />
      </div>

      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsopen(false)}
        style={customStyles}
        contentLabel="Confirmacion de Reproducción"
        ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
        shouldCloseOnOverlayClick={false}
      >
        <h5 className="modal-tittle-1">MIS XV AÑOS</h5>
        <h2 className="modal-tittle-2">{data.nombre}</h2>
        <p className="modal-content">Para una mejor experiencia, por favor acepta la reproduccion automatica</p>   
        <button className="modal-button" onClick={handlePlay}>Aceptar</button>
      </Modal>

      {
        play && (
          <>
            
            <Header 
              data={data} />

            <div id="datosSection" className="datos">
              <Datos 
                datosVisible={datosVisible} 
                datosFechaVisible={datosFechaVisible} 
                data={data}
                datosPapasVisible={datosPapasVisible}
                datosPadrinosVisible={datosPadrinosVisible} />
            </div>

            <div className="banner">
              <img src={`./img/${data.imagenes.imgBanner1}.webp`} alt="img-banner" />
            </div>
      
            <CountDown
              data = {data} />
      

            <div className="ubicaciones">
            <Ubicaciones 
              cardCeremoniaVisible={cardCeremoniaVisible} 
              cardRecepcionVisible={cardRecepcionVisible}
              data={data}/>
            </div>

            {/* <div className="banner">
              <img src={`./img/${data.imagenes.imgBanner2}.webp`} alt="img-banner" />
            </div> */}
      
            <TimeLine 
            data={data} />

            {/* <div className="banner">
              <img src={`./img/${data.imagenes.imgBanner3}.webp`} alt="img_banner" />
            </div> */}

      

              <CodigoVestimenta 
                data={data} />
              <Regalos 
                data={data} />

            {/* <div className="slider">
              <Slider />
            </div> */}

            <div className="lugares">
              <Reservacion pases={pases} />
            </div>

            <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
              <Confirmacion 
                data={data} />
            </div>

            {/* <div className="banner">
              <img src={`./img/${data.imagenes.imgBanner1}.webp`} alt="img_banner" />
            </div> */}
            
            <Hoteles 
              data={data} />
            

            {/* R E P R O D U C T O R   */}
           <Reproductor
           song={song} />

            <div>
              <Footer />
            </div>
          </>
        )
      }

        
      
    </div>
    
    
  );
};

export default Invitacion;
