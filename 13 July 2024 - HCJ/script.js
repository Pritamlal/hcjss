const section = document.querySelector("section"),
      overlay = document.querySelector(".overlay"),
      button1 = document.querySelector(".btn1"),
      customclass = document.querySelector(".custom-class");
      
button1.addEventListener("click",() => 
    section.classList.add("active"));
overlay.addEventListener("click",() => 
    section.classList.remove("active"));
customclass.addEventListener("click",() => section.removeList.remove("active"));