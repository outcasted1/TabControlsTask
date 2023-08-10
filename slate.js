$(document).ready(function () {
  let tabIndex = 0;
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).click();
  $(document).on('keyup', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).click();
      console.log('Clicked on item with index:', tabIndex);
    } 
  });
});
//******************************************************************** */



else if (event.key === 'Enter') {
  event.preventDefault();
  $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex + ') div table:eq(0) .clcontrol').eq(tabIndex).focus();
  debugger;
  $(document).keydown(function (event) {
    debugger;
    if (event.key === 'Tab') {
      debugger;
      tabIndex;
      $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
      var count = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').length;
      var elementTabIndex = parseInt($('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(count - 1).attr('tabindex'),10);
      if (elementTabIndex === count) {
        var nextTabHeader = tabIndex + 1;
        $('.customTab .tabheaditems .tabHeaders').eq(nextTabHeader).focus();
      } else {
        $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
      }
      console.log('Focused on item with index:', tabIndex);
      event.preventDefault();
    }
  });
}
/****************************************************** */
$(document).keydown(function (event) {
  debugger;
  if (event.key === 'Tab') {
debugger;
tabIndex;
var count = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').length;
var elementTabIndex = parseInt($('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(count - 1).attr('tabindex'),10);
     if (elementTabIndex === count) {
      var nextTabHeader = tabIndex + 1;
      $('.customTab .tabheaditems .tabHeaders').eq(nextTabHeader).focus();
      } 
}
else {
  $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
}
console.log('Focused on item with index:', tabIndex);
event.preventDefault();
});

/******************************************************************************** */

$(document).ready(function () {
  let tabIndex = 0;
 // $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
 // $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).click();
 $('.customTab .tabpanelitems .ui-tabs-panel div table').hide();
  //$('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').show();

  $(document).on('keyup', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $(  
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).focus().click();
      //console.log('Clicked on item with index:', tabIndex);
    } 
    else if (event.key === 'Enter') {
      event.preventDefault();   
      $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table').show();
      $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(0).focus();
      //const tabContent = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(0);
      //const tabContentIndex= tabContent.attr('tabindex');
      //console.log('Focused on content within tab index:',tabContentIndex );    
    }
   
  });
});

$(document).ready(function () {
  let tabIndex = 0;
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).click();      
      const focusableElements = $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor');
          tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).focus().click();
      console.log('Clicked on item with index:', tabIndex);
      tabIndex++;
      }
  );


  
  $(document).ready(function () {
    let tabIndex = 0;
   $('.customTab .tabpanelitems .ui-tabs-panel div table').hide();
    $(document).on('keyup', function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        const focusableElements = $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor');
        tabIndex = (tabIndex + 1) % focusableElements.length;
        focusableElements.eq(tabIndex).focus().click();   
        $('.customTab .tabpanelitems .ui-tabs-panel div table').hide();   
      } 
      else if (event.key === 'Enter') {
        event.preventDefault();   
        $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table').show();
        $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(0).focus( function(event){
          if (event.key === 'Tab') {
            event.preventDefault();
            const focusableElements =   $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol')
            tabIndex = (tabIndex + 1) % focusableElements.length;
            focusableElements.eq(tabIndex).focus();
          }
        });      
      }   
    });
  });
  
/*
  
  $(document).keydown(function (event) {
    if (event.key === 'Tab') {
      debugger;
      const focusedElement = document.activeElement;
      const focusableElementsInTable = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex + ') div table:eq(0) .clcontrol');
      const lastTabIndex = focusableElementsInTable.length - 1;

      if (focusedElement && focusableElementsInTable.is(focusedElement)) {
        debugger;
        event.preventDefault();

        const currentTabIndex = focusableElementsInTable.index(focusedElement);

        if (currentTabIndex === lastTabIndex) {
          const nextTabHeader = tabIndex + 1;
          $('.customTab .tabheaditems .tabHeaders').eq(nextTabHeader).focus();
        } else {
          focusableElementsInTable.eq(currentTabIndex + 1).focus();
        }
      }
    }
  });

  /****************************************************************************************************** */
  function findMaxTabIndex() {
    const tabControlElements = $('.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0) .clcontrol');
    
    let maxTabIndex = 0;
    
    tabControlElements.each(function () {
      const tabIndex = parseInt($(this).attr('tabindex'), 10);
      if (!isNaN(tabIndex) && tabIndex > maxTabIndex) {
        maxTabIndex = tabIndex;
      }
    });    
    return maxTabIndex;
  }
  
  const maxTabIndexInSection = findMaxTabIndex();  
  console.log('Maximum Tab Index in the section:', maxTabIndexInSection);
  /***************************************************************************************************************** */

//************************************************************************************* */

