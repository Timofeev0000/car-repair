document.getElementById('burger').addEventListener('click', function() {
	document.querySelector('header').classList.toggle('open')
})

const allLangs = ['ru', 'en']
const select = document.getElementById('lang')

select.addEventListener('change', changeUrlLang)

function changeUrlLang() {
	let lang = select.value
	location.href = window.location.pathname + '#' + lang
	location.reload()
}

function changeLang() {
	let hash = window.location.hash.substring(1)
	
	if (!allLangs.includes(hash)) {
		location.href = window.location.pathname + '#en'
		location.reload()
	}
	
	select.value = hash

	for (let key in langArr) {
		let elem = document.querySelector(`#${key}`)
		console.log(elem);
		
		elem ? elem.innerHTML = langArr[key][hash] : null
	}
}

changeLang()
