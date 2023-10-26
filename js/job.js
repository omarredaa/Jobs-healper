// let allLis = document.querySelector(".links ul");
// allLis.onclick = function (ele) {
//     ele.style.display = "block";
// };
// -----------------------------------------------------------
var ele = document.getElementsByClassName("nav-links");

console.log(ele);
function my_func() {
    if (ele[0].style.display === "block") {
        ele[0].style.display = "none";
    }
    else {
        ele[0].style.display = "block";
    }

}
document.getElementsByClassName('links')[0].addEventListener('click', function () {
    my_func(ele);
})

