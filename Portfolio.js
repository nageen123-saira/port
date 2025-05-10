const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved mode
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  // Toggle and save mode
  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.replace("light", "dark");
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.replace("dark", "light");
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

