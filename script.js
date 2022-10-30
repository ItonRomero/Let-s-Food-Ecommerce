// const revDots = document.querySelectorAll(".dot")
// const revContent = document.querySelectorAll(".content");

window.addEventListener('DOMContentLoaded', () => {
    reviewFunction()
      

});

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

// For showing menu button in navigation 
const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon");
 menuIcon.addEventListener("click", function(){
      navMenu.classList.toggle("show-links");
      menuIcon.style.zIndex = "100";
});
    



// let reviewFunction = () => {
//        // Reviews dot buttons
//       revDots.forEach(function (e) {
//              e.addEventListener("click", function (e){
//             const id = e.target.dataset.id;
//             if (id) { 
//                   // remove selected from other buttons
//                   revDots.forEach(function(dot) {
//                   dot.classList.remove("active")
//                   });
//             }
            
//             e.target.classList.add("active");

//             // hide other articles
//             revContent.forEach(function (content) {
//                   content.classList.remove("active")
//             });
//             const element = document.getElementById(id);
//             element.classList.add("active");
//             });
//       });
// }


// For dragging reviews card
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".inner-slider")

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e) => {
      pressed = true;
      startx = e.offsetX - innerSlider.offsetLeft;
      slider.style.cursor = 'grabbing';

})

slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab';
})

slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab';
})

window.addEventListener('mouseup', () => {
      pressed = false;
})

slider.addEventListener('mousemove', (e) => {
      if(!pressed) return;
      e.preventDefault();

      x = e.offsetX

      innerSlider.style.left = `${ x - startx}px`;
      checkboundary()
})

function checkboundary() {
      let outer = slider.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();

      if(parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = '0px';
      }else if (inner.right < outer.right){
            innerSlider.style.left = `-${inner.width - outer.width}px`
      }
}

checkboundary()


// const revDots = document.querySelectorAll(".dot")
// const revContent = document.querySelectorAll(".content");
