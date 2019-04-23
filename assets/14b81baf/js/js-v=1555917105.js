$(".main-media-book").hover(function () {
    var id = $(this).attr("id");
    $("#"+id+".main-media-book").addClass("main-media-book-active");
}, function () {
    var id = $(this).attr("id");
    $("#"+id+".main-media-book").removeClass("main-media-book-active");
});