const accordItemHeader = document.querySelectorAll(".accord-item-header");

accordItemHeader.forEach((item) => {
  item.addEventListener("click", (event) => {
    // selecting active accordion for one item at a time to work
    const activeAccord = document.querySelector(".accord-item-header.active");
    if (activeAccord && activeAccord !== item) {
      activeAccord.classList.toggle("active");
      activeAccord.nextElementSibling.style.maxHeight = 0;
    }
    // checking if active class is added or not
    item.classList.toggle("active");
    const accordItemBody = item.nextElementSibling;
    if (item.classList.contains("active")) {
      accordItemBody.style.maxHeight = accordItemBody.scrollHeight + "px";
    } else {
      accordItemBody.style.maxHeight = 0;
    }
  });
});
