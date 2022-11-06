function onClickEvent() {
  let count = 1;
  alert(`You completed ` + count + ` exercices`);
  count = nestedCall(count);
  alert(`You completed ` + count + ` exercices`);
}

function nestedCall(count) {
  
  document.querySelector("body > ul > li:nth-child(2)").remove();
  console.log(`Reached nestedCall`);
  return count + 6;
}