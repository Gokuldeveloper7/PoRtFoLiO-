// ===== SETTINGS: change these =====
const LINE_ID = "YOUR_LINE_ID";                // your LINE ID, e.g. "gokul123"
const EMAIL = "gokuls2k01@gmail.com";

// ===== LINE link (used by the LINE link in the contact section) =====
document.getElementById("line-link").href = "https://line.me/ti/p/~" + LINE_ID;

// ===== Contact form: opens an email draft with the message filled in =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent("Resume contact from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + "\nReply to: " + email);
  window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
});

// ===== Scroll reveal animation =====
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

// ===== Mobile menu =====
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
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