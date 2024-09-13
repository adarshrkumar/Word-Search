var table = document.querySelector('table')
let letters = [[], [], [], [], [], [], [], [], []]
let i = 0
let i2 = 0
function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let letter
  if (localStorage.getItem('hasPlayed') !== true) {
    letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    letters[i].push(letter)
  }
  else {
    letter = letters[i][i2]
  }
  i2++
//  console.log(letter)
  return letter
}

function addRow(a, b, c, d, e, f, g, h, i, num) {
  a = a.toUpperCase()
  b = b.toUpperCase()
  c = c.toUpperCase()
  d = d.toUpperCase()
  e = e.toUpperCase()
  f = f.toUpperCase()
  g = g.toUpperCase()
  h = h.toUpperCase()
  i = i.toUpperCase()
  let tr = document.createElement('tr')
  table.appendChild(tr)
  let aelem = document.createElement('td')
  let belem = document.createElement('td')
  let celem = document.createElement('td')
  let delem = document.createElement('td')
  let eelem = document.createElement('td')
  let felem = document.createElement('td')
  let gelem = document.createElement('td')
  let helem = document.createElement('td')
  let ielem = document.createElement('td')
  tr.appendChild(aelem)
  tr.appendChild(belem)
  tr.appendChild(celem)
  tr.appendChild(delem)
  tr.appendChild(eelem)
  tr.appendChild(felem)
  tr.appendChild(gelem)
  tr.appendChild(helem)
  tr.appendChild(ielem)
  aelem.setAttribute('onclick', `removeLetter(${num}, 'a')`)
  belem.setAttribute('onclick', `removeLetter(${num}, 'b')`)
  celem.setAttribute('onclick', `removeLetter(${num}, 'c')`)
  delem.setAttribute('onclick', `removeLetter(${num}, 'd')`)
  eelem.setAttribute('onclick', `removeLetter(${num}, 'e')`)
  felem.setAttribute('onclick', `removeLetter(${num}, 'f')`)
  gelem.setAttribute('onclick', `removeLetter(${num}, 'g')`)
  helem.setAttribute('onclick', `removeLetter(${num}, 'h')`)
  ielem.setAttribute('onclick', `removeLetter(${num}, 'i')`)
  aelem.setAttribute('id', `a${num}`)
  belem.setAttribute('id', `b${num}`)
  celem.setAttribute('id', `c${num}`)
  delem.setAttribute('id', `d${num}`)
  eelem.setAttribute('id', `e${num}`)
  felem.setAttribute('id', `f${num}`)
  gelem.setAttribute('id', `g${num}`)
  helem.setAttribute('id', `h${num}`)
  ielem.setAttribute('id', `i${num}`)
  aelem.innerHTML = a
  belem.innerHTML = b
  celem.innerHTML = c
  delem.innerHTML = d
  eelem.innerHTML = e
  felem.innerHTML = f
  gelem.innerHTML = g
  helem.innerHTML = h
  ielem.innerHTML = i
}

function removeLetter(num, ltr) {
  let elem = document.querySelector('#' + ltr + num)
  elem.setAttribute('style', 'color: red;')
  elem.setAttribute('onclick', `addLetter(${num}, '${ltr}')`)
}

function addLetter(num, ltr) {
  let elem = document.querySelector('#' + ltr + num)
  elem.setAttribute('style', '')
  elem.setAttribute('onclick', `removeLetter(${num}, '${ltr}')`)
}

addRow('g', 'm', generateRandomLetter(), 'l', generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), 'e', generateRandomLetter(), '1')
i++
i2 = 0
addRow('i', 'a', generateRandomLetter(), 'e', generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), 'l', generateRandomLetter(), '2')
i++
i2 = 0
addRow('g', 't', 'r', 'a', 'f', 'f', 'l', 'e', generateRandomLetter(), '3')
i++
i2 = 0
addRow('a', generateRandomLetter(), 'u', 'f', 'a', generateRandomLetter(), generateRandomLetter(), 'p', generateRandomLetter(), '4')
i++
i2 = 0
addRow('b', generateRandomLetter(), 'g', generateRandomLetter(), 'r', generateRandomLetter(), generateRandomLetter(), 'h', generateRandomLetter(), '5')
i++
i2 = 0
addRow('y', generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), 'm', generateRandomLetter(), generateRandomLetter(), 'a', generateRandomLetter(), '6')
i++
i2 = 0
addRow('t', 'b', generateRandomLetter(), generateRandomLetter(), 'e', generateRandomLetter(), generateRandomLetter(), 'n', generateRandomLetter(), '7')
i++
i2 = 0
addRow('e', 'u', generateRandomLetter(), generateRandomLetter(), 'r', generateRandomLetter(), generateRandomLetter(), 't', generateRandomLetter(), '8')
i++
i2 = 0
addRow('s', 'g', generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), generateRandomLetter(), '9')
localStorage.setItem('hasPlayed', true)