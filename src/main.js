// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });
}

// Intersection Observer for section fade-in animation
const sections = document.querySelectorAll(".section-fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

// ===== Updates (edit this list whenever you have progress) =====
const updates = [
  {
    date: "Dec 2025",
    title: "Website refresh: fun light UI + updates section",
    bullets: ["Switched to glassy light theme", "Added progress-log cards", "Next: add filters + more projects"],
    tag: "Portfolio",
  },
  {
    date: "Nov 2025",
    title: "Synthetic jet control improvements",
    bullets: ["Improved frequency control UX", "More repeatable test runs", "Documenting results + demos"],
    tag: "Embedded",
  },
  {
    date: "Oct 2025",
    title: "Drone + gesture control: early prototype",
    bullets: ["Experimenting with OpenCV pipeline", "Defining gesture set", "Planning embedded deployment"],
    tag: "Computer Vision",
  },
];

function renderUpdates() {
  const container = document.getElementById("updates-list");
  if (!container) return;

  container.innerHTML = updates
    .map(
      (u) => `
      <article class="glass-card p-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-slate-500">${u.date}</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">${u.title}</h3>
          </div>
          <span class="status-pill">🗂️ ${u.tag}</span>
        </div>
        <ul class="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          ${u.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

renderUpdates();
lucide.createIcons(); // re-run because we injected HTML
