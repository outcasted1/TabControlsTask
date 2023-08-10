$(document).ready(function () {
  let tabIndex = 0;
  $(
    '.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex + ') div table'
  ).show();
  let enterKeyPressed = false;
  // $('.customTab .tabpanelitems .ui-tabs-panel div table:eq(0)').show();

  //For moving through tabs
  function tabFunction(event) {
    $('.customTab .tabpanelitems .ui-tabs-panel')
      .eq(0)
      .addClass('ui-tabs-active ui-state-active');
    if (enterKeyPressed) {
      return;
    }
    if (event.keyCode === 9) {
      event.preventDefault();

      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabLength = focusableElements.length;
      tabIndex = (tabIndex + 1) % tabLength;
      focusableElements.eq(tabIndex).focus().click();
      if (tabIndex != 0) {
        $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            tabIndex +
            ') div table'
        )
          .not(':eq(0)')
          .hide();
      }
    }
  }
  //For entering into tabs
  function enterFunction(event) {
    if (event.key === 'Enter') {
      enterKeyPressed = true;
      event.preventDefault();
      $(
        '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
          tabIndex +
          ') div table'
      ).show();
      $(
        '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
          tabIndex +
          ') div table:eq(0) .clcontrol'
      )
        .eq(0)
        .focus();
    }
  }
  //For moving through controls
  function controlFunction(event) {
    debugger;

    if (event.key === 'Tab') {
      const focusedElement = document.activeElement;
      const focusableElementsInTable = $(
        '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
          tabIndex +
          ') div table:eq(0) .clcontrol'
      );
      const lastTabIndex = focusableElementsInTable.length - 1;
      if (focusedElement && focusableElementsInTable.is(focusedElement)) {
        event.preventDefault();
        const currentTabIndex = focusableElementsInTable.index(focusedElement);
        if (currentTabIndex === lastTabIndex) {
          tabIndex = tabIndex + 1;
          const tabHeader = tabIndex;
          if (
            tabHeader ===
            $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').length
          ) {
            tabIndex = 0;
          }
          const nextTabHeader = tabIndex;
          console.log(tabIndex);
          $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor')
            .eq(nextTabHeader)
            .focus();
          var tabAnchor = $(
            '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
          ).eq(nextTabHeader);
          tabAnchor.on('click', function (event) {
            tabFunction(event);
            enterKeyPressed = false;
          });
          tabAnchor.trigger('click');
        } else {
          focusableElementsInTable.eq(currentTabIndex + 1).focus();
        }
      }
    }
  }

  //To call it
  $(document).on('keyup', function (event) {
    tabFunction(event);
  });
  $(document).on('keyup', function (event) {
    enterFunction(event);
  });
  $(document).on('keydown', function (event) {
    controlFunction(event);
  });
});
