if (!('HTMLPortalElement' in window)) {
  const dialog = document.querySelector("#dialog");
  dialog.showModal();
  dialog.classList.add('dialog--open');
} else {
  document.querySelectorAll("portal").forEach((portal) => {
    portal.addEventListener("click", (event) => {
      event.preventDefault();
      const rect = portal.getBoundingClientRect();
      portal.style.top = `${rect.top}px`;
      portal.style.bottom = `${rect.bottom}px`;
      portal.style.left = `${rect.left}px`;
      portal.style.right = `${rect.right}px`;
      portal.classList.add("portal-reveal");
    });
    portal.addEventListener("animationend", () => {
      portal.activate();
    });
  });
}
