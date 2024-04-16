

const scrollToMyElement = (funcion, element) => {
 funcion()
 element.current.scrollIntoView({behavior:'smooth'})
}


export default scrollToMyElement