// find abcdef
function match(string) {
  let foundA = false
  let foundB = false
  let foundC = false
  let foundD = false
  let foundE = false
  for (let c of string) {
    if (c=== 'a') {
      foundA ? foundA = false : foundA = true
    } else if (foundA && c=== 'b') {
      foundB ? foundB = false : foundB = true
    } else if (foundA && foundB && c=== 'c') {
      foundC ? foundC = false : foundC = true
    } else if (foundA && foundB && foundC && c=== 'd') {
      foundD ? foundD = false : foundD = true
    } else if (foundA && foundB && foundC && foundD && c=== 'e') {
      foundE ? foundE = false : foundE = true
    } else if (foundA && foundB && foundC && foundD && foundE && c=== 'f') {
      return true
    } else {
      foundA = false
      foundB = false
      foundC = false
      foundD = false
      foundE = false
    }
  }
  return false
}

match('abbccdeef') // false
match('abbccddeeff') // false
match('abcdeaf') // false
match('abcdef') // true