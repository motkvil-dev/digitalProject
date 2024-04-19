

const scrollToMyElement = (funcion, element) => {
 if (funcion){
  funcion()
 }
 element.current.scrollIntoView({behavior:'smooth'})
}


export default scrollToMyElement