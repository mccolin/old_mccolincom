/**
 * McCOLIN.COM
 * JavaScript "Powered By"
 *
 * Styles are modified here on document ready based on the date and
 * other variables.
 *
 * Colin McCloskey
 * Dec 2010
 */


/**
 * The actual manipulation function */
function setPoweredBy(powBy) {
  if (!powBy) {
    var powers = [
      "Diet Pepsi",
      "drinking lots of Arnold Palmers",
      "the love of his life, <a href=\"http://thebluesunshine.com/\">Lizza</a>",
      "Cliff Lee's repeatable arm slot",
      "prodigious snacking on Kit Kat bars",
      "any and all types of potatoes",
      "the WaWa Gobbler Shorti, whenever seasonally attainable"
    ];
    powBy = powers[ Math.floor(Math.random() * powers.length) ];
  }
  //$("#powered-by").html(powBy);
  $("#powered-by span[data-powered-by='colin']").html(powBy);
}

/**
 * When the page loads, adjust the object powering Colin McCloskey according
 * to a series of rules and randomizations. */
$(function(){
  setPoweredBy();
});
