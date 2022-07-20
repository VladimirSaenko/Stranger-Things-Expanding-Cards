
"use strict";

$(".panel").click(function(){
    $(".panel").removeClass("active");
    $(this).addClass("active");
    $(".icon").removeClass("active");
});

$(".panel1").click(function() {
    $(".icon1").addClass("active");
})

$(".panel2").click(function() {
    $(".icon2").addClass("active");
})

$(".panel3").click(function() {
    $(".icon3").addClass("active");
})

$(".panel4").click(function() {
    $(".icon4").addClass("active");
})

$(".panel5").click(function() {
    $(".icon5").addClass("active");
    $(".panel5").animate({
        animation: 'none'
    })
    $(".panel5").css("background", "url(images/vecna.png)")
})
