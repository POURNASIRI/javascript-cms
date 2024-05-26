
const usersWrapper  = document.querySelector('.users-wrap')
const modal = document.querySelector(".remove-modal")
const editModal = document.querySelector(".edit-modal")

const usernameInput= document.querySelector('#username-input')
const firstnameInput =document.querySelector('#first-name-input')
const lastnameInput = document.querySelector('#last-name-input')




let mainUserId = null

window.addEventListener('load', getAllUsers)




function getAllUsers(){
    
        fetch('http://localhost:3000/api/users')
        .then((res)=>res.json())
        .then((data)=>{
            usersWrapper.innerHTML = ""
            data.forEach(users => {
                usersWrapper.insertAdjacentHTML('beforeend',`
                <div class="user-box">
                <div class="user-box_left">
                    <img src=${users.profile} class="user-profile-box" alt="">
                    <div class="user-detail">
                        <h1 class="user-id">
                            <span>${users.userName} <!-- username --> </span>
                            <span class="user-history">${users.created_AT}<!-- history --> </span>
                        </h1>
                        <h3 class="user-name">${users.firstName} ${users.lastName} <!-- user name (first name and last name) --> </h3>
                    </div>
                </div>
                <div class="user-btns-group">
                <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                <button class="user-edit-btn" onclick="showEditModal('${users._id}')">
                    edit
                </button>
                <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                <button onclick="showModal('${users._id}')" class="user-remove-btn">
                    remove
                </button>
            </div>
                `)
            });
        })
    }


function showModal(userId){
    mainUserId = userId
    modal.classList.add('visible')
}


function closeModal(){
    modal.classList.remove('visible')
}


function removeUser(){
    fetch(`http://localhost:3000/api/users/${mainUserId}`,{
        method:"DELETE"
    })
    .then(()=>{
        closeModal()
        getAllUsers()
    })
}

function showEditModal(userId){
   editModal.classList.add('visible')
   mainUserId = userId

}



function updateUser(event){
    event.preventDefault()
    let userNewData = {
        firstName :firstnameInput.value,
        lastName :lastnameInput.value,
        userName :usernameInput.value,
        profile:'content/img/banner/banner.png'
    };
    fetch(`http://localhost:3000/api/users/${mainUserId}`,{
        method: "PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(userNewData)
    }).then((res)=>{
        console.log(res)
        editModal.classList.remove("visible")
        getAllUsers()
    })

}

function clearInput(){
    firstnameInput.value = " ",
    usernameInput.value = " ",
    lastnameInput.value = " "
}

window.addEventListener("keydown",event=>{
    if(event.code === "Escape"){
        editModal.classList.remove("visible")
    }
})