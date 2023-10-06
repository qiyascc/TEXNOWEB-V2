jQuery(document).ready(function($) {
    var title = document.title;
    var alttitle = "Geri dön. :(";
    window.onblur = function () { document.title = alttitle; };
    window.onfocus = function () { document.title = title; };
    
});