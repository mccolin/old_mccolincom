/**
 * McCOLIN.COM
 * JavaScript Skinning
 *
 * Styles are modified here on document ready based on the date and
 * other variables.
 *
 * Colin McCloskey
 * Dec 2010
 */

/** There are elements to our skinning that require querystring access */
var urlParams = {};
(function () {
  var e,
    a = /\+/g,  // Regex for replacing addition symbol with a space
    r = /([^&;=]+)=?([^&;]*)/g,
    d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
    q = window.location.search.substring(1);

  while (e = r.exec(q))
    urlParams[d(e[1])] = d(e[2]);
})();


/**
 * Default skin effect */
function skinDefault() {
  setPhotoCredit("Future Leather Air Guitar", "http://www.flickr.com/photos/mccolin/553404266/");
  return {
    "body": {
      "background": "#617EDA url(http://farm2.static.flickr.com/1240/553404266_75cc79deda_o.jpg) fixed repeat-x -600px -150px"
    },
    "h1": {
      "background": "#516009",
      "color": "#FFF"
    },
    "h1 a": {
      "color": "#FFF"
    }
  };
}


/** Christmastime skin effect */
function skinXMas() {
  setSiteGreeting("Ho! Ho! Ho!");
  setPoweredBy("Santa's leftover cookies and milk");
  setPhotoCredit("The Hanging of the Wreaths","http://www.flickr.com/photos/mccolin/2081231053/");
  $(".content a").mouseenter(function(){
    $(this).css("text-decoration","underline").css("color","#17320F");
  }).mouseleave(function(){
    $(this).css("text-decoration","none").css("color","#A00");
  });
  $(".access li a").mouseenter(function(){
    $(this).css("background","rgba(0,0,0,0.5)").css("color","#FFF");
  }).mouseleave(function(){
    $(this).css("background","rgba(66,139,52,0.8)").css("color","#61CE3C");
  });
  $(".access li.current-menu-item a, .access li.current_page_parent a").mouseleave(function(){
    $(this).css("background","rgba(170,0,0,0.75)").css("color","pink");
  });
  return {
    "body": { "background": "url(http://farm3.static.flickr.com/2310/2081231053_acfb528196_o.jpg) fixed repeat-x 0 -250px" },
    "h1": { "background": "#A00", "color": "#FFF" },
    "h1, h1 a": { "color": "#FFF" },
    ".access li a": { "background": "rgba(66,139,52,0.8)", "color": "#61CE3C" },
    ".access li.current-menu-item a, .access li.current_page_parent a, .access li a:hover": { "background": "rgba(170,0,0,0.75)", "color": "pink"},
    ".content a": { "color": "#A00" },
    "#footer .footnote": {
      "background": "rgba(255, 255, 255, 0.65)",
      "color": "#000",
      "margin-top": "1.5em",
      "padding": "0.5em",
      "width": "700px"
    },
    "#footer .footnote a": { "color": "#A00" }
  }
}


/** Halloweentime skin effect */
function skinHalloween() {
  setSiteGreeting("Boo!");
  setPoweredBy("his perpetual fear of the impending zombie apocolypse");
  setPhotoCredit("I Am A Zombie! Zom!","http://www.flickr.com/photos/mccolin/5265426886/");
  $(".access li a").mouseenter(function(){
    $(this).css("background","#000");
  }).mouseleave(function(){
    $(this).css("background","transparent");
  });
  $("#footer .access li a").mouseleave(function(){
    $(this).css("background","rgba(80,80,80,0.65)");
  });
  $(".access li.current-menu-item a, .access li.current_page_parent a").mouseleave(function(){
    $(this).css("background","#000").css("color","#FF4000");
  });

  return {
    "body": { "background": "url(http://farm6.static.flickr.com/5162/5265426886_2cc4e16cfb_o.jpg) fixed repeat-x 0 -400px" },
    "h1": { "background": "rgba(255,64,0,0.75)", "color": "#FFF" },
    "h1 a": { "color": "#FFF" },
    ".access li a": { "color": "#FFF" },
    "#footer .access li a": { "background": "rgba(80,80,80,0.65)" },
    ".access li.current-menu-item a, .access li.current_page_parent a": { "background": "#000", "color": "#FF4000" },
    "#footer .footnote": { "background": "rgba(80,80,80,0.65)", "padding":"0.5em", "margin-top":"1.5em", "width":"700px" },
    ".content": { "background": "rgba(80,80,80,0.75)", "color":"#FFF" },
    ".content h2": { "color": "#FF4000" },
    ".content a": { "color": "#000" }
  };
}


/** Bosssstttonnn skin effect */
function skinBoston() {
  setPhotoCredit("BOSSSTTTOOOONNNNN!!!!!","http://www.flickr.com/photos/mccolin/2214776911/");
  return {
    "body": { "background": "url(http://farm3.static.flickr.com/2178/2214776911_76356529e0_o.jpg) fixed repeat-x -100px -250px" }
  };
}


/** Upclose Beard Action skin effect */
function skinBeardy() {
  setSiteGreeting("Ahhhh!!!");
  setPhotoCredit("Beard at High Speeds","http://www.flickr.com/photos/mccolin/2376062537/");
  return {
    "body": { "background": "url(http://farm3.static.flickr.com/2271/2376062537_c5c7e23943_o.jpg) fixed repeat-x 0 -250px" },
    "h1": { "background": "#785032", "color": "#FFD700"},
    "h1 a": { "color": "#FFD700" },
  };
}


/** Me with my shades at the Exploratorium */
function skinExploratorium() {
  setPoweredBy("those remarkably handsome Ray Bans");
  setPhotoCredit("Stalking Near the Exploratorium", "http://www.flickr.com/photos/mccolin/5226415923/");
  return {
    "body": { "background": "url(http://farm6.static.flickr.com/5202/5226415923_8ae1a0e51e_o.jpg) fixed repeat-x -1200px -500px" },
    "#header .access li a": { "color": "#000" },
    "#header .access li.current-menu-item a, #header .access li.current_page_parent a": { "color": "#FFD700" }
  }
}


/** Me and a big 'ol beer skin effect */
function skinBigBeer() {
  setPhotoCredit("Did somebody say beer Friday!?", "http://www.flickr.com/photos/mccolin/5053804492/");
  setSiteGreeting("Hey!");
  return {
    "body": { "background": "url(http://farm5.static.flickr.com/4141/5053804492_cae13e53a8_o.jpg) fixed repeat-x -50px -100px" },
    "h1": { "background": "#570400", "color": "#FFF" },
    "h1 a": { "color": "#FFF" },
    ".access li a": { "background": "rgba(51,51,51,0.75)", "color": "#FFF" },
    ".access li.current-menu-item a, .access li.current_page_parent a": { "background": "rgba(200,200,200,0.75)", "color": "#000"},
  };
}


/** Liz and I together around the week of our wedding */
function skinWedding(now) {
  setPoweredBy("Liz. She means everything to me!");
  if ( now.getFullYear() > 2011 )
    setSiteGreeting("It's My Anniversary!");
  else
    setSiteGreeting("I Got Married!");
  setPhotoCredit("We're Super Cute, Too!", "http://www.flickr.com/photos/lizzyhart/1045536866/");
  setPhotoCredit("LINER PICS!","http://www.flickr.com/photos/lizzyhart/497169538/");
  $(".access li a").mouseenter(function(){
    $(this).css("background","#C86023").css("color","#FFD700");
  }).mouseleave(function(){
    $(this).css("background","transparent").css("color","#FFF");
  });
  $("#footer .access li a").mouseleave(function(){
    $(this).css("background","transparent").css("color","#000");
  });
  $(".access li.current-menu-item a, .access li.current_page_parent a").mouseleave(function(){
    $(this).css("background","#C86023").css("color","#FFD700");
  });

  return {
    "body": {
      "background": "url(http://farm1.static.flickr.com/229/497169538_c5941751f2_o.jpg) repeat-x fixed -400px -600px",
      "margin-top": "150px"
    },
    "h1": { "background": "#1F7047" },
    "#footer .access li a": { "color": "#000" },
    ".access li.current-menu-item a, .access li.current_page_parent a": { "background": "#C86023" },
    "#footer .footnote": { "color": "#000" }
  };
}



/**
 * Apply the named skin by applying the skin function callback
 * passed to this function */
function applySkin(skinFn, now) {
  if (!now) { now = new Date(); }

  // Call the skin function to retrieve style selectors and attributes:
  var styleAttr = skinFn(now);

  // Cycle through the selectors and style attributes and set new properties:
  for (selector in styleAttr) {
    var attrs = styleAttr[selector];
    for (property in attrs) {
      var value = attrs[property];
      $(selector).css(property, value);
    }
  }

  return(false);
}



/**
 * Attach to document ready, and trigger the appropriate style cascade based
 * on various parameters */
$(function() {

  // Start with the default skin function:
  var skinFn = skinDefault;

  // Capture the current date and time:
  var now = new Date();  // set to test for testing

  // To test date logic for a specifc date, override now:
  //now = new Date(2011, 9, 26, 0, 0); //, seconds, milliseconds);

  // Use time and other variables to swap in different skin functions:
  if (now.getMonth() == 11 && now.getDate() >= 12 && now.getDate() <= 25)
    skinFn = skinXMas;                        // Dec 12 through 25th
  else if (now.getMonth() == 9 && now.getDate() >= 24 && now.getDate() <= 31)
    skinFn = skinHalloween;                   // Week up to Halloween
  else if (now.getMonth() == 3 && now.getDate() >= 2 && now.getDate() <= 8)
    skinFn = skinWedding;                     // Week after our Wedding
  else if (now.getDay() == 0)
    skinFn = skinBoston;                      // Sundays
  else if (now.getDay() == 2)
    skinFn = skinBeardy;                      // Tuesdays
  else if (now.getDay() == 5)
    skinFn = skinBigBeer;                     // Fridays
  else if (now.getDay() == 6)
    skinFn = skinExploratorium;               // Saturdays

  // Check if there is an admin skin override and apply it:
  if ( skinName = urlParams["skin"] ) {
    skinFn = eval("skin"+skinName);
  }

  // Now that the time and skin name have been captured, apply the skin:
  applySkin(skinFn, now);

});
