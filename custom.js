window.onload = () => {
  const tabSwitchers = document.querySelectorAll("[data-switcher]");
  for (let i = 0; i < tabSwitchers.length; i++) {
    const tabSwitcher = tabSwitchers[i];
    const pageId = tabSwitcher.dataset.tab;

    tabSwitcher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active");
      tabSwitcher.parentNode.classList.add("is-active");
      SwitchPage(pageId);
    });
  }
};

function SwitchPage(pageId) {
  const currentPage = document.querySelector(".pages .page.is-active");
  currentPage.classList.remove("is-active");

  const nextPage = document.querySelector(
    `.pages .page[data-page="${pageId}"]`
  );

  nextPage.classList.add("is-active");
}
