// remove animated-logo after 4.5 seconds
setTimeout(() =>{
element = document.getElementById('animated-logo');
element.remove();},4300);


const boxes = document.querySelectorAll('.doctor-1, .doctor-2')

window.addEventListener('scroll', checkBoxes)

checkBoxes() 

function checkBoxes() {
     const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
