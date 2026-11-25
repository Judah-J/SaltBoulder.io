const navigationToggle = document.querySelector(".nav-toggle");
const navigation = document.getElementById(navigationToggle.getAttribute("aria-controls"));
const header = navigationToggle.closest(".header-inner");
const smallViewport = window.matchMedia("(max-width: 52rem)");

function isNavigationOpen() {
  return navigationToggle.getAttribute("aria-expanded") === "true";
}

function setNavigationOpen(open) {
  navigationToggle.setAttribute("aria-expanded", String(open));
  navigationToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

navigationToggle.addEventListener("click", () => setNavigationOpen(!isNavigationOpen()));

navigation.addEventListener("click", event => {
  if (isNavigationOpen() && event.target.closest("a")) setNavigationOpen(false);
});

document.addEventListener("click", event => {
  if (isNavigationOpen() && !header.contains(event.target)) setNavigationOpen(false);
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape" || !isNavigationOpen()) return;
  event.preventDefault();
  setNavigationOpen(false);
  navigationToggle.focus();
});

smallViewport.addEventListener("change", event => {
  if (event.matches && navigation.contains(document.activeElement)) navigationToggle.focus();
  setNavigationOpen(false);
});

navigationToggle.hidden = false;
header.classList.add("nav-enhanced");
