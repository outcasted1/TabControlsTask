$(document).keydown(function controlFunction(event) {

  if (event.key === 'Tab') {
    const focusedElement = document.activeElement;
    const focusableElementsInTable = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex +') div table:eq(0) .clcontrol');
    const lastTabIndex = focusableElementsInTable.length - 1;

    if (focusedElement && focusableElementsInTable.is(focusedElement)) {
      event.preventDefault();
      const currentTabIndex =
        focusableElementsInTable.index(focusedElement);

      if (currentTabIndex === lastTabIndex) {
        tabIndex++;
        const tabHeader = tabIndex;
        tabLength =$('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').length

        if (tabHeader === tabLength) {
          tabIndex = 0;
        }
        const nextTabHeader = tabIndex;          

        let tabClickSuccessful = false;
        try {
         
           $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').eq(nextTabHeader).focus();
            tabClickSuccessful = true;
            } 
        catch (error) {
          console.error('Error while clicking tab:', error);
          }               

        if(tabClickSuccessful){  
         tabFunction(event);
        }
     
        $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').eq(nextTabHeader).trigger('click');
        $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + nextTabHeader +') div table').show();
        $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + nextTabHeader +') div table:eq(0) .clcontrol').eq(0).focus();
           //<--
      
      } else {
        focusableElementsInTable.eq(currentTabIndex + 1).focus();
      }
    }
  }
});