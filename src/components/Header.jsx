const Header = ({data = {}}) => {
  const {frase, imagenes, cita} = data
  
  return (  
    <>
      <header className="header centrar">
        <div className="header-image">
          <img loading="lazy"  src={`/img/${imagenes.imgHeader}.webp`} alt={`img-${data.nombre}`} />
          
        </div>
      </header>
        <div className="frase">
          <p style={{
            textAlign:'center',
            fontSize:'30px',
            color:'var(--color_principal)'
          }}>Mis XV Años</p>
          <p className="frase-text">{frase}</p>
          <p className="frase-text-cita">{cita}</p>
        </div>
    </>
  )
}

export default Header