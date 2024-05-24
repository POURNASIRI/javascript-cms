
const usersWrapper  = document.querySelector('.users-wrap')



window.addEventListener('load', ()=>{
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
            `)
        });
    })
})