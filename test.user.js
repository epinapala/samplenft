// ==UserScript==
// @name         embedscr url extract Userscript
// @namespace    http://embedscr.to/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        http://embedscr.to/*
// @match        http://escr.to/*
// @match        https://etcscr.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var div = document.getElementsByClassName('entry-content')[0];
    var iframe = div.getElementsByTagName("iframe")[0];
    var openLoadUrl =  iframe.src.replace('embed','f');
    var castCommand = "youtube-dl -o - "+ openLoadUrl + " | castnow --quiet -";

    /*div.innerHTML = "";
    div.innerHTML += ("<a href=\"" + openLoadUrl+ "\" target=\"_BLANK\">Open in a new tab</a>" + "<br />");
    div.innerHTML += ("<label>Openload Url : <input style=\"font-size:25px\" type=\"text\" size=\"65\" value=\"" + openLoadUrl+ "\" /></label>" + "<br />");
    div.innerHTML +=  "<label>Castnow + Youtube-Dl Command : <input style=\"font-size:25px\" type=\"text\" size=\"75\" value=\"" + castCommand+ "\" /></label>" + "<br />";

    //window.prompt('Command to cast! :)', castCommand);
    */
    window.location = openLoadUrl;
})();
