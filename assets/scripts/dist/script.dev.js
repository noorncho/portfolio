"use strict";

/**
 * Overlay functionality
 */
function on(img) {
  document.getElementById("overlay" + img.id).style.display = "block";
}

function off(mod) {
  document.getElementById("" + mod.id).style.display = "none";
}