let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let container = document.querySelector(".container")


// here our moto is when ever we click on menuIcin the side bar will besome small for that we are using onclick event on menuIcon and function for sidebar

// here we created a class called small-sidebar it will help, like when we click on menuIcon it will add small-sidebar if it already it remove (that's why we are using toggle(it will add and remove))
menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    // see the properties of small-sidebar in css then you will understand


    // when you click on menuIcon the large_container works see the properties of this in css style sheet // large-container occupy the remaining space.
    container.classList.toggle("large-container");
}