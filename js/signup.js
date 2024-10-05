const username=document.getElementById("username");
const usermail=document.getElementById("usermail");
const userpassword=document.getElementById("userpassword");
const exist=document.querySelector(".exist");
const allrequird=document.querySelector(".allrequird");
const success=document.querySelector(".success");
const signup =document.getElementById("signup");
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