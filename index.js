const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens = kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(1)
}

function destructivelyPrependKitten(name) {

}

function appendKitten(name) {

}

function prependKitten(name) {

}

function removeLastKitten() {

}

function removeFirstKitten() {

}
