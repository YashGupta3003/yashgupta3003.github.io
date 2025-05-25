function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
