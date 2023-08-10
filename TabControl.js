//Selected Elements by Default;
$('.customTab .tabheaditems li');
$('.customTab .tabheaditems .tabHeaders');
$('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor');
$('.customTab .tabheaditems .tabHeaders:eq(1)').attr('tabindex');
$('.customTab .tabpanelitems');
$('.customTab .tabpanelitems .ui-tabs-panel:eq()');
$('.customTab .tabpanelitems  div table:eq() .clcontrol');
$('.customTab .tabpanelitems .ui-tabs-panel:eq() div table:eq(0) .clcontrol'); // for handling controls inside tabs
$('.customTab .tabpanelitems .clcontrol');
var elementTabIndex = $(
  '.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0) .clcontrol'
)
  .eq(2)
  .attr('tabindex'); //for getting the control's index
console.log('Tabindex of the element:', elementTabIndex);

//To add class for an element;
$(function () {
  $('.customTab .tabheaditems li').addClass('tabHeaders');
});
//To add Tab index dynamically;
//For Tab Headers
$(function () {
  debugger;
  var tabindex = 1;
  $('.customTab .tabheaditems .tabHeaders').each(function () {
    var $input = $(this);
    $input.attr('tabindex', tabindex);
    tabindex++;
  });
});
//For Tab header buttons;
$(function () {
  debugger;
  var tabindex = 1;
  $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').each(function () {
    var $input = $(this);
    $input.attr('tabindex', tabindex);
    tabindex++;
  });
});
//For Controls
$(function () {
  debugger;
  var tabindex = 1;
  $('.customTab .tabpanelitems .clcontrol').each(function () {
    var $input = $(this);
    $input.attr('tabindex', tabindex);
    tabindex++;
  });
});
// For moving through tabs
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

//For assigning indices to each controls in each panel
$(function () {
  var numPanels = $('.customTab .tabpanelitems .ui-tabs-panel').length;
  for (var panelindex = 0; panelindex < numPanels; panelindex++) {
    $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + panelindex + ')').each(
      function () {
        console.log('Selected panelindex:', panelindex);
        var tabindex = 1;
        $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            panelindex +
            ') div table:eq(0) .clcontrol'
        ).each(function () {
          var $input = $(this);
          $input.attr('tabindex', tabindex);
          tabindex++;
        });
      }
    );
  }
});
/***************************************************/
// simplified
$(function () {
  $('.customTab .tabpanelitems .ui-tabs-panel').each(function (panelindex) {
    // console.log('Selected panelindex:', panelindex);

    var tabindex = 1;
    $(this)
      .find('div table:eq(0) .clcontrol')
      .each(function () {
        $(this).attr('tabindex', tabindex);
        tabindex++;
      });
  });
});
/********************************************************/
//For getting the max vaules of index from each panels
$(function () {
  var numPanels = $('.customTab .tabpanelitems .ui-tabs-panel').length;
  for (var panelindex = 0; panelindex < numPanels; panelindex++) {
    var maxTabIndex = 0;
    $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + panelindex + ')').each(
      function () {
        //console.log('Selected panelindex:', panelindex);
        var tabindex = 1;
        $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            panelindex +
            ') div table:eq(0) .clcontrol'
        ).each(function () {
          var $input = $(this);
          $input.attr('tabindex', tabindex);
          maxTabIndex = Math.max(maxTabIndex, tabindex);
          maxTabIndex;
          tabindex++;
        });
      }
    );
    //console.log('Max tabindex for panelindex', panelindex, ':', maxTabIndex);
  }
});
/****************************************************************************************/
//For displaying tab contents when clicking enter button
$(document).ready(function () {
  let tabIndex = 0;
  $(
    '.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex + ') div table'
  ).show();
  let enterKeyPressed = false;
  // $('.customTab .tabpanelitems .ui-tabs-panel div table:eq(0)').show();
  //For moving through tabs
  function tabFunction(event) {
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
        ).hide();
      } else {
        $(
          '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
            tabIndex +
            ') div table'
        ).show();
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
          //tabIndex = tabIndex + 1;
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

//****************************************************
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
