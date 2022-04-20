document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const month = document.querySelector('.month').value.toLowerCase()
  const day = document.querySelector('.day').value
  // console.log(month, day)

  const url = `https://api.nookipedia.com/villagers?api_key=e4bd58d8-da13-4aa1-a208-dba6f628e4be&birthmonth=${month}&birthday=${day}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if ( month === '' && day === '') {
          alert(`Please include month and day!`)
        } else if (data.appearances === 'NH') {
        // console.log(data)
        // data.forEach(element => console.log(element.name))
          let animal = new Villager(data[0])
          animal.showVillager()
        } else {
          let animal = new Villager(data[1])
          animal.showVillager()
        }
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}

class Villager {
  constructor(villager) { //I am passing in data[0] to get image_url and other properties
    this.name = villager.name
    this.species = villager.species
    this.image = villager.image_url
    this.phrase = villager.phrase
    this.personality = villager.personality
  }

  showVillager() {
        document.querySelector('h2').innerText = `" ${this.name} " the ${this.species}`
        document.querySelector('.villager').src = this.image
        document.querySelector('h4').innerText = `${this.personality} personality`
        document.querySelector('h3').innerText = `"Heya! What's new, ${this.phrase}?"`
    
  }
}