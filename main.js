document.addEventListener("DOMContentLoaded",function(){
  let users=JSON.parse(localStorage.getItem("systemUsers"))||[]  
if (window.location.pathname === '/signup.html') {
 const username=document.getElementById("username");
 const usermail=document.getElementById("usermail");
 const userpassword=document.getElementById("userpassword");
 const exist=document.querySelector(".exist")
 const allrequird=document.querySelector(".allrequird")
 const success=document.querySelector(".success")
 const signup =document.getElementById("signup")

let users=JSON.parse(localStorage.getItem("systemUsers"))||[]  
 signup.addEventListener("click",addUser)
 function addUser(){
  
  if(checkExist()===true){
    exist.classList.remove("d-none")
    success.classList.add("d-none")
    allrequird.classList.add("d-none")
  }
  else if(username.value ==="" || usermail.value=="" || userpassword.value ===""){
    exist.classList.add("d-none")
    success.classList.add("d-none")
    allrequird.classList.remove("d-none")
  }else{
    exist.classList.add("d-none")
    success.classList.remove("d-none")
    allrequird.classList.add("d-none")
    let user={
      name:username.value,
      email:usermail.value,
      password:userpassword.value
    }
    users.push(user)
   localStorage.setItem("systemUsers",JSON.stringify(users))
 
 
  }
 }

 function checkExist(){
  let exist;
  for(let i=0;i<users.length;i++){
    if(users[i].email===usermail.value){
    exist=true;
    }else{
      exist=false;
    }
  }
  return exist;
 }
} 
else if (window.location.pathname === '/login.html') {
(function (){
  console.log(users);
  
  const loginEmail=document.getElementById("loginEmail");
  const loginPassword=document.getElementById("loginPassword");
  const btnLogin=document.querySelector(".btnLogin");
  const incorrect=document.querySelector(".incorrect")
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

 
})()
}else if(window.location.pathname==='/welcome.html'){

  let logout=document.querySelector("#logout");
  logout.addEventListener("click",function(){
    window.location.href="/login.html"
  })
  let welcomeUser = document.querySelector(".welcomeUser");
  let loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
      welcomeUser.innerHTML = loggedInUser;
  } else {
      welcomeUser.innerHTML = "Guest";
  }
}
})