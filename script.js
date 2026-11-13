
// ===== SETTINGS =====
const LINE_ID = "YOUR_LINE_ID";
const EMAIL = "gokuls2k01@gmail.com";

// ===== LINE LINK =====
const lineLink = document.getElementById("line-link");

if (lineLink) {
  lineLink.href = "https://line.me/ti/p/~" + LINE_ID;
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);

    const body = encodeURIComponent(
      "Hello,\n\n" +
      message +
      "\n\n--------------------\n" +
      "Name: " + name + "\n" +
      "Email: " + email
    );

    const mailtoLink =
      "mailto:" + EMAIL +
      "?subject=" + subject +
      "&body=" + body;

    window.location.href = mailtoLink;
  });
}

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function (el) {
  observer.observe(el);
});

// ===== MOBILE MENU =====
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
