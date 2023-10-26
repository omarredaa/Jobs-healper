// let allLis = document.querySelector(".links ul");
// allLis.onclick = function (ele) {
//     ele.style.display = "block";
// };
// -----------------------------------------------------------
var ele = document.getElementsByClassName("nav-links");
function my_func() {
    if (ele.style.display === "block") {
        ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }

}
my_func(ele);
// -------------------------------------------------------------------

