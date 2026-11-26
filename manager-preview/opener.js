const opener = document.querySelector(".opener");
let lastProgress;

function updateOpener() {
  const progress = Math.min(1, Math.max(0, window.scrollY / 160));
  if (progress === lastProgress) return;
  lastProgress = progress;

  opener.style.setProperty("--photo-opacity", 0.8 + 0.2 * progress);
  opener.style.setProperty("--photo-offset", `${16 * (1 - progress)}px`);
}

updateOpener();
window.addEventListener("scroll", updateOpener, { passive: true });
