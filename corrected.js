$(document).ready(function () {
  let tabIndex = 0;
  function tabFunction(event) {
    $(
      '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
        tabIndex +
        ') div table:eq(0) .clcontrol'
    )
      .eq(0)
      .focus();
    if (event.keyCode === 9) {

      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabLength = focusableElements.length;
      tabIndex = (tabIndex + 1) % tabLength;


