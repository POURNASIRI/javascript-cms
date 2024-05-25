
const usersWrapper  = document.querySelector('.users-wrap')
const modal = document.querySelector(".remove-modal")



let mainUserId = null

window.addEventListener('load', getAllUsers)

function getAllUsers(){
    
        fetch('http://localhost:3000/api/users')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
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
                        <h3 class="user-name">${users.firstname} ${users.lastName} <!-- user name (first name and last name) --> </h3>
                    </div>
                </div>
                <div class="user-btns-group">
                <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                <button class="user-edit-btn">
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