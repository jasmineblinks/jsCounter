let index = 0;
function handleCount(countToggle) {
  index += countToggle;
  let counting = (document.getElementById("count-text").innerHTML = index);
}
