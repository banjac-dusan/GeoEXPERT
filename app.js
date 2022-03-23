$(document).ready(function(){

$('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
});

$(window).on('scroll load', function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
});

$('.count').each(function(){
var $this = $(this),
countTo = $this.attr('data-count');
$({countNum : $this.text() }).animate({
    countNum : countTo 
},
{
    duration:1200,
    step: function(){
        $this.text(Math.floor(this.countNum));
    },
    complete : function(){
        $this.text(this.countNum + '+');
    }
}  
)
})

$('.project').magnificPopup({
    delegate:'a',
    type:'image',
    removalDelay: 100,
    gallery:{
    enabled:true
    }
});
});

const scrollBtn = document.querySelector(".scroll-to-top")

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 3500) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
}; 
refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});