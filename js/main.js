AOS.init();
//-------------------------------carousel work start-----------------------------------> 

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
   
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
          
            
        }
    }
    
})
//-------------------------------carousel work start-----------------------------------> 
$(window).scroll(function(){
$(".navbar").toggleClass('mainnav',$(this).scrollTop()>200)
});

