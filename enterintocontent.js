$(document).on('keyup', function enterFunction(event) {
if (event.key === 'Enter') {
  enterKeyPressed = true;
  event.preventDefault();
  $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex +') div table').show(); 
  $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex +') div table:eq(0) .clcontrol').eq(0).focus();
}
});