
// For active menu links in navigation 
const menuLinks = document.querySelectorAll(".menu-links");
menuLinks.forEach(function(e) {
      e.addEventListener("click", function(e) {
            for (menulink of menuLinks ) {
                  menulink.classList.remove("active-link")
            }
             e.currentTarget.classList.add("active-link")
      })
})


const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", function(){
      if (navMenu.style.display === "none") {
            navMenu.style.display = "flex";
      } else {
            navMenu.style.display = "none";
      }
})

