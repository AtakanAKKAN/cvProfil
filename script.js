

$('.item').on("click", function(evt) {
    evt.preventDefault();
    
    let _this = $(this),
        ct = _this.attr('id')
        console.log(ct);
    
    // check if clicked title has active class
    /*if(_this.hasClass('a')){
    
      _this.removeClass('a');
      ct.slideUp();
      
    } else {
      $('.item.a').removeClass('a');
      $('.control').slideUp();
      _this.addClass('a');
      ct.slideDown();
      
    }
  */
  });


/*
$("#item").on("click", function(evt){
    evt.preventDefault();

    let _this = $(this)
        ct = _this.attr('class')
        console.log(ct)

    if(ct === $("document('id')")){
        ct.hide();
    }else{
        ct.show();
    }
    
})
*/


$("#about").click(function(evt){
    evt.preventDefault();

    $(".about-class").show(200,function(){
        $(".contant-class").hide(100)
        $(".more-class").hide(100)
    })
})

$("#contant").click(function(evt){
    evt.preventDefault();

    $(".contant-class").show(200,function(){
        $(".about-class").hide(100)
        $(".more-class").hide(100)
    })
})

$("#more").click(function(evt){
    evt.preventDefault();

    $(".more-class").show(200,function(){
        $(".contant-class").hide(100)
        $(".about-class").hide(100)
    })
})


