document.addEventListener("touchstart", function() {},false);

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll-top a').fadeIn();
    } else {
        $('.scroll-top a').fadeOut();
    }
});

// Arthur Zey 2021-10-31: The following is if only if we're scrolling within the content div, and we want bar-10 to fade in and out for scolling to the top.
$('.content').scroll(function() {
  var contentHeight = $('.content').scrollTop();
  if (contentHeight > 100) {
    // $('.scroll-top-bar a').css("display", "inline-block");
    $('.scroll-top-bar a').fadeIn();
    $('.scroll-top-bar a').css("display", "inline-block");
  } else {
    $('.scroll-top-bar a').fadeOut();
  }
});

$(document).ready(function() {
    $("#scroll-top").click(function(event) {
        event.preventDefault();
        window.history.pushState({ additionalInformation: "Stripping URL of the internal anchor link."}, document.title, event.currentTarget.href.split("#")[0]); // clear the anchor from the URL
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// Arthur Zey 2021-10-31: The following makes the a tag clickable to bring the content div's scroll position to the top.
$(document).ready(function() {
    $("#scroll-top-bar").click(function(event) {
        event.preventDefault();
        window.history.pushState({ additionalInformation: "Stripping URL of the internal anchor link."}, document.title, event.currentTarget.href.split("#")[0]); // clear the anchor from the URL
        $('.content').animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// Arthur Zey 2021-10-31: The following makes internal page anchor links work correctly and scroll smoothly.
// First, we trigger on a click on any link.
// Second, we check if the target URL (without the hash) is the same as the current page's URL (without the hash), which tells us whether it's an internal anchor link.
$(document).ready(function() {
  $('a:not(#scroll-top):not(#scroll-top-bar').click(function(event) {
    if (event.currentTarget.href.split("#")[0] == window.location.href.split("#")[0]) {
      if (typeof hash_redirects !== 'undefined' && "#" + event.currentTarget.href.split("#")[1] in hash_redirects) {
        event.preventDefault();
        window.location.href = hash_redirects["#" + event.currentTarget.href.split("#")[1]];
      } else {
        if ($("body").css("overflow") == "hidden") {
          // This means that the content div is scrolling, not the overall page.
          event.preventDefault();
          $('.content').animate( { scrollTop: $('.content').scrollTop() + $(event.currentTarget.hash).position().top }, "slow");
          // We're setting the scroll position of the content div to its current scroll position plus the relative position of the anchor link's target div.
        } else {
          // This means that the overall page is scrolling.
          event.preventDefault();
          $("html, body").animate({ scrollTop: $('.content').position().top + $(event.currentTarget.hash).position().top }, "slow");
          // We're setting the scroll position of the page to where the content div starts plus the relative position of the anchor link's target div in the content div.
        }
        // Get rid of the element's focus when we're done, in case its style changed.
        $(':focus').blur();
        // Update the URL with the anchor
        window.history.pushState({ additionalInformation: "Updated the URL with the internal anchor link."}, document.title, event.currentTarget.href);
      }
    }
  });
});

// General function to position and resize the content div, for both initial positioning and on window resize, since we need it to be positioned absolutely for scrolling its contents independently.
function positionAndResizeContent() {
  // First, we set the position to absolute again (just in case), and set the top of the element to the bottom of the buffer (its top plus its height).
  $('.content').css({
    "position": "absolute",
    "top": $('.corner-bg').position().top + $('.corner-bg').height(),
    "left": $('.left-frame').position().left + $('.left-frame').width()
  });
  // Second, we set the width of the content div by taking the window's viewport size (which we have to take the min of innerWifth and outerWidth because of weird differences between desktop and mobile), subtracting the left-frame (using its left position plus width), and subtracting the margin, border, and padding of the content (by subtracting the width from the outerwidth(true)).
  $('.content').width(Math.min(window.outerWidth, window.innerWidth) - ($('.left-frame').position().left + $('.left-frame').width()) - ($('.content').outerWidth(true) - $('.content').width()));
  // Third, we have to adjust the height of panel-10, but only if the whole page is scrolling.
  if ($("body").css("overflow") != "hidden") {
    // That is, the whole page is scrolling, not just the content div
    $('.panel-10').css("padding-bottom", $('.content').height() - ($('.panel-9').position().top + $('.panel-9').outerHeight()) + 300);
  }
  return;
}

// Arthur Zey 2021-10-31: The following corrects the overall window position if we want the content div to scroll, but we got to the page with an anchor link in the URL:
// window.location.hash.substr(1).length > 0 tells us that the loaded URL had an anchor link
// $(window).scrollTop() > 0 tells us that the overall page is scrolled (the default for the template)
// $("body").css("overflow") == "hidden" tells us that the overall page's overflow is hidden; ie, that the content div is going to scroll (this is set in the CSS)
$(document).ready(function() {
  positionAndResizeContent();
  if (window.location.hash.substr(1).length > 0 && $(window).scrollTop() > 0 && $("body").css("overflow") == "hidden") {
    window.scrollTo(0,0);
    $('.content').animate( { scrollTop: $('.content').scrollTop() + $(window.location.hash).position().top }, "slow");
  }
});

$(window).resize(function() {
  positionAndResizeContent();
});
