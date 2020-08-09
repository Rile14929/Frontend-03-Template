// find abcabx
function match(string) {
  let state = start
  for (let c of string) {
    console.log(state)
    state = state(c)
  }
  return state === end
}

function start(c) {
  if (c === 'a') {
    return foundA
  } else {
    return start
  }
}

function end() {
  return end
}

function foundA(c) {
  if (c === 'b') {
    return foundB
  } else {
    return start(c)
  }
}

function foundB(c) {
  if (c === 'c') {
    return foundC
  } else {
    return start(c)
  }
}

function foundC(c) {
  if (c === 'a') {
    return foundA2
  } else {
    return start(c)
  }
}

function foundA2(c) {
  if (c === 'b') {
    return foundB2
  } else {
    return start(c)
  }
}

function foundB2(c) {
  if (c === 'x') {
    return end
  } else {
    return foundB(c)
  }
}


// console.log(match('abcabx11111')) // true
console.log(match('abcabcabx')) // true
// console.log(match('ab1cabx')) // false