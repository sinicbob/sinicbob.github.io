$( document).ready(function(){
    let images = document.images,
     images_all = images.length ;
    console.log(images);
    console.log(images_all);
    $("#preloader").css("display","none");
    
  
      

    $('.shop_cour').owlCarousel({
      items:1,
      autoplay:true,
    })

  $(".media").css("min-height","450px");
  $('.whyme_cour').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    nav:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      768:{
        items:2
      },				
      992:{
        items:3
      },				
      1000:{
        
      }
    }
})
});



