if (typeof document !== 'undefined') {



  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  let sidebar = document.getElementById("sidebar")
  let hamburger = document.getElementsByClassName("hamburger")[0]
  function showSidebar() {
    sidebar.style.display = "flex"
    sidebar.style.transition = "1s"
  }
  hamburger.addEventListener("click", showSidebar);
  let close=document.getElementById("close")

  function closeSidebar(){
    sidebar.style.display="none"
  }
  close.addEventListener("click",closeSidebar)

  

}

