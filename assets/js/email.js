// Map from display text to match to [display text override, email target, subject line, body]
var emails = {
  "email": [null, "arthur@deltawerx.com", null, null],
  "email web": ["Email", "arthur%2Bweb@deltawerx.com", "Web Contact: [YOUR SUBJECT]", null],
  "arthur": [null, "arthur@deltawerx.com", null, null],
  "arthur zey": [null, "arthur@deltawerx.com", null, null],
  "deltawerx": ["arthur@deltawerx.com", "arthur@deltawerx.com", null, "only a body!"]

}

$(document).ready(function() {
  $('a.email').each(function(index) {
    if (this.innerHTML.toLowerCase() in emails) {
      // Rewrite mailto
      var mailto = "mailto:" + emails[this.innerHTML.toLowerCase()][1];
      if (emails[this.innerHTML.toLowerCase()][2] !== null || emails[this.innerHTML.toLowerCase()][3] !== null) {
        mailto += "?";
      }
      if (emails[this.innerHTML.toLowerCase()][2] !== null) {
        mailto += "subject=" + emails[this.innerHTML.toLowerCase()][2];
      }
      if (emails[this.innerHTML.toLowerCase()][2] !== null && emails[this.innerHTML.toLowerCase()][3] !== null) {
        mailto += "&";
      }
      if (emails[this.innerHTML.toLowerCase()][3] !== null) {
        mailto += "body=" + emails[this.innerHTML.toLowerCase()][3];
      }
      this.href = mailto;
    }
    // Rewrite display text, if set
    if (emails[this.innerHTML.toLowerCase()][0] !== null) {
      this.innerHTML = emails[this.innerHTML.toLowerCase()][0];
    }
  });
});
