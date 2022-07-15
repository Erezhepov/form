const btn = document.getElementById('btn')
const name = document.getElementById('name-input')
const sleep = document.getElementById('sleep-input')
const lesson = document.getElementById('lesson-input')
const exercise = document.getElementById('exercise-input')
const media = document.getElementById('media-input')
const result = document.querySelector('h2')
const error = document.querySelector('.error')
const container = document.querySelector('.container')
let find

container.addEventListener('click', (event) => {
	if (event.target.closest('.container')) {
		find = event.target
		find.addEventListener('blur', (event) => {
			if (find !== name) {
				if (find.value > 24) {
					find.nextElementSibling.textContent = `Число должно быть меньше 24 часов!`
					event.preventDefault()
				}
				else if (find.value < 0) {
					find.nextElementSibling.textContent = `Нельзя передавать число меньше нуля!`
					event.preventDefault()
				}
				else {
					find.nextElementSibling.textContent = ''
				}
			}
		})
	}
})

let errorAll = document.querySelectorAll('.error')
let countForCheck = 0

btn.addEventListener('click', (event) => {
	countForCheck = 0
	for (let one of errorAll) {
		if (one.textContent !== '') {
			countForCheck++
		}
	}
	if (countForCheck === 0) {
		let restCount = 24 - sleep.value - lesson.value - exercise.value - media.value
		if (restCount < 0) {
			result.innerHTML = `<div>Общее количество часов должно быть <= 24 часов</div>`
		}
		else {
			result.innerHTML = ` <div>Имя - ${name.value}</div> 
			<div>Сон занимает - ${sleep.value} часов</div>
			<div>Учеба занимает - ${lesson.value} часов</div>
			<div>Занятия занимает - ${exercise.value} часов</div>
			<div>Соц сети занимает - ${media.value} часов</div>
			<div>На отдых остается - ${restCount} часов</div>
			`
		}
	}
})

