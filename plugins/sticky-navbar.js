export default ({}, inject) => {
  const stickyNavbar = (() => {
    let navbar = null;
    let navbarClass = null;
    let navbarH = null;
    let scrollOffset = 500;

    const onScroll = () => {
      if (process.client) {
        if (navbar == null) {
          navbar = document.querySelector(".navbar-sticky");
          if (navbar == null) return;
          navbarClass = navbar.classList;
          navbarH = navbar.offsetHeight;
        }
        if (navbarClass.contains("position-absolute")) {
          if (
            document.documentElement.scrollTop > scrollOffset ||
            document.body.scrollTop > scrollOffset
          ) {
            navbar.classList.add("navbar-stuck");
          } else {
            navbar.classList.remove("navbar-stuck");
          }
        } else {
          if (
            document.documentElement.scrollTop > scrollOffset ||
            document.body.scrollTop > scrollOffset
          ) {
            document.body.style.paddingTop = navbarH + "px";
            navbar.classList.add("navbar-stuck");
          } else {
            document.body.style.paddingTop = "";
            navbar.classList.remove("navbar-stuck");
          }
        }
      }
    };

    if (process.client) {
      document.addEventListener("scroll", onScroll);
    }

    return onScroll;
  })();

  inject("stickyNavbar", stickyNavbar);
};
