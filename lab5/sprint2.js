$("img").click (function(){
    var currentclass= $(this).attr('class');
    $("."+currentclass).show();
    $(this).hide();
});