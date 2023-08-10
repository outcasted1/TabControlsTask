$(document).ready(function () {
  // let tabIndex = 0;

  function focusElement(selector) {
    $(selector).focus();
  }
  focusElement(
    '.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0) .clcontrol:eq(0)'
  );

  $(document).on('keydown', function (event) {
    let tabIndex = 0;
    if (event.keyCode === 9) {
      event.preventDefault();
      const focusedElement = document.activeElement;

      if (focusedElement && focusedElement.classList.contains('clcontrol')) {
        event.preventDefault();

        const focusedElements = $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            tabIndex +
            ') div table:eq(0) .clcontrol'
        );
        const currentTabIndex = focusedElements.index(focusedElement);

        if (currentTabIndex === focusedElements.length - 1) {
          tabIndex =
            (tabIndex + 1) %
            $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').length;
          $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor')
            .eq(tabIndex)
            .focus()
            .trigger('click');
          focusElement(
            '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
              tabIndex +
              ') div table:eq(0) .clcontrol:eq(0)'
          );
        } else {
          focusedElements.eq(currentTabIndex + 1).focus();
        }
      }
    }
  });
});
