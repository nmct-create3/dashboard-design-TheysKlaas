document.addEventListener("DOMContentLoaded", function(e) {
    console.log("js loaded")
    selectedHandler();
  });
  
//   function selectedHandler() {
//     let link = document.querySelector(".js-selected")
//     //let link = document.getElementsByClassName(".js-selected")
//     link.addEventListener("click", function (e) {
//         link.classList.toggle("is-selected")
//         // if (link.hasClass("is-selected")){
//         //     link.removeClass("is-selected")
//         // }
//         // else{
//         //     link.addClass("is-selected")
//         // }
            
//     });
// }

function selectedHandler(){
    var $links = $('.c-main-nav li');
$links.click(function(){
   $links.removeClass('is-selected');
   $(this).addClass('is-selected');
});
}
