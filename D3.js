const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

let exercise = 1
/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/
console.log('Exercise:', exercise++)

const charactersNames = []

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
console.log('Exercise:', exercise++)
for (let counter = 0; counter < starWarsCharacters.length; counter++) {
  charactersNames.push(starWarsCharacters[counter].name)
}
console.log(charactersNames)

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
console.log('Exercise:', exercise++)

const femaleCharacters = []
for (let counter = 0; counter < starWarsCharacters.length; counter++) {
  if (starWarsCharacters[counter].gender === 'female') {
    femaleCharacters.push(starWarsCharacters[counter])
  }
}
console.log(femaleCharacters)

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
console.log('Exercise:', exercise++)
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  'blue-gray': [],
}

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
console.log('Exercise:', exercise++)

for (let counter = 0; counter < starWarsCharacters.length; counter++) {
  const character = starWarsCharacters[counter]
  switch (character.eye_color) {
    case 'blue':
      eyeColor.blue.push(character)
      break
    case 'yellow':
      eyeColor.yellow.push(character)
      break
    case 'red':
      eyeColor.red.push(character)
      break
    case 'brown':
      eyeColor.brown.push(character)
      break
    case 'blue-gray':
      eyeColor['blue-gray'].push(character)
      break
    default:
      break
  }
}

console.log(eyeColor)

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
console.log('Exercise:', exercise++)

let crewMass = 0
let index = 0

while (index < starWarsCharacters.length) {
  crewMass += starWarsCharacters[index].mass
  index++
}

console.log('Total crew mass:', crewMass)

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
console.log('Exercise:', exercise++)

if (crewMass < 500) {
  console.log('Ship is under loaded')
} else if (crewMass >= 500 && crewMass < 700) {
  console.log('Ship is half loaded')
} else if (crewMass >= 700 && crewMass < 900) {
  console.log('Warning: Load is over 700')
} else if (crewMass >= 900 && crewMass < 1000) {
  console.log('Critical Load: Over 900')
} else {
  console.log('DANGER! OVERLOAD ALERT: escape from ship now!')
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
console.log('Exercise:', exercise++)

for (let counter = 0; counter < starWarsCharacters.length; counter++) {
  if (starWarsCharacters[counter].gender === 'n/a') {
    starWarsCharacters[counter].gender = 'robot'
  }
}
console.log(starWarsCharacters)

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/
console.log('Exercise:', exercise++)
let index9 = 0
console.log('Length before removal:', charactersNames.length)
for (let i = 0; i < femaleCharacters.length; i++) {
  index9 = charactersNames.indexOf(femaleCharacters[i].name)
  if (index9 !== -1) {
    charactersNames.splice(index, 1)
  }
}

console.log('Length after removal:', charactersNames.length)
console.log(charactersNames)

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
console.log('Exercise:', exercise++)

// preso dalla documentazione di Math.random su https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const rndIndex = Math.floor(Math.random() * starWarsCharacters.length)

console.log('Character: ' + starWarsCharacters[rndIndex].name)
console.log('Height: ' + starWarsCharacters[rndIndex].height + ' cm')
console.log('Mass: ' + starWarsCharacters[rndIndex].mass + ' kg')
console.log('Hair Color: ' + starWarsCharacters[rndIndex].hair_color)
console.log('Skin Color: ' + starWarsCharacters[rndIndex].skin_color)
console.log('Eye Color: ' + starWarsCharacters[rndIndex].eye_color)
console.log('Birth Year: ' + starWarsCharacters[rndIndex].birth_year)
console.log('Gender: ' + starWarsCharacters[rndIndex].gender)
