const seDiv = document.querySelector(".lang-se");
const enDiv = document.querySelector(".lang-en");
seBtn.onclick = function (e) {
  e.preventDefault();
  seDiv.style.display !== "none";
  seDiv.style.display = "none";
  enDiv.style.display = "contents";
};
enBtn.onclick = function (e) {
  e.preventDefault();
  enDiv.style.display !== "none";
  enDiv.style.display = "none";
  seDiv.style.display = "contents";
};
