$(document).ready(function () {
  let tabIndex = 0;
  let enterKeyPressed = false;
  $('.customTab .tabpanelitems .ui-tabs-panel div table').hide();


//For moving through tabs
  $(document).on('keyup', function tabFunction(event) {
    if (enterKeyPressed) {
      return;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor');
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).focus().click();
      $('.customTab .tabpanelitems .ui-tabs-panel div table').hide();
    }
  });
//For entering into the tab 
  $(document).on('keyup', function enterFunction(event) {
    if (event.key === 'Enter') {
      enterKeyPressed = true;
      event.preventDefault();
      $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex +') div table').show(); 
      $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex +') div table:eq(0) .clcontrol').eq(0).focus();
    }
  });
//For moving through controls
  $(document).keydown(function controlFunction(event) {
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
      const currentTabIndex =
        focusableElementsInTable.index(focusedElement);
      if (currentTabIndex === lastTabIndex) {
        tabIndex++;
        const tabHeader = tabIndex;
        if (
          tabHeader ===
          $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').length
        ) {
          tabIndex = 0;
        }
        const nextTabHeader = tabIndex;
        //  console.log(tabIndex);
        $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').eq(nextTabHeader).focus();
      debugger;
      $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor')
      .eq(nextTabHeader)
      .trigger('click');
       tabFunction();
       enterFunction();
  
        $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            nextTabHeader +
            ') div table'
        ).show();
        $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            nextTabHeader +
            ') div table:eq(0) .clcontrol'
        )
          .eq(0)
          .focus(); //<--
      } else {
        focusableElementsInTable.eq(currentTabIndex + 1).focus();
      }
    }
   }
  });

});