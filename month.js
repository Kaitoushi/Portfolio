const params = new URLSearchParams(window.location.search);
const monthId = params.get("month");
const month = MONTHS.find((m) => m.id === monthId);

const titleEl = document.getElementById("month-title");
const photoGrid = document.getElementById("photo-grid");
const lettersList = document.getElementById("letters-list");

if (!month) {
  titleEl.textContent = "Month not found";
} else {
  titleEl.textContent = month.label;

  // Photos: just <img> tags pointing at the folder — no fetch needed.
  if (month.photos.length === 0) {
    photoGrid.innerHTML = '<p class="no-content">No photos yet for this month.</p>';
  } else {
    month.photos.forEach((filename) => {
      const img = document.createElement("img");
      img.src = `photos/${month.id}/${filename}`;
      img.alt = filename;
      photoGrid.appendChild(img);
    });
  }

  // Letters: fetch each .txt file's contents and display it.
  if (month.letters.length === 0) {
    lettersList.innerHTML = '<p class="no-content">No letters yet for this month.</p>';
  } else {
    month.letters.forEach((filename) => {
      fetch(`letters/${month.id}/${filename}`)
        .then((res) => res.text())
        .then((text) => {
          const card = document.createElement("div");
          card.className = "letter-card";
          card.textContent = text;
          lettersList.appendChild(card);
        })
        .catch(() => {
          const card = document.createElement("div");
          card.className = "letter-card";
          card.textContent = `(Couldn't load ${filename})`;
          lettersList.appendChild(card);
        });
    });
  }
}
