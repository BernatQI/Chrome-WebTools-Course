function onClickEvent() {
  console.group(`onClickEvent`);
  let count = 1;
  //alert(`You completed ` + count + ` exercices`);
  console.warn('warn');
  count = nestedCall(count);
  //alert(`You completed ` + count + ` exercices`);
  console.error('error');
  console.groupEnd(`onClickEvent`);
}

function nestedCall(count) {
  console.group(`nestedCall`);
  document.querySelector("body > ul > li:nth-child(2)").remove();
  console.log(`Reached nestedCall`);
  console.groupEnd(`nestedCall`);
  return count + 7;
}