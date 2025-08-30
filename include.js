async function loadFragment(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", () => {
  loadFragment("header", "header.html");
  loadFragment("footer", "footer.html");
});
