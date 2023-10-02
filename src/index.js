const accordian = document.getElementsByClassName("FAQ_Title");

function toggleAccordion() {
  const icon = this.querySelector("i");
  const content = this.nextElementSibling;

  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-times");
  content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", toggleAccordion);
}
