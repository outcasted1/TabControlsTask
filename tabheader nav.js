$(document).on('keyup', function tabFunction(event) {
  /* if (enterKeyPressed) {
    return;
  }*/
  if (event.key === 'Tab') {
    event.preventDefault();
    const focusableElements = $('.customTab .tabheaditems .tabHeaders');
    tabIndex = (tabIndex + 1) % focusableElements.length;
    focusableElements.eq(tabIndex).focus().click();
    $('.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0)').hide();
  }
});

$(document).ready(function () {
  // Show the desired element even when switching tabs
  $('.customTab .tabpanelitems .ui-tabs-panel:eq(0)').addClass('active');

  // Handle tab switching
  $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor')
    .eq(tabIndex)
    .click(function () {
      //var tabIndex = $(this).index();
      $('.customTab .tabpanelitems .ui-tabs-panel').removeClass(
        'ui-tabs-active'
      );
    });
});

activeHeader = $(
  '.customTab .tabheaditems .tabHeaders:eq(' + tabIndex + ') .ui-tabs-active'
);
$('.customTab .tabpanelitems .ui-tabs-panel:eq(' + controlIndex + ')').addClass(
  'ui-tabs-active'
);
$('.customTab .tabpanelitems .ui-tabs-panel').removeClass('active');

activeHeader = $(
  '.customTab .tabheaditems .tabHeaders:eq(' + tabIndex + ') .ui-tabs-active'
);
if (activeHeader) {
  $(
    '.customTab .tabpanelitems .ui-tabs-panel:eq(' + controlIndex + ')'
  ).addClass('ui-tabs-active');
  $('.customTab .tabpanelitems .ui-tabs-panel').removeClass('active');
}

$('.customTab .tabheaditems .tabHeaders:eq(' + tabIndex + ') .ui-tabs-anchor')
  .focus()
  .click(function () {
    var tabIndex = $(this).index();
    var controlIndex = tabIndex;

    // Show the corresponding tab content
    $('.customTab .tabpanelitems .ui-tabs-panel').removeClass('active');
    $(
      '.customTab .tabpanelitems .ui-tabs-panel:eq(' + controlIndex + ')'
    ).addClass('active');
  });

// Show the corresponding tab content
$('.customTab .tabpanelitems .ui-tabs-panel').removeClass('ui-state-active');
$('.customTab .tabpanelitems .ui-tabs-panel:eq(' + controlIndex + ')').addClass(
  'active'
);
$('.customTab .tabpanelitems .ui-tabs-panel').removeClass('active');
$('.customTab .tabpanelitems .ui-tabs-panel').eq(tabIndex).hide();
$('.customTab .tabpanelitems .ui-tabs-panel')
  .eq(0)
  .addClass('active');
//****************************************************************** */
  $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor')
  .eq(tabIndex).addClass('active');
  $('.customTab .tabpanelitems .ui-tabs-panel').eq(controlIndex).addClass(
    'active'
  )
