let verbs = [
  'run',
  'jump',
  'sing',
  'dance',
  'write',
  'read',
  'swim',
  'eat',
  'sleep',
  'play',
  'talk',
  'walk',
  'laugh',
  'think',
  'study'
]

document.getElementById('verb-button').addEventListener('click', function () {
  let verbList = ''
  verbs.forEach(function (verb) {
    let letters = verb.split('')
    verbList += '<li>' + letters.join(' "  "  ') + '</li>'
  })
  document.getElementById('verb-list').innerHTML = verbList

  let cells = ''
  for (let i = 0; i < 25; i++) {
    if (i < verbs.length) {
      let letters = verbs[i].split('')
      letters.forEach(function (letter) {
        cells += '<div class="verb-cell">' + letter + '</div>'
      })
    } else {
      let randomLetter = String.fromCharCode(
        65 + Math.floor(Math.random() * 26)
      )
      cells += '<div class="verb-cell">' + randomLetter + '</div>'
    }
  }
  document.getElementById('verb-container').innerHTML = cells
})

document
  .getElementById('verb-list')
  .addEventListener('click', function (event) {
    if (event.target.nodeName === 'LI') {
      event.target.classList.add('strikethrough')
    }
  })
