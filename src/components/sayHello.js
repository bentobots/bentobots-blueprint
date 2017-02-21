const sayHello = ({ NAME = () => ('stranger')} = {}) => {
  return { PHRASE: `Hello ${NAME()}` }
}

export default sayHello
