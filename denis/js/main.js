
$( document).ready(function(){
    let images = document.images,
     images_all = images.length ;
     let images_count = 0;
    console.log(images);
    console.log(images_all);
     for(let i = 0;i < images.length;i++)
     {
       let image_clone = new Image();
       image_clone.onload = image_loaded;
       image_clone.src = images[i].src;
      console.log(image_clone)
     }
   
     function image_loaded() {
      images_count++;
      console.log(images_count);
        if(images_count >= images_all)
        {
           $("#preloader").css("display","none");
        }
     }
     




    
  
      

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



