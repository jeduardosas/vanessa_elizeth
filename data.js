const datosComunes = {
  frase:'"Me viste antes de que naciera. Cada día de mi vida estaba registrado en tu libro. Cada momento fue diseñado antes de que un solo día pasara."',
  cita:'Salmos 139:16',
  imagenes:{
    imgHeader:'header',
    imgBanner1:'banner',
    imgBanner2:'',
    imgBanner3:'',
    imgFondo1:'flor1',
    imgFondo2:'flor2'
  },
  fechaDia:'03',
  fechaMes:'Enero',
  fechaYear:'2025',
  religiosa:{
    hora:'17',
    minutos:'00',
    lugar:'Quinta san Andres',
    direccion:'El mezquital, 7',
    direccionCol:'potrero',
    direccionCd:'Iguala de la Independencia',
    ubicacion:'https://maps.app.goo.gl/3qnzXmyvxXzXqkwq8',

  },
  recepcion:{
    hora:'17',
    minutos:'00',
    lugar:'Quinta san Andres',
    direccion:'El mezquital, 7',
    direccionCol:'Ciudad Industrial',
    direccionCd:'Iguala de la Independencia.',
    ubicacion:'https://maps.app.goo.gl/3qnzXmyvxXzXqkwq8'
  },
  regalos:{
    frase:'',
    url:'',
    numMesa:''
  },
  timeLine:{
    settings:{
      bgColor:'var(--color_card)',
      color:'var(--color_text)',
      lineColor:'var(--color_card)'
    },
    protocol:[
      {
        id:1,
        time:'17:00 Hrs', 
        name:'Acción de Gracias',
        icon:'CHURCH',
        color:'var(--color_tex)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:2,
        time:'19:00 Hrs',
        name:'Protocolo',
        icon:'brindis',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:3,
        time:'20:00 Hrs',
        name:'vals',
        icon:'dance',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:4,
        time:'21:00 Hrs',
        name:'Buen Provecho',
        icon:'comida',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:5,
        time:'22:00 Hrs',
        name:'Todos a Bailar',
        icon:'musica',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
    ]
  },
  hoteles:[
    {
      nombre:'Hotel Gran Plaza',
      direccion:'Miguel Hidalgo, 7',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7333326990',
      ubicacion:'https://maps.app.goo.gl/NkFEjPR5RvDaP3477'
    },
    {
      nombre:'Hotel Reforma #14',
      direccion:'Reforma, 14',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7331517327',
      ubicacion:'https://maps.app.goo.gl/m4UMcsUnELYm3NaH8'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo,6',
      direccion_colonia:'Centro, Iguala de la Independencia, Gro.',
      telefono:'7331101106',
      ubicacion:'https://maps.app.goo.gl/bcRQiHRzWotJcCNe9'
    },

  ]

}

const tipoevento={
  boda:{
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:'',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    }
  },
  
  XV:{
    nombre:'Vanessa Elizeth',
    padres:{
      papa:'Reyes Alfredo Enríquez Sotelo',
      mama:'Aurora Sandoval Ortíz'
    },
    padrinos:{
      padrino:'',
      madrina:''
    },
    confirmacion:'7331355942'
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type] }
}

export default getData;