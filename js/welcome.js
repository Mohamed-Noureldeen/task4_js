let logout=document.querySelector("#logout");
  logout.addEventListener("click",function(){
    window.location.href="/task4_js/index.html"
  })
  let welcomeUser = document.querySelector(".welcomeUser");
  let loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
      welcomeUser.innerHTML = loggedInUser;
  } else {
      welcomeUser.innerHTML = "Guest";
  }