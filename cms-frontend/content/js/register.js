const $ = document

const usernameInput = $.querySelector('#username-input')
const firstnameInput = $.querySelector('#firstname-input')
const lastnameInput = $.querySelector('#lastname-input')
const submitBtn = $.querySelector('#submit-btn')
const usernameMessage = $.querySelector('#username-message')
const firstnameMessage = $.querySelector('#firstname-message')
const lastnameMessage = $.querySelector('#lastname-message')

let validFirstname, validUsername,validlastname = null;

usernameInput.addEventListener('keypress',event=>{
    if(event.target.value.length < 3){
        usernameMessage.innerHTML = "Username is not valid"
        usernameMessage.classList.remove('valid-message')
        usernameMessage.classList.add('invalid-message')
        validUsername = false
    }else{
        usernameMessage.innerHTML = "Username is  valid"
        usernameMessage.classList.remove('invalid-message')
        usernameMessage.classList.add('valid-message')
        validUsername = true
    }
})
firstnameInput.addEventListener('keypress',event=>{
    if(event.target.value.length < 3){
        firstnameMessage.innerHTML = "Firstname is not valid"
        firstnameMessage.classList.remove('valid-message')
        firstnameMessage.classList.add('invalid-message')
        validFirstname = false
    }else{
        firstnameMessage.innerHTML = "Firstname is  valid"
        firstnameMessage.classList.remove('invalid-message')
        firstnameMessage.classList.add('valid-message')
        validFirstname = true
    }
})
lastnameInput.addEventListener('keypress',event=>{
    if(event.target.value.length < 8){
        lastnameMessage.innerHTML = "Lastname is not valid"
        lastnameMessage.classList.remove('valid-message')
        lastnameMessage.classList.add('invalid-message')
        validlastname = false
    }else{
        lastnameMessage.innerHTML = "Lastname is  valid"
        lastnameMessage.classList.remove('invalid-message')
        lastnameMessage.classList.add('valid-message')
        validlastname = true
    }
})



submitBtn.addEventListener("click",event=>{
    event.preventDefault()
    if(validUsername && validlastname && validFirstname){
        let newUserData = {
            firstName: firstnameInput.value,
            lastName: lastnameInput.value,
            userName: usernameInput.value,
            profile: 'content/img/banner/banner.png',
        }
        fetch('http://localhost:3000/api/users',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newUserData)
        }).then((res)=>{
            console.log(newUserData)
            console.log(res)
            clearInput()

    })

       
    }else{
        alert("Please fill all inputes")
    }


    
})

function clearInput(){
    firstnameInput.value = " ",
    usernameInput.value = " ",
    lastnameInput.value = " "
}

