function clickmeNew() {
  setInterval(() => {
    document.getElementsByClassName("q4pgtx-1 khZlCY")[3].click();

    document
      .getElementsByClassName("sc-1eq90u-3 sc-1eq90u-4 bbEETb iRbxZC")[0]
      .click();
  }, 1000);
}
clickmeNew();
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "39") {
    // right arrow
    document
      .getElementsByClassName("sc-1eq90u-3 sc-1eq90u-5 cggaqZ noeGi")[0]
      .click();
  }
}
