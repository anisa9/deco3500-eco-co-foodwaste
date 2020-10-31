$(document).ready(function() {
   
    function closeCommentNotification() {
        $('.notification-comment').slideToggle('fast');
       
      } 

      

// HOME PAGE EXPIRING SOON -------

//milk 
    //  open open expiry modal 
    $('.expire-btn').on('click', function openModal(){
        $('.milk-useup-modal').show();
    });

    // close expiry useup modal
    $('.useup-modal .closeBtn').on('click', function closeModal(){
        $('.useup-modal').hide();
    });

    // Throw 
    $(".milk-useup-modal .throw-btn").on("click", function () {
        $('.milk-useup-modal').hide();
        $(".milk-container").remove();
    });
     // Eat 
     $(".milk-useup-modal .eat-some-btn").on("click", function () {
        $('.milk-useup-modal').hide();
        $(".milk-container").remove();
    });

//carrot 
    //  open open expiry modal 
    $('.carrot-expiry-btn').on('click', function openModal(){
        $('.carrot-useup-modal').show();
    });

    // Throw 
    $(".carrot-useup-modal .throw-btn").on("click", function () {
        $('.carrot-useup-modal').hide();
        $(".carrot-container").remove();
    });
     // Eat 
     $(".carrot-useup-modal .eat-some-btn").on("click", function () {
        $('.carrot-useup-modal').hide();
        $(".carrot-container").remove();
    });


//spinach 
    //  open open expiry modal 
    $('.spinach-expiry-btn').on('click', function openModal(){
        $('.spinach-useup-modal').show();
    });

    // Throw 
    $(".spinach-useup-modal .throw-btn").on("click", function () {
        $('.spinach-useup-modal').hide();
        $(".spinach-container").remove();
    });
     // Eat 
     $(".spinach-useup-modal .eat-some-btn").on("click", function () {
        $('.spinach-useup-modal').hide();
        $(".spinach-container").remove();
    });

//potatosalad 
    //  open open expiry modal 
    $('.potatosalad-expiry-btn').on('click', function openModal(){
        $('.potatosalad-useup-modal').show();
    });

    // Throw 
    $(".potatosalad-useup-modal .throw-btn").on("click", function () {
        $('.potatosalad-useup-modal').hide();
        $(".potatosalad-container").remove();
    });
     // Eat 
     $(".potatosalad-useup-modal .eat-some-btn").on("click", function () {
        $('.potatosalad-useup-modal').hide();
        $(".potatosalad-container").remove();
    });

// open  rules info modal - toggle
$('.rules').on('click', function openModal(){
    $('.rulesModal').show();
}); 
// close rules modal
$('.rulesModal .closeBtn').on('click', function closeModal(){
$('.rulesModal').hide();
});


// ----------- HOME PAGE - NOTEPAD-----------------------------

$("#user-modal").hide();
  
//
$('.comment-input').on('click', function openModal(){
    $('#user-modal').show();
});


// Function to close modal when click closeBtn
    $('#user-modal .closeBtn').on('click', function closeModal(){
        $('#user-modal').hide();
    });



// Add comment to Notepad

$('.comment-field').submit(function(e){
    e.preventDefault();
    var $chatBox = $( ".chat-box" ),
     comment = $(".comment-input").val();
    var date = new Date().toLocaleTimeString();

    if($('#SarahBtn').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
	 } else if($('#JaneBtn').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
	 } else if($('#BobBtn').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
	 }
    $('input',this).val(''); 
  });  


// append notification to item modal
  $('.notification-comment').appendTo(".itemModal");
  function deleteNotify() {
    $('.notification-comment .alert-note').empty();}


  // cream 
  $('.comment-field2').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box2" ),
     comment = $(".comment-input2").val();
    var date = new Date().toLocaleTimeString();
    
    //append comment to notification
    $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn2').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Cream: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
	 }else if($('#JaneBtn2').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Cream: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
	 } else if($('#BobBtn2').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Cream: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
     }
    $('input',this).val(''); 
    })
    // empty notification after send
    setTimeout(deleteNotify, 3000);  

  });  


  // cheese 
  $('.comment-field3').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
    var $chatBox = $( ".chat-box3" ),
     comment = $(".comment-input3").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn3').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Cheese: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
	 }else if($('#JaneBtn3').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Cheese: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
	 } else if($('#BobBtn3').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Cheese: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
	 }
    $('input',this).val('');
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 

// butter 
$('.comment-field4').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box4" ),
     comment = $(".comment-input4").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn4').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Butter: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn4').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Butter: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn4').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Butter: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 



// chicken 
$('.comment-field5').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box5" ),
     comment = $(".comment-input5").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn5').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Chicken: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn5').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Chicken: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn5').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Chicken: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 



// tofu 
$('.comment-field6').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box6" ),
     comment = $(".comment-input6").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn6').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Fish: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn6').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Fish: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn6').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Fish: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// salami 
$('.comment-field7').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box7" ),
     comment = $(".comment-input7").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn7').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on salami: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn7').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on salami: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
     } else if($('#BobBtn7').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on salami: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// potato salad 
$('.comment-field8').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box8" ),
     comment = $(".comment-input8").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn8').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on  potato salad : ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn8').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on  potato salad : ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn8').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on  potato salad : ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// ubereats burger 
$('.comment-field9').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box9" ),
     comment = $(".comment-input9").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn9').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on ubereats burger: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn9').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on ubereats burger: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn9').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on ubereats burger: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Apple 
$('.comment-field10').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box10" ),
     comment = $(".comment-input10").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn10').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Apple: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn10').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Apple: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn10').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Apple: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Mango 
$('.comment-field11').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box11" ),
     comment = $(".comment-input11").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn11').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Plum: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn11').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Plum: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn11').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Plum: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Kiwi 
$('.comment-field12').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box12" ),
     comment = $(".comment-input12").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn12').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Kiwi: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn12').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Kiwi: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn12').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Kiwi: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Spinach 
$('.comment-field13').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box13" ),
     comment = $(".comment-input13").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn13').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Spinach: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn13').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Spinach: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn13').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Spinach: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Carrot 
$('.comment-field14').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box14" ),
     comment = $(".comment-input14").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn14').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Carrot: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn14').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Carrot: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn14').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Carrot: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Tomato 
$('.comment-field15').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box15" ),
     comment = $(".comment-input15").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn15').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Tomato: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn15').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Tomato: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn15').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Tomato: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Broccoli 
$('.comment-field16').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box16" ),
     comment = $(".comment-input16").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn16').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Broccoli: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn16').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Broccoli: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn16').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Broccoli: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Lettuce 
$('.comment-field17').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box17" ),
     comment = $(".comment-input17").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn17').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Lettuce: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn17').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Lettuce: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn17').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Lettuce: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 


// Orange Juice 
$('.comment-field18').submit(function(e){
    e.preventDefault();
    $(this).each(function () {
        var $chatBox = $( ".chat-box18" ),
     comment = $(".comment-input18").val();
    var date = new Date().toLocaleTimeString();

      //append comment to notification
      $('.notification-comment .alert-note').append(comment);

    if($('#SarahBtn18').is(':checked')) {
        $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/sarah_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Sarah</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
        $('.notification-comment .alert-note ').prepend('Sarah commented on Orange Juice: ');
        $('.notification-comment').slideDown('fast');
        $(".notify-audio")[0].play();
        window.setTimeout(closeCommentNotification,3000);
    }else if($('#JaneBtn18').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/jane_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Jane</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Jane commented on Orange Juice: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        } else if($('#BobBtn18').is(':checked')) {
         $chatBox.append('<div class="commment-container"><div class="housemate-icon"><img src="media/bob_icon-01.png"></div> <div class="comment-box"> <div class="comment-header"><div class="comment-name">Bob</div> <div class="comment-time">' + date +'</div></div><div class="comment-body">' + comment + '</div></div></div>');
         $('.notification-comment .alert-note ').prepend('Bob commented on Orange Juice: ');
         $('.notification-comment').slideDown('fast');
         $(".notify-audio")[0].play();
         window.setTimeout(closeCommentNotification,3000);
        }
    $('input',this).val(''); 
})
// empty notification after send
setTimeout(deleteNotify, 3000);  
  }); 






//-----------FRIDGE ITEM DETAILS ------------
// close item details modal
$('.itemModal .closeBtn').on('click', function openModal(){
    $('.itemModal').hide();
});

// milk
  // open item details modal
	$('.milk-detail-btn').on('click', function openModal(){
		$('#milkModal').show();
	});
// cream
  // open item details modal
  $('.cream-detail-btn').on('click', function openModal(){
    $('#creamModal').show();
});
// cheese
  // open item details modal
  $('.cheese-detail-btn').on('click', function openModal(){
    $('#cheeseModal').show();
});
// butter
  // open item details modal
  $('.butter-detail-btn').on('click', function openModal(){
    $('#butterModal').show();
});

// chicken
  // open item details modal
  $('.chicken-detail-btn').on('click', function openModal(){
    $('#chickenModal').show();
});

// tofu
  // open item details modal
  $('.tofu-detail-btn').on('click', function openModal(){
    $('#tofuModal').show();
});

// salami
  // open item details modal
  $('.salami-detail-btn').on('click', function openModal(){
    $('#salamiModal').show();
});

// potato-salad
  // open item details modal
  $('.potato-salad-detail-btn').on('click', function openModal(){
    $('#potatosaladModal').show();
});

// ubereats-burger
  // open item details modal
  $('.ubereats-burger-detail-btn').on('click', function openModal(){
    $('#ubereatsModal').show();
});

// apple
  // open item details modal
  $('.apple-detail-btn').on('click', function openModal(){
    $('#appleModal').show();
});

// mango
  // open item details modal
  $('.mango-detail-btn').on('click', function openModal(){
    $('#mangoModal').show();
});

// kiwi
  // open item details modal
  $('.kiwi-detail-btn').on('click', function openModal(){
    $('#kiwiModal').show();
});

// spinach
  // open item details modal
  $('.spinach-detail-btn').on('click', function openModal(){
    $('#spinachModal').show();
});

// carrot
  // open item details modal
  $('.carrot-detail-btn').on('click', function openModal(){
    $('#carrotModal').show();
});

// tomato
  // open item details modal
  $('.tomato-detail-btn').on('click', function openModal(){
    $('#tomatoModal').show();
});

// broccoli
  // open item details modal
  $('.broccoli-detail-btn').on('click', function openModal(){
    $('#broccoliModal').show();
});

// lettuce
  // open item details modal
  $('.lettuce-detail-btn').on('click', function openModal(){
    $('#lettuceModal').show();
});

// orange-juice
  // open item details modal
  $('.orange-juice-detail-btn').on('click', function openModal(){
    $('#orangejuiceModal').show();
});


//------------------OWNERSHIP MODAL ------------------
  // open ownership modal
  $(".add-ownership-btn").on("click", function () {
    $(".ownership-modal").show();
  });

  // close ownership model on button click
  $('.ownership-modal .closeBtn').on('click', function closeModal(){
    $('.ownership-modal').hide();
  });



// -----ADD OWNERSHIP ------

// Milk modal
    // Sarah Ownership
    $("#milkModal .ownership-modal .sarah-icon").on("click", function () {
        $("#milkModal .sarah-own-dot").show();
        $("#milk .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#milkModal .ownership-modal .jane-icon").on("click", function () {
        $("#milkModal .jane-own-dot").show();
        $("#milk .jane-own-dot-fridge").show();

        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#milkModal .ownership-modal .bob-icon").on("click", function () {
        $("#milkModal .bob-own-dot").show();
        $("#milk .bob-own-dot-fridge").show();

        $('.ownership-modal').hide();
    });

// Cream modal
    // Sarah Ownership
    $("#creamModal .ownership-modal .sarah-icon").on("click", function () {
        $("#creamModal .sarah-own-dot").show();
        $("#cream .sarah-own-dot-fridge").show();

        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#creamModal .ownership-modal .jane-icon").on("click", function () {
        $("#creamModal .jane-own-dot").show();
        $("#cream .jane-own-dot-fridge").show();

        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#creamModal .ownership-modal .bob-icon").on("click", function () {
        $("#creamModal .bob-own-dot").show();
        $("#cream .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });


// Cheese modal
    // Sarah Ownership
    $("#cheeseModal .ownership-modal .sarah-icon").on("click", function () {
        $("#cheeseModal .sarah-own-dot").show();
        $("#cheese .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#cheeseModal .ownership-modal .jane-icon").on("click", function () {
        $("#cheeseModal .jane-own-dot").show();
        $("#cheese .jane-own-dot-fridge").show();

        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#cheeseModal .ownership-modal .bob-icon").on("click", function () {
        $("#cheeseModal .bob-own-dot").show();
        $("#cheese .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

// Butter modal
    // Sarah Ownership
    $("#butterModal .ownership-modal .sarah-icon").on("click", function () {
        $("#butterModal .sarah-own-dot").show();
        $("#butter .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#butterModal .ownership-modal .jane-icon").on("click", function () {
        $("#butterModal .jane-own-dot").show();
        $("#butter .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#butterModal .ownership-modal .bob-icon").on("click", function () {
        $("#butterModal .bob-own-dot").show();
        $("#butter .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });


// chicken modal
    // Sarah Ownership
    $("#chickenModal .ownership-modal .sarah-icon").on("click", function () {
        $("#chickenModal .sarah-own-dot").show();
        $("#chicken .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#chickenModal .ownership-modal .jane-icon").on("click", function () {
        $("#chickenModal .jane-own-dot").show();
        $("#chicken .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#chickenModal .ownership-modal .bob-icon").on("click", function () {
        $("#chickenModal .bob-own-dot").show();
        $("#chicken .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });



    // tofu modal
    // Sarah Ownership
    $("#tofuModal .ownership-modal .sarah-icon").on("click", function () {
        $("#tofuModal .sarah-own-dot").show();
        $("#tofu .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#tofuModal .ownership-modal .jane-icon").on("click", function () {
        $("#tofuModal .jane-own-dot").show();
        $("#tofu .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#tofuModal .ownership-modal .bob-icon").on("click", function () {
        $("#tofuModal .bob-own-dot").show();
        $("#tofu .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // salami modal
    // Sarah Ownership
    $("#salamiModal .ownership-modal .sarah-icon").on("click", function () {
        $("#salamiModal .sarah-own-dot").show();
        $("#salami .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#salamiModal .ownership-modal .jane-icon").on("click", function () {
        $("#salamiModal .jane-own-dot").show();
        $("#salami .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#salamiModal .ownership-modal .bob-icon").on("click", function () {
        $("#salamiModal .bob-own-dot").show();
        $("#salami .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // potato-salad modal
    // Sarah Ownership
    $("#potatosaladModal .ownership-modal .sarah-icon").on("click", function () {
        $("#potatosaladModal .sarah-own-dot").show();
        $("#potato-salad .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#potatosaladModal .ownership-modal .jane-icon").on("click", function () {
        $("#potatosaladModal .jane-own-dot").show();
        $("#potato-salad .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#potatosaladModal .ownership-modal .bob-icon").on("click", function () {
        $("#potatosaladModal .bob-own-dot").show();
        $("#potato-salad .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // ubereats-burger modal
    // Sarah Ownership
    $("#ubereatsModal .ownership-modal .sarah-icon").on("click", function () {
        $("#ubereatsModal .sarah-own-dot").show();
        $("#ubereats-burger .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#ubereatsModal .ownership-modal .jane-icon").on("click", function () {
        $("#ubereatsModal .jane-own-dot").show();
        $("#ubereats-burger .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#ubereatsModal .ownership-modal .bob-icon").on("click", function () {
        $("#ubereatsModal .bob-own-dot").show();
        $("#ubereats-burger .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // apple modal
    // Sarah Ownership
    $("#appleModal .ownership-modal .sarah-icon").on("click", function () {
        $("#appleModal .sarah-own-dot").show();
        $("#apple .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#appleModal .ownership-modal .jane-icon").on("click", function () {
        $("#appleModal .jane-own-dot").show();
        $("#apple .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#appleModal .ownership-modal .bob-icon").on("click", function () {
        $("#appleModal .bob-own-dot").show();
        $("#apple .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // mango modal
    // Sarah Ownership
    $("#mangoModal .ownership-modal .sarah-icon").on("click", function () {
        $("#mangoModal .sarah-own-dot").show();
        $("#mango .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#mangoModal .ownership-modal .jane-icon").on("click", function () {
        $("#mangoModal .jane-own-dot").show();
        $("#mango .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#mangoModal .ownership-modal .bob-icon").on("click", function () {
        $("#mangoModal .bob-own-dot").show();
        $("#mango .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // kiwi modal
    // Sarah Ownership
    $("#kiwiModal .ownership-modal .sarah-icon").on("click", function () {
        $("#kiwiModal .sarah-own-dot").show();
        $("#kiwi .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#kiwiModal .ownership-modal .jane-icon").on("click", function () {
        $("#kiwiModal .jane-own-dot").show();
        $("#kiwi .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#kiwiModal .ownership-modal .bob-icon").on("click", function () {
        $("#kiwiModal .bob-own-dot").show();
        $("#kiwi .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // spinach modal
    // Sarah Ownership
    $("#spinachModal .ownership-modal .sarah-icon").on("click", function () {
        $("#spinachModal .sarah-own-dot").show();
        $("#spinach .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#spinachModal .ownership-modal .jane-icon").on("click", function () {
        $("#spinachModal .jane-own-dot").show();
        $("#spinach .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#spinachModal .ownership-modal .bob-icon").on("click", function () {
        $("#spinachModal .bob-own-dot").show();
        $("#spinach .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // carrot modal
    // Sarah Ownership
    $("#carrotModal .ownership-modal .sarah-icon").on("click", function () {
        $("#carrotModal .sarah-own-dot").show();
        $("#carrot .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#carrotModal .ownership-modal .jane-icon").on("click", function () {
        $("#carrotModal .jane-own-dot").show();
        $("#carrot .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#carrotModal .ownership-modal .bob-icon").on("click", function () {
        $("#carrotModal .bob-own-dot").show();
        $("#carrot .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // tomato modal
    // Sarah Ownership
    $("#tomatoModal .ownership-modal .sarah-icon").on("click", function () {
        $("#tomatoModal .sarah-own-dot").show();
        $("#tomato .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#tomatoModal .ownership-modal .jane-icon").on("click", function () {
        $("#tomatoModal .jane-own-dot").show();
        $("#tomato .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#tomatoModal .ownership-modal .bob-icon").on("click", function () {
        $("#tomatoModal .bob-own-dot").show();
        $("#tomato .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // broccoli modal
    // Sarah Ownership
    $("#broccoliModal .ownership-modal .sarah-icon").on("click", function () {
        $("#broccoliModal .sarah-own-dot").show();
        $("#broccoli .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#broccoliModal .ownership-modal .jane-icon").on("click", function () {
        $("#broccoliModal .jane-own-dot").show();
        $("#broccoli .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#broccoliModal .ownership-modal .bob-icon").on("click", function () {
        $("#broccoliModal .bob-own-dot").show();
        $("#broccoli .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

    // lettuce modal
    // Sarah Ownership
    $("#lettuceModal .ownership-modal .sarah-icon").on("click", function () {
        $("#lettuceModal .sarah-own-dot").show();
        $("#lettuce .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#lettuceModal .ownership-modal .jane-icon").on("click", function () {
        $("#lettuceModal .jane-own-dot").show();
        $("#lettuce .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#lettuceModal .ownership-modal .bob-icon").on("click", function () {
        $("#lettuceModal .bob-own-dot").show();
        $("#lettuce .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });

 // orange-juice modal
    // Sarah Ownership
    $("#orangejuiceModal .ownership-modal .sarah-icon").on("click", function () {
        $("#orangejuiceModal .sarah-own-dot").show();
        $("#orange-juice .sarah-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Jane Ownership
    $("#orangejuiceModal .ownership-modal .jane-icon").on("click", function () {
        $("#orangejuiceModal .jane-own-dot").show();
        $("#orange-juice .jane-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });
    // Bob Ownership
    $("#orangejuiceModal .ownership-modal .bob-icon").on("click", function () {
        $("#orangejuiceModal .bob-own-dot").show();
        $("#orange-juice .bob-own-dot-fridge").show();
        $('.ownership-modal').hide();
    });


//  ITEM DETAIL BUTTONS - THROW, EAT ALL, EAT SOME

var SarahWastedItems = $(".sarah-stats");
var JaneWastedItems = $(".jane-stats");
var BobWastedItems = $(".bob-stats");
var HouseWastedItems = $(".household-stats");

    // Milk
        // Throw 
        $("#milkModal .throw-btn").on("click", function () {
            $('#milkModal').hide();
            $(".fridge-items #milk").remove();
           
            // add item to foodprint once thrown
            var sarahDot = $("#milkModal .item-modal-header div .sarah-own-dot").get();
           var janeDot = $("#milkModal .item-modal-header div .jane-own-dot").get();
           var bobDot = $("#milkModal .item-modal-header div .bob-own-dot").get();
            if ($(sarahDot).css('display') !== 'none') {
                var clonedWaste = $("#milkModal .item-modal-header div div" ).clone();
                SarahWastedItems.append(clonedWaste);
           }else if ($(janeDot).css('display') !== 'none') {
            var clonedWaste = $("#milkModal .item-modal-header div div" ).clone();
            JaneWastedItems.append(clonedWaste);
           }else if ($(bobDot).css('display') !== 'none') {
            var clonedWaste = $("#milkModal .item-modal-header div div" ).clone();
            BobWastedItems.append(clonedWaste);
           }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
            var clonedWaste = $("#milkModal .item-modal-header div div" ).clone();
            HouseWastedItems.append(clonedWaste);
           }
        });
        // Eat All
        $("#milkModal .eat-all-btn").on("click", function () {
            $('#milkModal').hide();
            $(".fridge-items #milk").remove();
        });
         // Eat Some
         $("#milkModal .eat-some-btn").on("click", function () {
             $('#milkModal').hide();
         });

   // Cream
        // Throw 
        $("#creamModal .throw-btn").on("click", function () {
            $('#creamModal').hide();
            $(".fridge-items #cream").remove();
            var sarahDot = $("#creamModal .item-modal-header div .sarah-own-dot").get();
           var janeDot = $("#creamModal .item-modal-header div .jane-own-dot").get();
           var bobDot = $("#creamModal .item-modal-header div .bob-own-dot").get();
            if ($(sarahDot).css('display') !== 'none') {
                var clonedWaste = $("#creamModal .item-modal-header div div" ).clone();
                SarahWastedItems.append(clonedWaste);
           }else if ($(janeDot).css('display') !== 'none') {
            var clonedWaste = $("#creamModal .item-modal-header div div" ).clone();
            JaneWastedItems.append(clonedWaste);
           }else if ($(bobDot).css('display') !== 'none') {
            var clonedWaste = $("#creamModal .item-modal-header div div" ).clone();
            BobWastedItems.append(clonedWaste);
           }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
            var clonedWaste = $("#creamModal .item-modal-header div div" ).clone();
            HouseWastedItems.append(clonedWaste);
           }
        });
        // Eat All
        $("#creamModal .eat-all-btn").on("click", function () {
            $('#creamModal').hide();
            $(".fridge-items #cream").remove();
        });
         // Eat Some
         $("#creamModal .eat-some-btn").on("click", function () {
             $('#creamModal').hide();
         });


   // Cheese
        // Throw 
        $("#cheeseModal .throw-btn").on("click", function () {
            $('#cheeseModal').hide();
            $(".fridge-items #cheese").remove();
            var sarahDot = $("#cheeseModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#cheeseModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#cheeseModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#cheeseModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#cheeseModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#cheeseModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#cheeseModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#cheeseModal .eat-all-btn").on("click", function () {
            $('#cheeseModal').hide();
            $(".fridge-items #cheese").remove();
        });
         // Eat Some
         $("#cheeseModal .eat-some-btn").on("click", function () {
             $('#cheeseModal').hide();
         });
        // open item - update expiry
        $("#cheeseModal .open-item-btn").on("click", function () {
            $(this).prop('disabled',true);
            $("#cheese-expiry").text("in 7 days");
        });

   // Butter
        // Throw 
        $("#butterModal .throw-btn").on("click", function () {
            $('#butterModal').hide();
            $(".fridge-items #butter").remove();
            var sarahDot = $("#butterModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#butterModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#butterModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#butterModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#butterModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#butterModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#butterModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#butterModal .eat-all-btn").on("click", function () {
            $('#butterModal').hide();
            $(".fridge-items #butter").remove();
        });
         // Eat Some
         $("#butterModal .eat-some-btn").on("click", function () {
             $('#butterModal').hide();
         });
        // open item - update expiry
        $("#butterModal .open-item-btn").on("click", function () {
            $(this).prop('disabled',true);
            $("#butter-expiry").text("in 25 days");
        });
      
   // chicken
        // Throw 
        $("#chickenModal .throw-btn").on("click", function () {
            $('#chickenModal').hide();
            $(".fridge-items #chicken").remove();
            var sarahDot = $("#chickenModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#chickenModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#chickenModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#chickenModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#chickenModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#chickenModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#chickenModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#chickenModal .eat-all-btn").on("click", function () {
            $('#chickenModal').hide();
            $(".fridge-items #chicken").remove();
        });
         // Eat Some
         $("#chickenModal .eat-some-btn").on("click", function () {
             $('#chickenModal').hide();
         });
// tofu
        // Throw 
        $("#tofuModal .throw-btn").on("click", function () {
            $('#tofuModal').hide();
            $(".fridge-items #tofu").remove();
            var sarahDot = $("#tofuModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#tofuModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#tofuModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#tofuModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#tofuModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#tofuModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#tofuModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#tofuModal .eat-all-btn").on("click", function () {
            $('#tofuModal').hide();
            $(".fridge-items #tofu").remove();
        });
         // Eat Some
         $("#tofuModal .eat-some-btn").on("click", function () {
             $('#tofuModal').hide();
         });
        // open item - update expiry
        $("#tofuModal .open-item-btn").on("click", function () {
            $(this).prop('disabled',true);
            $("#tofu-expiry").text("in 7 days");
        });

// salami
        // Throw 
        $("#salamiModal .throw-btn").on("click", function () {
            $('#salamiModal').hide();
            $(".fridge-items #salami").remove();
            var sarahDot = $("#salamiModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#salamiModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#salamiModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#salamiModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#salamiModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#salamiModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#salamiModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#salamiModal .eat-all-btn").on("click", function () {
            $('#salamiModal').hide();
            $(".fridge-items #salami").remove();
        });
         // Eat Some
         $("#salamiModal .eat-some-btn").on("click", function () {
             $('#salamiModal').hide();
         });
        // open item - update expiry
        $("#salamiModal .open-item-btn").on("click", function () {
            $(this).prop('disabled',true);
            $("#salami-expiry").text("in 15 days");
        });

// potato-salad
        // Throw 
        $("#potatosaladModal .throw-btn").on("click", function () {
            $('#potatosaladModal').hide();
            $(".fridge-items #potato-salad").remove();
            var sarahDot = $("#potatosaladModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#potatosaladModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#potatosaladModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#potatosaladModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#potatosaladModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#potatosaladModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#potatosaladModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#potatosaladModal .eat-all-btn").on("click", function () {
            $('#potatosaladModal').hide();
            $(".fridge-items #potato-salad").remove();
        });
         // Eat Some
         $("#potatosaladModal .eat-some-btn").on("click", function () {
             $('#potatosaladModal').hide();
         });


// ubereats-burger
        // Throw 
        $("#ubereatsModal .throw-btn").on("click", function () {
            $('#ubereatsModal').hide();
            $(".fridge-items #ubereats-burger").remove();
            var sarahDot = $("#ubereatsModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#ubereatsModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#ubereatsModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#ubereatsModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#ubereatsModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#ubereatsModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#ubereatsModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#ubereatsModal .eat-all-btn").on("click", function () {
            $('#ubereatsModal').hide();
            $(".fridge-items #ubereats-burger").remove();
        });
         // Eat Some
         $("#ubereatsModal .eat-some-btn").on("click", function () {
             $('#ubereatsModal').hide();
         });


// apple
        // Throw 
        $("#appleModal .throw-btn").on("click", function () {
            $('#appleModal').hide();
            $(".fridge-items #apple").remove();
            var sarahDot = $("#appleModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#appleModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#appleModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#appleModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#appleModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#appleModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#appleModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#appleModal .eat-all-btn").on("click", function () {
            $('#appleModal').hide();
            $(".fridge-items #apple").remove();
        });
         // Eat Some
         $("#appleModal .eat-some-btn").on("click", function () {
             $('#appleModal').hide();
         });
   
// mango
        // Throw 
        $("#mangoModal .throw-btn").on("click", function () {
            $('#mangoModal').hide();
            $(".fridge-items #mango").remove();
            var sarahDot = $("#mangoModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#mangoModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#mangoModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#mangoModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#mangoModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#mangoModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#mangoModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#mangoModal .eat-all-btn").on("click", function () {
            $('#mangoModal').hide();
            $(".fridge-items #mango").remove();
        });
         // Eat Some
         $("#mangoModal .eat-some-btn").on("click", function () {
             $('#mangoModal').hide();
         });
    
// kiwi
        // Throw 
        $("#kiwiModal .throw-btn").on("click", function () {
            $('#kiwiModal').hide();
            $(".fridge-items #kiwi").remove();
            var sarahDot = $("#kiwiModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#kiwiModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#kiwiModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#kiwiModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#kiwiModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#kiwiModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#kiwiModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#kiwiModal .eat-all-btn").on("click", function () {
            $('#kiwiModal').hide();
            $(".fridge-items #kiwi").remove();
        });
         // Eat Some
         $("#kiwiModal .eat-some-btn").on("click", function () {
             $('#kiwiModal').hide();
         });
        

// spinach
        // Throw 
        $("#spinachModal .throw-btn").on("click", function () {
            $('#spinachModal').hide();
            $(".fridge-items #spinach").remove();
            var sarahDot = $("#spinachModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#spinachModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#spinachModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#spinachModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#spinachModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#spinachModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#spinachModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#spinachModal .eat-all-btn").on("click", function () {
            $('#spinachModal').hide();
            $(".fridge-items #spinach").remove();
        });
         // Eat Some
         $("#spinachModal .eat-some-btn").on("click", function () {
             $('#spinachModal').hide();
         });
      

// carrot
        // Throw 
        $("#carrotModal .throw-btn").on("click", function () {
            $('#carrotModal').hide();
            $(".fridge-items #carrot").remove();
            var sarahDot = $("#carrotModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#carrotModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#carrotModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#carrotModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#carrotModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#carrotModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#carrotModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#carrotModal .eat-all-btn").on("click", function () {
            $('#carrotModal').hide();
            $(".fridge-items #carrot").remove();
        });
         // Eat Some
         $("#carrotModal .eat-some-btn").on("click", function () {
             $('#carrotModal').hide();
         });
    

// tomato
        // Throw 
        $("#tomatoModal .throw-btn").on("click", function () {
            $('#tomatoModal').hide();
            $(".fridge-items #tomato").remove();
            var sarahDot = $("#tomatoModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#tomatoModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#tomatoModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#tomatoModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#tomatoModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#tomatoModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#tomatoModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#tomatoModal .eat-all-btn").on("click", function () {
            $('#tomatoModal').hide();
            $(".fridge-items #tomato").remove();
        });
         // Eat Some
         $("#tomatoModal .eat-some-btn").on("click", function () {
             $('#tomatoModal').hide();
         });
     

// broccoli
        // Throw 
        $("#broccoliModal .throw-btn").on("click", function () {
            $('#broccoliModal').hide();
            $(".fridge-items #broccoli").remove();
            var sarahDot = $("#broccoliModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#broccoliModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#broccoliModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#broccoliModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#broccoliModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#broccoliModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#broccoliModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#broccoliModal .eat-all-btn").on("click", function () {
            $('#broccoliModal').hide();
            $(".fridge-items #broccoli").remove();
        });
         // Eat Some
         $("#broccoliModal .eat-some-btn").on("click", function () {
             $('#broccoliModal').hide();
         });
   
// lettuce
        // Throw 
        $("#lettuceModal .throw-btn").on("click", function () {
            $('#lettuceModal').hide();
            $(".fridge-items #lettuce").remove();
            var sarahDot = $("#lettuceModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#lettuceModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#lettuceModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#lettuceModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#lettuceModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#lettuceModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#lettuceModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#lettuceModal .eat-all-btn").on("click", function () {
            $('#lettuceModal').hide();
            $(".fridge-items #lettuce").remove();
        });
         // Eat Some
         $("#lettuceModal .eat-some-btn").on("click", function () {
             $('#lettuceModal').hide();
         });
       

// orange-juice
        // Throw 
        $("#orangejuiceModal .throw-btn").on("click", function () {
            $('#orangejuiceModal').hide();
            $(".fridge-items #orange-juice").remove();
            var sarahDot = $("#orangejuiceModal .item-modal-header div .sarah-own-dot").get();
            var janeDot = $("#orangejuiceModal .item-modal-header div .jane-own-dot").get();
            var bobDot = $("#orangejuiceModal .item-modal-header div .bob-own-dot").get();
             if ($(sarahDot).css('display') !== 'none') {
                 var clonedWaste = $("#orangejuiceModal .item-modal-header div div" ).clone();
                 SarahWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') !== 'none') {
             var clonedWaste = $("#orangejuiceModal .item-modal-header div div" ).clone();
             JaneWastedItems.append(clonedWaste);
            }else if ($(bobDot).css('display') !== 'none') {
             var clonedWaste = $("#orangejuiceModal .item-modal-header div div" ).clone();
             BobWastedItems.append(clonedWaste);
            }else if ($(janeDot).css('display') == 'none' && $(sarahDot).css('display') == 'none' && $(bobDot).css('display') == 'none') {
             var clonedWaste = $("#orangejuiceModal .item-modal-header div div" ).clone();
             HouseWastedItems.append(clonedWaste);
            }
        });
        // Eat All
        $("#orangejuiceModal .eat-all-btn").on("click", function () {
            $('#orangejuiceModal').hide();
            $(".fridge-items #orange-juice").remove();
        });
         // Eat Some
         $("#orangejuiceModal .eat-some-btn").on("click", function () {
             $('#orangejuiceModal').hide();
         });
    

});

