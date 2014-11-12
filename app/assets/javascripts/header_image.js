var minimize = function (div) {
    // $("#"+id).css("width", "10%");
    $(div).css("width", "10%");
};
var maximize = function (div) {
    // $("#"+id).css("width", "70%");
    $(div).css("width", "70%");
};
var header_image_click = function () {
    // $(".header_image").css("width", "10%");
    var count = 3;
    $(".header_image").css("width", "" + 20/(count-1) + "%");
    maximize(this);
};

var init = function () {
    $("#header_image_1").click(header_image_click);
    $("#header_image_2").click(header_image_click);
    $("#header_image_3").click(header_image_click);
};

$(document).ready(init);
