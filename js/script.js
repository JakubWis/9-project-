function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible)
  document.querySelector('.burger').classList.toggle('burger-sidebar', visible)
  document.querySelector('.o-dark').classList.toggle('show', visible)
}

function showSection(sectionName) {
	document.querySelector('.'+sectionName).classList.toggle('show')
}

function sideBarAction(selector){
    document.querySelector('.'+selector).addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });
}
sideBarAction("burger")
sideBarAction("o-dark")



let lastClicked = 'general'
const sBtn = document.querySelectorAll('.sb')

for(let i = 0; i < sBtn.length; i++){
  sBtn[i].addEventListener('click', function(event){
    showSection(event.target.dataset.section)
    showSection(lastClicked)
    lastClicked = event.target.dataset.section
    console.log(event.target.dataset.section)
  })
}

/* Did not need x closer at the end :)

const x = document.querySelectorAll('.close')

for(let i = 0; i < x.length; i++){
  x[i].addEventListener('click', function(event){
    showSection(event.target.dataset.section)
  })
}

*/
