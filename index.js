
$(document).ready(function () {
  debugger;
  $('.tabpanelitems div[tabindex]').hide();
  $('.tabpanelitems div[tabindex="1"]').show();
  $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').on(
    'keyup',
    function (event) {
      if (event.key === 'Enter') {
        $(this).click(function () {
          const tabIndex = parseInt($(this).attr('tabindex'));
          $('.tabpanelitems div[tabindex]').hide();
          $('.tabpanelitems div[tabindex="' + tabIndex + '"]').show();
        });
      } else {
        $('.tabpanelitems div[tabindex]').hide();
      }
    }
  );
});

$(document).on('keydown', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault();

    const focusableElements = $(
      ".customTab .tabheaditems .tabHeaders .ui-tabs-anchor [tabindex]:not([tabindex='-1'])"
    );
    if (focusableElements.length === 0) return;

    const currentFocus = $(document.activeElement);
    const currentIndex = focusableElements.index(currentFocus);

    let nextIndex = currentIndex + 1;
    if (nextIndex >= focusableElements.length) {
      nextIndex = 0;
    }

    focusableElements.eq(nextIndex).focus();
  }
});

$(document).on('keyup', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    const focusableElements = $(
      '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
    );
    var index = parseInt(focusableElements.attr('tabindex'));
    let nextIndex = index;
    focusableElements.eq(nextIndex).click();
    console.log('Clicked on item with index:', index);
  }
});

$(document).ready(function () {
  var index = 0;
  $(document).on('keyup', function (event) {
    debugger;
    if (event.key === 'Tab') {
      event.preventDefault();

      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      focusableElements.eq(index).click();
      focusableElements.eq(index).focus();
    }
  });
});

$(document).ready(function () {
  debugger;
  let tabIndex = 0;
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
  $(document).on('keyup', function (event) {
    debugger;

    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $('.customTab .tabheaditems .tabHeaders');
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).click();
    } else if (event.key === 'Enter') {
      const focusableElements = $('.customTab .tabpanelitems .clcontrol');

      focusableElements.eq(tabIndex).focus(); // Focus on the current tab element
      // Add any additional action you want to perform on 'Enter' key here
    }
  });
});
/******************************************************************************************** */
$(document).ready(function () {
  let tabIndex = 0;
  $(document).on('keyup', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).click();
    }
  });
});
/******************************************************************************************* */
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
    } else if (event.key === 'Enter') {
      debugger;
      $(document).keydown(function (event) {
        debugger;
        if (event.key === 'Tab') {
          debugger;
          tabIndex;
          $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
          var count = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').length;
          var length = count-1;
            if (count > length) {
                $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
            }
            else {
                $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
            }
          console.log('Focused on item with index:', tabIndex);
          event.preventDefault();
        }
      });
    }
  });
});

/****************************************************************************************/
var count = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').length;
var length = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).length;
if (count === length) {
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
}
 else {
  $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
}

/************************************************** */
$(function () {
  debugger;
  var panelindex= 0;
  $('.customTab .tabpanelitems .ui-tabs-panel:eq('+panelindex+')').each(function (){
   
    panelindex++;
  });
});
/******************************************************/
$(function () {
  var numPanels = $('.customTab .tabpanelitems .ui-tabs-panel').length;
  for (var panelindex = 0; panelindex < numPanels; panelindex++) {
    $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + panelindex + ')').each(function () {
      console.log('Selected panelindex:', panelindex);     
      var tabindex = 1;
       $('.customTab .tabpanelitems .ui-tabs-panel:eq('+panelindex+') div table:eq(0) .clcontrol').each(function () {          
          var $input = $(this);
          $input.attr('tabindex', tabindex);
          tabindex++;
        });
    });
  }
});
/***************************************************************************************************************** */
$(function () {
  var numPanels = $('.customTab .tabpanelitems .ui-tabs-panel').length;
  var maxTabIndex = 0;
  for (var panelindex = 0; panelindex < numPanels; panelindex++) {
    var $panel = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + panelindex + ')');
    console.log('Selected panelindex:', panelindex);
    var tabindex = 1;
    $panel.find('div table:eq(0) .clcontrol').each(function () {
      var $input = $(this);
      $input.attr('tabindex', tabindex);
      tabindex++;
      maxTabIndex = Math.max(maxTabIndex, tabindex - 1);
    });
  }
  console.log('Max tabindex value:', maxTabIndex);
});
/******************************************************************************/

