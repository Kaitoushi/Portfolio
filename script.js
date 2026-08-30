const grid = document.getElementById("month-grid");

if (!MONTHS || MONTHS.length === 0) {
  grid.innerHTML = '<p class="empty-state">No months yet — add one in data.js</p>';
} else {
  MONTHS.forEach((month) => {
    const card = document.createElement("a");
    card.className = "month-card";
    card.href = `month.html?month=${encodeURIComponent(month.id)}`;

    const count = month.photos.length + month.letters.length;
    const metaText = count === 0
      ? "empty — add something!"
      : `${month.photos.length} photo${month.photos.length === 1 ? "" : "s"} · ${month.letters.length} letter${month.letters.length === 1 ? "" : "s"}`;

    card.innerHTML = `
      <div class="month-label">${month.label}</div>
      <div class="month-meta">${metaText}</div>
    `;
    grid.appendChild(card);
  });
}
