$(document).ready(function (event) {
  let tabIndex = 0;

  function focusElement(selector) {
    const elements = $(selector);
    if (elements.length > 0) {
      elements.eq(0).focus();
    }
  }

  function controlFunction() {
    const focusedElement = document.activeElement;
    const focusableElements = $(
      '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
        tabIndex +
        ') div table:eq(0) .clcontrol'
    );
    const lastTabIndex = focusableElements.length - 1;

    if (focusedElement && focusableElements.is(focusedElement)) {
      const currentTabIndex = focusableElements.index(focusedElement);
      if (currentTabIndex === lastTabIndex) {
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
            ') div table:eq(0) .clcontrol'
        );
      } else {
        focusableElements.eq(currentTabIndex + 1).focus();
      }
    }
  }

  focusElement(
    '.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0) .clcontrol:eq(0)'
  );
  if (event.key === 'Tab') {
    $(document).on('keypress', controlFunction);
  }
});

















