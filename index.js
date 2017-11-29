const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(1)
}

function appendKitten(name) {
  var morekittens =  [name, ...kittens]
  return morekittens
}

function prependKitten(name) {
  var morekittens = [...kittens, name]
}

function removeLastKitten() {
  var morekittens =
}

function removeFirstKitten() {
  var morekittens =
}
