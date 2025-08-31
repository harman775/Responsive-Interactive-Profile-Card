const nameEl = document.querySelector("#name");
const titleEl = document.querySelector("#title");
const hobbyEl = document.querySelector("#hobby span");
const viewsEl = document.querySelector("#views");

const nameInput = document.querySelector("#nameInput");
const titleInput = document.querySelector("#titleInput");

const updateBtn = document.querySelector("#updateBtn");
const hobbyBtn = document.querySelector("#hobbyBtn");
const viewsBtn = document.querySelector("#viewsBtn");

const hobbies = ["Reading", "Cycling", "Gaming", "Photography", "Cooking", "Traveling"];

updateBtn.addEventListener("click", () => {
  if (nameInput.value.trim() !== "") nameEl.textContent = nameInput.value;
  if (titleInput.value.trim() !== "") titleEl.textContent = titleInput.value;
  nameInput.value = "";
  titleInput.value = "";
});

hobbyBtn.addEventListener("click", () => {
  const random = hobbies[Math.floor(Math.random() * hobbies.length)];
  hobbyEl.textContent = random;
});

const incrementViews = (() => {
  let count = 0;
  return () => {
    count++;
    viewsEl.textContent = `Profile Views: ${count}`;
  };
})();

viewsBtn.addEventListener("click", () => incrementViews());
