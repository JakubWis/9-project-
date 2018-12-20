function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible)
  document.querySelector('.burger').classList.toggle('burger-sidebar', visible)
  document.querySelector('.o-dark').classList.toggle('show', visible)
}

function showSection(sectionName) {
	document.querySelector('.'+sectionName).classList.toggle('show')
}

const x = document.querySelectorAll('.close')

for(let i = 0; i < x.length; i++){
  x[i].addEventListener('click', function(event){
    showSection(event.target.dataset.section)
  })
}

/////////////////////////////////////////////////////////////////////////

document.querySelector('.burger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});

document.querySelector('.o-dark').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});

document.querySelector('.ge').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('general')
});

document.querySelector('.li').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('links')
});

document.querySelector('.ba').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('baners')
});

document.querySelector('.pe').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('personal-data')
});

document.querySelector('.pa').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('payout')
});

document.querySelector('.po').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('postback')
});
