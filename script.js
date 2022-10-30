const revDots = document.querySelectorAll(".dot")
const revContent = document.querySelectorAll(".content");

window.addEventListener('DOMContentLoaded', () => {
    reviewFunction()
      

});

// window.addEventListener('DOMcontentLoaded', function() {
    

// });


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
const menuIcon = document.querySelector(".menu-icon");
 menuIcon.addEventListener("click", function(){
      navMenu.classList.toggle("show-links");
      menuIcon.style.zIndex = "100";
});
    



let reviewFunction = () => {
       // Reviews dot buttons
      revDots.forEach(function (e) {
             e.addEventListener("click", function (e){
            const id = e.target.dataset.id;
            if (id) { 
                  // remove selected from other buttons
                  revDots.forEach(function(dot) {
                  dot.classList.remove("active")
                  });
            }
            
            e.target.classList.add("active");

            // hide other articles
            revContent.forEach(function (content) {
                  content.classList.remove("active")
            });
            const element = document.getElementById(id);
            element.classList.add("active");
            });
      });
}

// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }


// function Review(image, name, stars, comment) {
//       this.image = image;
//       this.name = name;
//       this.stars = stars;
//       this.comment = comment; 

//       this.card = getElement('.test')
//       this.displayReviews = this.displayReview.bind(this);
//       this.card.innerHTML = this.displayReviews;
// }





 
//  Review.prototype.displayReview = function (items) {
       
//       this.card.innerHTML = items.map(function(item){
//               return `<div class="info flexitem">
//                      <div class="img">
//                              <img src="${item.image}" alt="">
//                          </div>
//                           <div class="name">
//                                <h5>${item.name}</h5>
//                                <ul class="flexitem">
//                                      <li${item.stars}</i></li>
//                                      <li><i class="fa-solid fa-star"></i></li>
//                                      <li><i class="fa-solid fa-star"></i></li>
//                                      <li><i class="fa-solid fa-star"></i></li>
//                                      <li><i class="fa-solid fa-star-half-stroke"></i></li>
//                                </ul>
//                           </div>
//                          </div>
//                          <div class="desc">
//                          <p>${item.comment}</p>
//                         </div>`  
//       }).join('')
//  }

 

                     
// const firstReview = new Review("/images/review 1.png", "Jayson Romero", 5 , "teasdasdasdasdasdasdas");

// console.log(firstReview.displayReviews());
