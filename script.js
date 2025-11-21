/* ============================
   EDU OS — Material You interakcje
   ============================ */

// Ripple efekt (Material You)
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-ripple]");
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";

  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + "px";

  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";

  target.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ============================
// Przełączanie motywu (jasny/ciemny)
// ============================
const themeToggle = document.getElementById("themeToggle");

function applyTheme() {
  const stored = localStorage.getItem("eduos-theme");
  if (stored === "dark") {
    document.documentElement.classList.add("dark");
    themeToggle.querySelector(".material-icons-round").textContent = "light_mode";
  } else {
    document.documentElement.classList.remove("dark");
    themeToggle.querySelector(".material-icons-round").textContent = "dark_mode";
  }
}
applyTheme();

themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("eduos-theme", isDark ? "dark" : "light");
  applyTheme();
});

// ============================
// Wybór wersji Lite / Pełna
// ============================
const cardLite = document.getElementById("card-lite");
const cardFull = document.getElementById("card-full");
const notice = document.getElementById("versionNotice");

function selectVersion(version) {
  const isLite = version === "lite";
  cardLite.classList.toggle("selected", isLite);
  cardFull.classList.toggle("selected", !isLite);

  notice.textContent = isLite
    ? "Wybrałeś EDU OS Lite — idealny dla słabszych komputerów i szkół wiejskich."
    : "Wybrałeś EDU OS Pełna — nowoczesne pracownie i bogate funkcje.";

  showSnackbar(isLite ? "Pobieranie EDU OS Lite..." : "Pobieranie EDU OS Pełna...");
}

// Kliknięcia i klawiatura
[cardLite, cardFull].forEach(card => {
  card.addEventListener("click", () => selectVersion(card.dataset.version));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      selectVersion(card.dataset.version);
      e.preventDefault();
    }
  });
});

// ============================
// Timeline (cykl wydawniczy)
// ============================
const timelineEl = document.getElementById("timeline");
const releases = [
  { label: "EDU OS 1", desc: "Ubuntu LTS + Debian Testing" },
  { label: "EDU OS 2", desc: "Kolejne Ubuntu LTS + Debian" },
  { label: "EDU OS 3", desc: "Nowsze jądro, sterowniki, aplikacje" },
  { label: "EDU OS 4", desc: "Rozszerzone moduły edukacyjne" }
];

function buildTimeline() {
  timelineEl.innerHTML = "";
  releases.forEach(r => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = r.label;

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = r.desc;

    item.append(label, desc);
    timelineEl.appendChild(item);
  });
}
buildTimeline();

// ============================
// Accordion (rozwijane sekcje)
// ============================
document.querySelectorAll(".accordion-item").forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    const open = item.classList.contains("open");
    document.querySelectorAll(".accordion-item.open").forEach(i => i.classList.remove("open"));
    if (!open) item.classList.add("open");
  });
});

// ============================
// Dialog (okno informacji)
// ============================
const infoDialog = document.getElementById("infoDialog");
const openDialogBtn = document.getElementById("openDialog");
const closeDialogBtn = document.getElementById("closeDialog");

openDialogBtn?.addEventListener("click", () => {
  if (typeof infoDialog.showModal === "function") {
    infoDialog.showModal();
  } else {
    alert("Dialog nie jest wspierany przez tę przeglądarkę.");
  }
});
closeDialogBtn?.addEventListener("click", () => infoDialog.close());

// ============================
// Snackbar (powiadomienie)
// ============================
const snackbar = document.getElementById("snackbar");
const snackbarClose = document.getElementById("snackbarClose");

function showSnackbar(message) {
  snackbar.querySelector(".snackbar-text").textContent = message;
  snackbar.classList.add("show");
  clearTimeout(showSnackbar._t);
  showSnackbar._t = setTimeout(() => snackbar.classList.remove("show"), 3000);
}
snackbarClose?.addEventListener("click", () => snackbar.classList.remove("show"));

// ============================
// Efekt AppBar przy scrollu
// ============================
const appBar = document.querySelector(".top-app-bar");
document.addEventListener("scroll", () => {
  const y = window.scrollY;
  appBar.style.boxShadow = y > 8
    ? "0 6px 16px rgba(0,0,0,.10)"
    : "0 2px 10px rgba(0,0,0,.10)";
});

// ============================
// Inicjalizacja
// ============================
selectVersion("lite");
window.addEventListener("load", () => {
  setTimeout(() => showSnackbar("Witaj w EDU OS! Material You działa."), 600);
});
                       
