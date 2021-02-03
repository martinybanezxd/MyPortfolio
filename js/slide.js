(() =>{
    
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
          
          filterContainer.querySelector(".active").classList.remove("outer-shadow","active");  

        event.target.classList.add("active","outer-shadow");
        const target = event.target.getAttribute("data-target");
        portfolioItems.forEach((item) =>{
            if(target === item.getAttribute("data-category") || target === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList,add("hide");
            }
         })
        } 
    })
    portfolioItemsContainer.addEventListener("click", (event) =>{
        if(event.target.closest(".portfolio-item-inner")){
            const portfolioItem = event.target.closest(".portfolio-item-inner").
                parentElement;
           itemIndex = Array.from(portfolioItems.parentElement.children).indexOf(
               portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            screenshots = screenshots.split(",");
            slideIndex = 0;
            popupSlideshow();
            popupToggle();
        }
    })
    closeBtn .addEventListener("click", ()=>{
        popupToggle();
    })
    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }
    function popupSlideshow() {
        const imgSrc = screenshots[slideIndex];
     
    }
})();