const openModal = document.querySelectorAll('.modalBtn');
const closeModal = document.getElementsByClassName('closeBtn')[0];
const modal = document.getElementById('simpleModal');

openModal.forEach(function(e) {
    e.addEventListener('click', open);
    })

closeModal.addEventListener('click', close);

window.addEventListener('click', closeOutside);

function open() {
    modal.style.display = 'block';
}

function close() {
    modal.style.display= "none";
}

function closeOutside(e) {
     if(e.target == modal){
         modal.style.display = "none";
     }
 }