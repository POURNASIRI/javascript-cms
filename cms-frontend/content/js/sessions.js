const $ = document

const sessionNameInput = $.querySelector('#session-name-input')
const sessionTimeInput = $.querySelector('#session-time-input')
const sessionPriceInput = $.querySelector('#session-price-input')
const addNewSesstion = $.querySelector('#add-new-sesstion')
const coursesParentDropdown = $.querySelector('#courses-parent-dropdown')
const mainCourseElem = $.querySelector('#main-course')
let allcoursesListItems = $.querySelectorAll(".session-dropdown-menu-item")



addNewSesstion.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log('add')
})

coursesParentDropdown.addEventListener('click',()=>{
    coursesParentDropdown.classList.add('active')
})

window.addEventListener("click",(event)=>{
    if(event.target.id !== 'courses-parent-dropdown'){
        coursesParentDropdown.classList.remove('active')
    }

})

allcoursesListItems.forEach(element=>{
    element.addEventListener("click", (event)=>{
        mainCourseElem.innerHTML = event.target.innerHTML
    })
})