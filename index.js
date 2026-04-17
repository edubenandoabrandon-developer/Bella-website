const links = document.getElementById("links")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    links.classList.toggle("show")
})
 const sun = document.getElementById("sun")
       sun.addEventListener("click",()=>{
        document.body.classList.toggle("dark-mode")
        if(document.body.classList.contains("dark-mode")){
            sun.innerText = "☀"
        }else{
            sun.innerText = "☀"
        }
       })
       const form = document.getElementById("form")
       const username = document.getElementById("username")
       const email = document.getElementById("email")
       const password = document.getElementById("password")
       const message = document.getElementById("message")
       form.addEventListener("click",(e)=>{
        e.preventDefault();
        let isValid = true;
        const usernameValue = username.value.trim()
        const emailValue = email.value.trim()
        const passwordValue = password.value.trim()
        const messageValue = message.value.trim()
        if(usernameValue === ""){
            setError(username,"username is required")
            isValid = false
        }else if(usernameValue.length < 3){
            setError(username, "username must be atleast 3 characters")
            isValid = false
        }else{
            setSuccess(username)
        }
         if(emailValue === ""){
            setError(email,"email is required")
            isValid = false
        }else if(!emailValue.includes("@")){
            setError(email, "email is valid")
            isValid = false
        }else{
            setSuccess(email)
        }
         if(passwordValue === ""){
            setError(password,"password is required")
            isValid = false
        }else if(passwordValue.length < 6){
            setError(password, "Minimum of atleast 6 characters")
            isValid = false
        }else{
            setSuccess(password)
        }
         if(messageValue === ""){
            setError(message,"message is required")
            isValid = false
        }else if(messageValue.length < 10){
            setError(message, "message must be atleast 10 characters")
            isValid = false
        }else{
            setSuccess(message)
        }
        if(isValid){
            alert("form is submited successfully")
        }
       })
       function setError(input,message){
        const box= input.parentElement
        const small = box.querySelector("small")
        small.textContent = message
        input.classList.add("error")
        input.classList.remove("success")
       }
       function setSuccess(input){
         const box =input.parentElement
        const small = box.querySelector("small")
        small.textContent = ""
        input.classList.add("success")
        input.classList.remove("error")
       }
       const forms = document.getElementById("forms")
       const error = document.getElementById("error")
       forms.addEventListener("submit",()=>{
        console.log("click")
        let names = document.getElementById("names").value
        let emails = document.getElementById("emails").value
        let date = document.getElementById("date").value
        let time = document.getElementById("time").value
        if(names==="" || emails===""|| date===""|| time===""){
            error.textContent="fill everything"
            error.style.color = "red"
            return;
        }
        error.textContent = ""
        alert("Booking succesful ✅")
       })