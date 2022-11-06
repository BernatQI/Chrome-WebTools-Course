function onClickEvent() {
  let count = 1;
  alert(`You completed ` + count + ` exercices`);
  count = nestedCall(count);
  alert(`You completed ` + count + ` exercices`);
}

function nestedCall(count) {
  console.log(`Reached nestedCall`);
  return count + 6;
}