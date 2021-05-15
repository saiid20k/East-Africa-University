$(document).ready(function(){
    $('.show').click(function(){
        $('.nav0').toggle()
    })
});


var tog = document.getElementById("tog");


window.onscroll = function(){
    if(window.pageYOffset >= 400) {
        tog.style.display='block';
    } else{
        tog.style.display='none';
    }  
};

tog.onclick = function(){
    window.scrollTo(0,0);
}




$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 22){
            $('.menu').addClass("fixed");
        }else{
            $('.menu').removeClass("fixed");
        }
        

    })
});