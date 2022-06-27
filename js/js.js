var topp = document.getElementById("topp")
console.log(topp)
topp.onclick = function () {
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  // code preload *********************------
  $(window).on("load" , (eo) => {
    $(".preloader").fadeOut("slow")
    
  })