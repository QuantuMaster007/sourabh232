// Tabs switching
const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".panel"));

function showPanel(id) {
  panels.forEach(p => p.classList.toggle("active", p.id === id));
  tabs.forEach(t => t.classList.toggle("active", t.dataset.target === id));
  // scroll to top of main card for nicer UX on mobile
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.forEach(t => {
  t.addEventListener("click", () => showPanel(t.dataset.target));
});

// Contact toggle
const toggleBtn = document.getElementById("toggleContact");
const panel = document.getElementById("contactPanel");
const toggleText = document.getElementById("toggleContactText");

toggleBtn?.addEventListener("click", () => {
  const isHidden = panel.hasAttribute("hidden");
  if (isHidden) {
    panel.removeAttribute("hidden");
    toggleText.textContent = "Hide Contacts";
    toggleBtn.querySelector(".chev").textContent = "▴";
  } else {
    panel.setAttribute("hidden", "");
    toggleText.textContent = "Show Contacts";
    toggleBtn.querySelector(".chev").textContent = "▾";
  }
});

// Portfolio filters
const filterBtns = Array.from(document.querySelectorAll(".filter"));
const works = Array.from(document.querySelectorAll(".work"));

function setFilter(key) {
  filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === key));

  works.forEach(w => {
    const tags = (w.getAttribute("data-tags") || "").toLowerCase();
    const show = (key === "all") || tags.includes(key);
    w.style.display = show ? "block" : "none";
  });
}

filterBtns.forEach(b => b.addEventListener("click", () => setFilter(b.dataset.filter)));

// Year in footer
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
