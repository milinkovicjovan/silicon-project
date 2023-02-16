const themeModeSwitch = () => {
  const modeSwitch = document.querySelector('[data-bs-toggle="mode"]');
  if (modeSwitch === null) return;
  const checkbox = modeSwitch.querySelector(".form-check-input");
  const root = document.documentElement;

  const updateMode = () => {
    const mode = window.localStorage.getItem("mode");
    if (mode === "dark") {
      root.classList.add("dark-mode");
      checkbox.checked = true;
    } else {
      root.classList.remove("dark-mode");
      checkbox.checked = false;
    }
  };

  updateMode();

  modeSwitch.addEventListener("click", () => {
    if (checkbox.checked) {
      root.classList.add("dark-mode");
      window.localStorage.setItem("mode", "dark");
    } else {
      root.classList.remove("dark-mode");
      window.localStorage.setItem("mode", "light");
    }
  });

  if (typeof window !== "undefined" && window.$nuxt) {
    window.$nuxt.$on("routeChanged", () => {
      updateMode();
    });
  }
};

export default themeModeSwitch;
