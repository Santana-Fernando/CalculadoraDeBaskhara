var a = 1
var b = -10
var c = 24

function delta(a, b, c){
  var delta
  return delta = ((b * b) - 4 * a *c)
}

var delta = delta(a, b, c)

console.log('O descriminante é igual a ', delta)

function x1(a, b, delta){

  var x1 
  return x1 = (- b + Math.sqrt(delta))/ (2 * a)
}

var resultadoX1 = x1(a, b, delta)

console.log('X1 = ', resultadoX1)

function x2(a, b, delta){

  var x2 
  return x2 = (- b - Math.sqrt(delta))/ (2 * a)
}

var resultadoX2 = x2(a, b, delta)

console.log('X2 = ', resultadoX2)