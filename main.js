$(document).ready(function(){
    //toggle function
    jQuery.fn.clickToggle = function(a, b) {
        return this.on("click", function(ev) { [b, a][this.$_io ^= 1].call(this, ev) })
      };



    //SEARCH
    $('.search').find('button').on('click', function(){
        if($('.search').find('input').val()){
        alert('thanks!');
        $('.main-block').slideUp(1000).delay(300).slideDown(1000);
        }        
    });
    
    //MAILING
    $('#mailing-registration').find('button').on('click', function () {
        let email = $('#mailing-registration input[type=email]').val();
        
        if (email.length == 0
        || (email.match(/.+?\@.+/g) || []).length !== 1) {
          console.log('invalid');
        } else {
            console.log('valid');
            alert("We will send you a message!");
            $('.mailing-block').slideUp(1000);
        }
      });

    //MENU
    $('#menu').find('button').on('click', function(){        
            $('#menu').find('#menu_list').toggle(300);
    });
    $('.smenu').on('click', function(){        
        $('#menu').find('#menu_list').toggle(300);
    });
    $('.menu-item').clickToggle( 
        function(){$(this).find('.smenu').css("max-height","10em");},
        function(){$(this).find('.smenu').css("max-height","0");
    });
    $("#authorization").on("click", function(){
        $(".login-form, .overlay").fadeIn(300);
    });

    //LOGIN FORM
    $(".txtb input").on("focus", function(){
        $(this).addClass("focus");
    });
    $(".txtb input").on("blur", function(){
        if($(this).val() == "")
        $(this).removeClass("focus");
    });
    $(".close-btn").on("click", function(){
        $(".login-form, .overlay").fadeOut(300);
        $("#menu_list").hide(300);
    });

    //SEE MORE
    var isShown=false;
    $('#see-more').on('click', function(){        
        $('.recipe-links-block').slideToggle(1000);
        isShown=!isShown;
        if(!isShown)
        $("#see-more").text("ПОКАЗАТЬ");
        if(isShown)
        $("#see-more").text("СПРЯТАТЬ");
        //$('#see-more').hide(1000);
    });

    //FAVORITES
    $('#favorites').clickToggle(
        function(){
            $('#favorites').find('p').text("Удалить из Избранных");  
            $('#favorites').attr('id',"favorites-chosen");  
        },
        function(){
            $('#favorites-chosen').find('p').text("Добавить в избранное");   
            $('#favorites-chosen').attr('id',"favorites");        
        }
    );

    //CHEK IF COOKED

    $('.check-if-cooked').clickToggle(
        function(){
            $('.check-btn').attr('id',"cooked");
            $('.check-text').text("Уже Приготовленно |").attr('id',"green-text");            
        },
        function(){
            $('.check-btn').attr('id',"not-cooked"); 
            $('.check-text').text("Отметить как Приготовленное |").attr('id',"");            
        }
    );

    //RATING STARS
    $('.rating-star').on('click', function(){
        $('.rating-number').empty();
        switch ($(this).attr('id')) {
            case "star1":
                $('.rating-number').html("<b>5</b>");
                break;
            case "star2":
                $('.rating-number').html("<b>4</b>");
                break;  
            case "star3":
                $('.rating-number').html("<b>3</b>");
                break;
            case "star4":
                $('.rating-number').html("<b>2</b>");
                break;  
            case "star5":
                $('.rating-number').html("<b>1</b>");
                break; 
        
        }
        //if( $(this).is(':checked') ) alert($('.rating-number').val());
    });    
    if($('.rating-number').html()=="<b>4</b>"){$('#star2').prop('checked', true);}
    

})