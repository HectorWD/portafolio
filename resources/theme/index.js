import { extendTheme } from '@chakra-ui/react'

//Fuentes de texto
const fonts = {
    heading: 'Roboto ,sans-serif',
    body: 'Roboto, sans-serif'
}
//Editamos una variante existente
const Button = {
    variants: {
        outline: {
            color:'white',
            borderRadius:'0',
            textTransform:'uppercase',
            fontWeight:'light',
            letterSpacing: '1px',
            _hover:{
                color: 'black'
            }
        }
    }
}
//Creamos nuestra propia variante
const Heading ={
    variants:{
        banner:{
            color:'white',
            textTransform:'uppercase',
            textAlign:'center',
            fontWeight:'light',
            letterSpacing:'2px',
            fontWeight:'light'
        }
    }
}

//Creamos la config para el modo oscuro
const config ={
    initialColorMode: 'light',
  useSystemColorMode: false,
}
export  const theme = extendTheme({ config,fonts,components:{Button, Heading} })