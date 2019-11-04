const jwt = require('jsonwebtoken');

//Obtener los argumentos de la terminal.
//Utilizamos process.argument vector para leer los comandos de la terminal.
//El comando tendria una estrcutura asi: [comando node][nombre archivo][argumentos de jwt]
const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  return console.log('Missing arguments');
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

//Esta función nos retorna el token decodificado
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

//Flujo de ejecución
if (option == 'sign') {
  console.log(signToken({ sub: nameOrToken }, secret));
} else if (option == 'verify') {
  //Para el caso de verify, serà el token
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log('Option needs to be "sign" or verify"');
}