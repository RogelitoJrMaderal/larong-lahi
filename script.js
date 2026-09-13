// Toggle the kiosk between dark and light modes when the theme button is clicked.
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-kiosk");
  const isDark = document.body.classList.contains("dark-kiosk");

  toggleButton.querySelector(".theme-label").textContent = isDark ? "Light Mode" : "Dark Mode";
});

// Focus the search box when the user presses "/" outside of an input field.
function searchSlash(event) {
  const isTyping = document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA");
  const searchInput = document.getElementById("search-input");

  if (event.key === "/" && !isTyping && searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
}

document.addEventListener("keydown", searchSlash);

// Reveal the hidden game description when the pointer enters each card image area.
document.querySelectorAll(".card-photo-wrap").forEach(wrap => {
  const reveal = wrap.querySelector(".card-reveal");

  wrap.addEventListener("mouseover", () => {
    reveal.classList.add("visible");
  });

  wrap.addEventListener("mouseout", () => {
    reveal.classList.remove("visible");
  });
});

// Validate the suggestion form and show a success or error message when it is submitted.
const suggestForm = document.getElementById("suggest-form");

if (suggestForm) {
  suggestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("suggest-name").value.trim();
    const message = document.getElementById("suggest-message");

    if (name === "") {
      message.textContent = "Please enter a name.";
      message.className = "error";
      return;
    }

    message.textContent = "Suggestion submitted successfully.";
    message.className = "success";
    suggestForm.reset();
  });
}
