function toggleMenu() {
    const element = document.querySelector("#main-nav");
    if(element.classList.contains("responsive")) {
      //hide menu by removing the class
      element.classList.remove("responsive");
    } else {
      //show menu by adding the class
      element.classList.add("responsive");  
    }
  }