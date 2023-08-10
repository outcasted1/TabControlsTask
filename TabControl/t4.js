function tabControl(event, tabIndex) {
  if (event.keyCode === 9) {
    event.preventDefault();

    const focusedElement = document.activeElement;

    if (focusedElement && focusedElement.classList.contains('clcontrol')) {
      const focusedElements = $(
        '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
          tabIndex +
          ') div table:eq(0) .clcontrol'
      );
      const currentTabIndex = focusedElements.index(focusedElement);

      const tabHeaders = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );

      if (currentTabIndex === focusedElements.length - 1) {
        tabIndex = (tabIndex + 1) % tabHeaders.length;
        tabHeaders.eq(tabIndex).focus().trigger('click');
      } else {
        focusedElements.eq(currentTabIndex + 1).focus();
      }
    }
  }
}

function focusElement(selector) {
  const elements = $(selector);
  if (elements.length > 0) {
    elements.eq(0).focus().click(); // Focus and trigger click event
  }
}
tabHeadersClicked = false;
$(document).ready(function () {
  const initialFocusSelector =
    '.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0) .clcontrol:eq(0)';
  focusElement(initialFocusSelector);

  const tabHeaders = $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor');
  let clickedTabIndex = 0;
  tabHeaders.on('click', function () {
    tabHeadersClicked = true;
    const tabIndex = $(this).attr('tabindex') - 1;
    clickedTabIndex = tabIndex;
    focusElement(
      '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
        tabIndex +
        ') div table:eq(0) .clcontrol:eq(0)'
    );
  });

  $(document).on('keydown', function (event) {
    if (tabHeadersClicked) {
      var tabIndex = clickedTabIndex;
    } else {
      var tabIndex = 0;
    }

    tabControl(event, tabIndex);
  });
});
