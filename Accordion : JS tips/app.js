
function setupAccordion() {
  const acc = document.getElementsByClassName('accordion')

  // acc[0].style.background = 'pink'

  console.log(acc.length)
  for (const accordions of acc) {
    accordions.addEventListener('click', function () {
      this.classList.toggle('active')
      const panel = this.nextElementSibling
      panel.classList.toggle('show')
      // panel.style.display === 'none' ? 'block' : 'none'
    })
  }



  // function myFunction(id) {
  //   var x = document.getElementById(id)
  //   if (x.className.indexOf('show') == -1) {
  //     x.className += ' show'
  //   } else {
  //     x.className = x.className.replace(' show', '')
  //   }
  // }

  const fruit = ['apple', 'orange', 'pear']

  for (const index in fruit) {
    console.log(index)
  }

  const veg = ['broccoli', 'spinach', 'carrot']

  const both = [...fruit, ...veg]
  console.log(both)

  const object = {
    0: 'hi',
    1: 'no',
    2: 'whoops'
  }

  for (let key in object) {
    console.log(object[key] = 'yo')
    console.log(object[0])
    console.log(Object.keys(object))
  }

  const pets = [
    { type: 'Dog', name: 'Max' },
    { type: 'Cat', name: 'Karl' },
    { type: 'Dog', name: 'Tommy' }
  ]

  const pet = pets.find(pet => pet.type === 'Dog' && pet.name === 'Tommy')
  console.log(pet) // { type: 'Dog', name: 'Tommy' }

  const fruity = fruit.find(f => f === 'orange')

  console.log(fruity)


  // object validation rules
  const schema = {
    first: {
      required: true
    },
    last: {
      required: true
    }
  }

  // universal validation function ----------------------------------------------
  const validate = (schema, values) => {
    for (const field in schema) {
      if (schema[field].required) {
        if (!values[field]) {
          return false
        }
      }
    }
    return true
  }


  console.log(validate(schema, { first: 'Bruce' })) // false
  console.log(validate(schema, { first: 'Bruce', last: 'Wayne' })) // true

  // ----------------------------------------------------------------------------


  // adding objects together is similar to arrays --------------------------------
  const together = { ...object, ...pets[1] }
  console.log(together)
  // -----------------------------------------------------------------------------
}

// still need to fix same cards showing 
// add reset button functionality 

document.addEventListener('DOMContentLoaded', setupAccordion)