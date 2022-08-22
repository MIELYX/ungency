const hamburger = document.querySelector('.hamburger')
const slideOutNav = document.querySelector('.nav__slide-out')
const slideOutItems = document.querySelectorAll('.nav__slide-out .item')
const currentYear = document.querySelector('.current-year')
const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')
const itemList = document.querySelectorAll('.work-item')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	currentYear.innerText = year
}

const slideOut = () => {
	slideOutNav.classList.toggle('slide-out')
	document.body.classList.toggle('sticky-body')
}

const slider = () => {
	itemList.forEach(item => {
		if (item.classList.contains('show')) {
			item.classList.remove('show')
		} else {
			item.classList.add('show')
		}
	})
}

const swaper = () => {
	itemList.forEach(item => {
		if (item.classList.contains('swap')) {
			item.classList.remove('swap')
		} else {
			item.classList.add('swap')
		}
	})
}
handleCurrentYear()
btnLeft.addEventListener('click', slider)
btnRight.addEventListener('click', slider)
hamburger.addEventListener('click', slideOut)
slideOutItems.forEach(item => item.addEventListener('click', slideOut))
itemList.forEach(item => item.addEventListener('click', swaper))
