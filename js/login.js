const loginEmail=document.getElementById("loginEmail");
const loginPassword=document.getElementById("loginPassword");
const btnLogin=document.querySelector(".btnLogin");
const incorrect=document.querySelector(".incorrect")
let users=JSON.parse(localStorage.getItem("systemUsers"))||[]  
btnLogin.addEventListener("click",gotowelcome)
function gotowelcome(){
  const found=foundUser()
  if(found){
    incorrect.classList.add("d-none")
    localStorage.setItem("loggedInUser",found.name); 
    window.location.pathname="/welcome.html"
  }else{
  incorrect.classList.remove("d-none")
   
  }
}
function foundUser(){

   for(let i=0;i<users.length;i++){
    if(loginEmail.value===users[i].email && loginPassword.value===users[i].password){   
      return users[i]
    }
   }
}