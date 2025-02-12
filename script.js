function closeMenu() {
  document.getElementById("click").checked = false;
}

/* Choix de langues */
function toggleOptions() {
  const options = document.getElementById("optionsList");
  options.classList.toggle("active");
}

function selectOption(image, text, link) {
  document.getElementById("selectedImage").src = image;
  document.getElementById("selectedText").innerText = text;

  window.location.href = link;

  document.getElementById("optionsList").classList.remove("active");
}

/* WRAP PROJETS */
const buttons = document.querySelectorAll("[id^='button']");
const sections = document.querySelectorAll("[id^='projets']");

sections[0].style.display = "block";

function hideAllSections() {
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

function showSection(index) {
  hideAllSections();
  sections[index].style.display = "block";
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showSection(index);
  });
});

// Attacher les événements aux projets pour les modals
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".projets-item");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  projects.forEach((project, index) => {
    project.addEventListener("click", () => {
      modals[index].style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal").style.display = "none";
      document.body.style.overflow = "";
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  });
});

//Affichage progressif des éléments
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(
    "section *:not(.projets-section *)"
  );

  elementsToAnimate.forEach((element) => {
    element.classList.add("hidden");
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 10 * index);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
