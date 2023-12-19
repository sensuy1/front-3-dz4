// HOMEWORK 4 PART 1
const button = document.querySelector('#btn')
const personsWrapper = document.querySelector('.persons')


button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'peoples.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        button.style.display = 'none'

        data.forEach((person) => {
            const personCard = document.createElement('div')
            personCard.setAttribute('class', 'personCard')

            personCard.innerHTML = `
                <div class="personImage">
                    <img src="${person.photo}" alt="${person.name}"/>
                </div>
                
                <p>Имя: ${person.name}</p>
                <p>Возраст: ${person.age}</p>
            `
            personsWrapper.append(personCard)
        })
    })
})


// HOMEWORK 4 PART 2
const button2 = document.querySelector('#btn2')

button2.addEventListener('click', () => {
    const part2 = new XMLHttpRequest()
    part2.open('GET', 'scheisse.json')
    part2.setRequestHeader('Content-type', 'application/json')
    part2.send()

    part2.addEventListener('load', () => {
        const scheisse = JSON.parse(part2.response)
        console.log(scheisse)
        button2.style.display = 'none'
    })
})

