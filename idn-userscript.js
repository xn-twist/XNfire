// ==UserScript==
// @name     IDN detector
// @author   wesinator
// @version  1
// @grant    none
// ==/UserScript==

function isIDN(hostname) {
  for (part of hostname.split(".")) {
    if (part.startsWith("xn--"))
      return true;
  }
  return false;
}

var hostname = window.location.hostname;
if (isIDN(hostname)) {
  var msg = `Warning: the actual domain you visited is "${hostname}". This is an internationalized domain name (IDN). 
If the address bar appears to show a site you were intending to visit, you should not enter any information here, leave the page and type the site manually.`;
  alert(msg);
  console.warn(msg);
}
