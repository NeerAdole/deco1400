document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const phone = contactForm.phone.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
      }

      alert("Thanks! Your message has been sent.");
      contactForm.reset();
    });
  }

  // Tooltips for skill icons
  document.querySelectorAll(".skill-icon").forEach(icon => {
    icon.setAttribute("title", icon.getAttribute("data-tooltip"));
  });

  // Fade-in animation for visible elements
  const animatedElements = document.querySelectorAll(".experience-item, .project-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));

  // Only one video plays at a time
  const videos = document.querySelectorAll("video");
  videos.forEach(video =>
    video.addEventListener("play", () =>
      videos.forEach(v => { if (v !== video) v.pause(); })
    )
  );
});

// Reveal project cards on scroll
const cards = document.querySelectorAll('.project-card');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Highlight active nav link
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.style.display = 'none');

    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    target.style.display = 'block';

    // Trigger animation
    const items = target.querySelectorAll('.experience-item');
    items.forEach(el => el.classList.add('show'));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate all buttons and hide all content
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');

      // Activate clicked tab and show its content
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.style.display = 'block';
    });
  });

  // Initialize: show only the active tab content
  const activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    const activeContent = document.getElementById(activeTab.dataset.tab);
    if (activeContent) activeContent.style.display = 'block';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Function to switch tabs
  function switchTab(tabName) {
    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    tabContents.forEach(content => {
      content.style.display = content.id === tabName ? "block" : "none";
    });
  }

  // Initial state: activate the first visible tab
  const firstActive = document.querySelector(".tab-btn.active");
  if (firstActive) {
    switchTab(firstActive.dataset.tab);
  }

  // Add event listeners to tab buttons
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".skills-tab-btn");
  const tabs = document.querySelectorAll(".skills-tab-content");

  function switchSkillsTab(targetId) {
    tabs.forEach(tab => {
      tab.style.display = tab.id === targetId ? "block" : "none";
    });

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.skillTab === targetId);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.skillTab;
      switchSkillsTab(targetTab);
    });
  });

  // Set initial visible tab
  const defaultTab = document.querySelector(".skills-tab-btn.active");
  if (defaultTab) {
    switchSkillsTab(defaultTab.dataset.skillTab);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.intro-section').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.intro-section').style.transition = 'opacity 1s';
    document.querySelector('.intro-section').style.opacity = 1;
  }, 100);
});

