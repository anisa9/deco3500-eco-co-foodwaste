$(document).ready(function() {
	
	$(".notify-audio")[0].pause();

    $(function(){

		// inspiration : //https://codepen.io/pekul/pen/qwqVOm
		//select items to expiry modal
		$(".item").on("click", function () {
			 $(this).each(function () {
			 	var name = $(this).children().children("p").text();
				 //var remove = "<button class='remove'> X </button>";
			// 	var pic = $(this).children('img');

			 	var clonedItem = $(this).clone().addClass("addedItem");
			 	$(this).find("div").css({"background": "#e8e8e8"}); 

				 //$("#list-item").append(clonedItem );
				 $('.expiry-container').append(clonedItem);
				
				 $('.expiry-container .fruitItems').addClass("fruit-expiry");
				$(".fruit-expiry").appendTo($(".auto-expiry"));

				$('.expiry-container .dairyItems').addClass("dairy-expiry");
				$(".dairy-expiry").appendTo($(".manual-expiry"));

				$('.expiry-container .meatItems').addClass("meat-expiry");
				$(".meat-expiry").appendTo($(".manual-expiry"));
				
				$('.expiry-container .otherItems').addClass("other-expiry");
				$(".other-expiry").appendTo($(".manual-expiry"));

				$('.expiry-container .leftoverItems').addClass("leftover-expiry");
				$(".leftover-expiry").appendTo($(".auto-expiry"));

				$('.expiry-container .vegieItems').addClass("vegie-expiry");
				$(".vegie-expiry").appendTo($(".auto-expiry"));
			

				 $(".remove").on("click", function () {
					$(clonedItem).remove();
				});

			// show voice inputs on expiry modal


				
				
			//manual
				// yoghurt
				$("#expiryModal .yoghurt-voice-container").show();
				$(".yoghurt-voice-container").appendTo($(".manual-expiry #yoghurt"));				
				// sour cream
				$("#expiryModal .sour-cream-voice-container").show();
				$(".sour-cream-voice-container").appendTo($(".manual-expiry #sour-cream"));				
				// fetta
				$("#expiryModal .fetta-voice-container").show();
				$(".fetta-voice-container").appendTo($(".manual-expiry #fetta"));				
				// pork
				$("#expiryModal .pork-voice-container").show();
				$(".pork-voice-container").appendTo($(".manual-expiry #pork"));			
				// ham
				$("#expiryModal .ham-voice-container").show();
				$(".ham-voice-container").appendTo($(".manual-expiry #ham"));			
				// turkey
				$("#expiryModal .turkey-voice-container").show();
				$(".turkey-voice-container").appendTo($(".manual-expiry #turkey"));	

				// cranberry-juice
				$("#expiryModal .cranberry-juice-voice-container").show();
				$(".cranberry-juice-voice-container").appendTo($(".manual-expiry #cranberry-juice"));				
				// mayo
				$("#expiryModal .mayo-voice-container").show();
				$(".mayo-voice-container").appendTo($(".manual-expiry #mayo"));				
			
			//auto

				// banana
				$("#expiryModal .banana-voice-container").show();
				$(".banana-voice-container").appendTo($(".auto-expiry #banana"));
				// pear
				$("#expiryModal .pear-voice-container").show();
				$(".pear-voice-container").appendTo($(".auto-expiry #pear"));
				// orange
				$("#expiryModal .orange-voice-container").show();
				$(".orange-voice-container").appendTo($(".auto-expiry #orange"));
				// blueberry
				$("#expiryModal .blueberry-voice-container").show();
				$(".blueberry-voice-container").appendTo($(".auto-expiry #blueberry"));
				
				// zucchini
				$("#expiryModal .zucchini-voice-container").show();
				$(".zucchini-voice-container").appendTo($(".auto-expiry #zucchini"));
				// squash
				$("#expiryModal .squash-voice-container").show();
				$(".squash-voice-container").appendTo($(".auto-expiry #squash"));
				// buk choy
				$("#expiryModal .buk-choy-voice-container").show();
				$(".buk-choy-voice-container").appendTo($(".auto-expiry #buk-choy"));
				// turnip
				$("#expiryModal .turnip-voice-container").show();
				$(".turnip-voice-container").appendTo($(".auto-expiry #turnip"));

				// rice noodles
				$("#expiryModal .rice-noodles-voice-container").show();
				$(".rice-noodles-voice-container").appendTo($(".auto-expiry #rice-noodles"));
				// cake
				$("#expiryModal .cake-voice-container").show();
				$(".cake-voice-container").appendTo($(".auto-expiry #cake"));				
				// taco
				$("#expiryModal .taco-voice-container").show();
				$(".taco-voice-container").appendTo($(".auto-expiry #taco"));				
				// chicken noodles
				$("#expiryModal .chicken-noodles-voice-container").show();
				$(".chicken-noodles-voice-container").appendTo($(".auto-expiry #chicken-noodles"));				
				// stir fry
				$("#expiryModal .stir-fry-voice-container").show();
				$(".stir-fry-voice-container").appendTo($(".auto-expiry #stir-fry"));
				
				$('.notification ').append(  name   + ",");



			});
		
			 
		
		
			

   // add items to basket modal & mark mine
   $('#expiry-next-btn').on('click', function addToExpiryModal(){
			
	var fruitSelected = $(".auto-expiry .fruitItems").get();
	var vegieSelected = $(".auto-expiry .vegieItems").get();
	var leftoverSelected = $(".auto-expiry .leftoverItems").get();
	var meatSelected = $(".manual-expiry .meatItems").get();
	var dairySelected = $(".manual-expiry .dairyItems").get();
	var otherSelected = $(".manual-expiry .otherItems").get();

	$('.voice-container').hide();

	$('#list-item').append(fruitSelected);
	$('#list-item').append(vegieSelected);
	$('#list-item').append(leftoverSelected);
	$('#list-item').append(meatSelected);
	$('#list-item').append(dairySelected);
	$('#list-item').append(otherSelected);

	//mark ownership 
	$("#basketModal #yoghurt").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#yoghurt .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#yoghurt .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#yoghurt .bob-own-dot-fridge").show();
		}
	 });  				 
	 $("#basketModal #sour-cream").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#sour-cream .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#sour-cream .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#sour-cream .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #fetta").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#fetta .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#fetta .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#fetta .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #pork").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#pork .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#pork .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#pork .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #ham").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#ham .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#ham .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#ham .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #turkey").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#turkey .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#turkey .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#turkey .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #rice-noodles").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#rice-noodles .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#rice-noodles.jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#rice-noodles .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #banana").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#banana .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#banana .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#banana .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #blueberry").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#blueberry .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#blueberry .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#blueberry .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #pear").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#pear .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#pear .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#pear .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #orange").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#orange .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#orange .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#orange .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #zucchini").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#zucchini .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#zucchini .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#zucchini .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #squash").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#squash .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#squash .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#squash .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #buk-choy").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#buk-choy .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#buk-choy .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#buk-choy .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #turnip").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#turnip .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#turnip .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#turnip .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #cranberry-juice").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#cranberry-juice .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#cranberry-juice .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#cranberry-juice .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #mayo").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#mayo .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#mayo .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#mayo .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #cake").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#cake .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#cake .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#cake .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #chicken-noodles").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#chicken-noodles .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#chicken-noodles .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#chicken-noodles .bob-own-dot-fridge").show();
		}
	 });   $("#basketModal #taco").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#taco .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#taco .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#taco .bob-own-dot-fridge").show();
		}
	 });  
	 $("#basketModal #stir-fry").on('click', function addSarah(){ 		
		if($('#SarahUser').is(':checked')) {
			$("#stir-fry .sarah-own-dot-fridge").show();
		} else if($('#JaneUser').is(':checked')) {
			$("#stir-fry .jane-own-dot-fridge").show();
		} else if($('#BobUser').is(':checked')) {
			$("#stir-fry .bob-own-dot-fridge").show();
		}
	 });
});

				
			});

			function closeNofication() {
				$('.notification').slideToggle('fast');
			   
			  } 

			  $("#add-to-fridge-btn").on("click", function () {
				
				$('.voice-container').hide();

				$('#list-item .fruitItems').addClass("selected-fruit");
				$(".selected-fruit img").addClass("green");			// add green border
				$(".selected-fruit").appendTo($(".fruit-category .grid-container"));

				$('#list-item .dairyItems').addClass("selected-dairy");
				$(".selected-dairy img").addClass("green");			// add green border
				$(".selected-dairy").appendTo($(".dairy-category .grid-container"));

				$('#list-item .meatItems').addClass("selected-meat");
				$(".selected-meat img").addClass("green");			// add green border
				$(".selected-meat").appendTo($(".meat-category .grid-container"));

				$('#list-item .vegieItems').addClass("selected-vegie");
				$(".selected-vegie img").addClass("green");			// add green border
				$(".selected-vegie").appendTo($(".vegies-category .grid-container"));

				$('#list-item .leftoverItems').addClass("selected-leftover");
				$(".selected-leftover img").addClass("green");			// add green border
				$(".selected-leftover").appendTo($(".leftovers-category .grid-container"));

				$('#list-item .otherItems').addClass("selected-other");
				$(".selected-other img").addClass("green");			// add green border
				$(".selected-other").appendTo($(".other-category .grid-container"));

				
				
				// add notification label for adding items
				if($('#SarahUser').is(':checked')) {
						$('.notification ').prepend('Sarah added: ');
					$('.notification').slideDown('fast');
					$(".notify-audio")[0].play();
					window.setTimeout(closeNofication,5000);	
				} else if($('#JaneUser').is(':checked')) {
					$('.notification').prepend('Jane added: ');
					$('.notification').slideDown('fast');
					$(".notify-audio")[0].play();
					window.setTimeout(closeNofication,5000);
				} else if($('#BobUser').is(':checked')) {
					$('.notification').prepend('Bob  added: ');
					$('.notification').slideDown('fast');
					window.setTimeout(closeNofication,5000);
					$(".notify-audio")[0].play();
				}

			  });
		

 // close notification 
 function closeJane() {
	$('.notification-jane').slideToggle(6000);

} 
// play notification audio
function playAudio() {
	$(".notify-audio")[0].play();
}


// show notification - jane cream
$('.notification-jane').delay(30000).slideDown('slow');
setTimeout(playAudio, 30000);			
window.setTimeout(closeJane,6000);

				

		});
	

		// open add modal when click add btn on fridge page
		$('.add-btn').on('click', function openModal(){
			$('#add-modal').show();
		});
        // close add modal
		$('#add-modal .closeBtn').on('click', function closeModal(){
			$('#add-modal').hide();
		});


		//open basket modal
		$('#expiry-next-btn').on('click', function openModal2(){
			$('#basketModal').show();
		});
		
		//  open open expiry  modal after selected items
		$('.add-to-basket').on('click', function openModal(){
			$('#expiryModal').show();
		});
	 // close basket modal
 		$('#basketModal .closeBtn').on('click', function closeModal(){
			
			$('#basketModal').hide();
 		});
		//back to fridge
		 $('#add-to-fridge-btn').on('click', function closeModal(){
			$('#add-modal').hide();
			$('#expiryModal').hide();
			$('#basketModal').hide();
		});

			 // close basket modal
			 $('#expiryModal .closeBtn').on('click', function closeModal(){
				$('#expiryModal').hide();
			});


		 // leftover modal


//  open open leftover modal 
		$('.add-leftover-btn').on('click', function openModal(){
			$('#leftoverModal').show();
		});
	 // close leftover modal
 		$('#leftoverModal .closeBtn').on('click', function closeModal(){
 			$('#leftoverModal').hide();
 		});

		
//---------------------------
		 // open auto expiry info modal - toggle
		 $('.auto-info').on('click', function openModal(){
			$('#autoExpiryInfoModal').toggle();
		}); 

		// open manual expiry info modal - toggle
		$('.manual-info').on('click', function openModal(){
			$('#manualExpiryInfoModal').toggle();
		}); 

	// open  key info modal - toggle
	$('.key-info').on('click', function openModal(){
		$('.keyModal').toggle();
	}); 
// close key modal
$('.keyModal .closeBtn').on('click', function closeModal(){
	$('.keyModal').hide();
});


	
		 // foodprint modal


//  open open foodprint modal 
$('.foodprint-btn').on('click', function openModal(){
	$('#foodprintModal').show();
	$(this).css({"background": "#5fb483"}); 
	$(".fridge-btn").css({"background": "#5BC295"}); 


});
// close foodprint modal
 $('#foodprintModal .closeBtn').on('click', function closeModal(){
	 $('#foodprintModal').hide();
 });



		  // add leftovers
		  $(".add-leftover").click(function(){
			var leftoverName = $(".leftover-input").val();
			
			if(leftoverName =="chicken noodles" || leftoverName =="Chicken noodles"  || leftoverName =="Chicken Noodles" || 
			leftoverName =="chicken noodle" || leftoverName =="Chicken Noodle" || leftoverName =="Chicken noodle"){
				$('.chicken-noodles').show();
				$('.chicken-noodles').appendTo($(".leftovers-category .grid-container2"));
				$('#leftoverModal').hide();
			} 
			 if  (leftoverName =="Cake" || leftoverName =="cake"){
				$('.cake').show();
				$('.cake').appendTo($(".leftovers-category .grid-container2"));
				$('#leftoverModal').hide();
			} 
			
			if  (leftoverName =="taco" || leftoverName =="Taco"){
				$('.taco').show();
				$('.taco').appendTo($(".leftovers-category .grid-container2"));
				$('#leftoverModal').hide();
			} 
			 if  (leftoverName =="stir fry" || leftoverName =="Stir fry"  || leftoverName =="Stir Fry" ){
				$('.stir-fry').show();
				$('.stir-fry').appendTo($(".leftovers-category .grid-container2"));
				$('#leftoverModal').hide();
			} 
		  });


// expiry date voice input
// HTML speech recognition api
//https://www.labnol.org/software/add-speech-recognition-to-website/19989/
		// pear
		document.getElementById ("pear-voice").addEventListener ("click", pearVoiceInput, false);
		  function pearVoiceInput() {
			if (window.hasOwnProperty('webkitSpeechRecognition')) {
			  var recognition = new webkitSpeechRecognition();			
			  recognition.start();
			  recognition.onresult = function (e) {
				document.getElementById('pear-text').value = e.results[0][0].transcript;
				recognition.stop();
			  };
			  recognition.onerror = function(e) {
				recognition.stop();
			  }
			}
		  }


		// orange
		document.getElementById ("orange-voice").addEventListener ("click", OrangeVoiceInput, false);
		function OrangeVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('orange-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// blueberry
		document.getElementById ("blueberry-voice").addEventListener ("click", BlueberryVoiceInput, false);
		function BlueberryVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('blueberry-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// banana
		document.getElementById ("banana-voice").addEventListener ("click", BananaVoiceInput, false);
		function BananaVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('banana-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// zucchini
		document.getElementById ("zucchini-voice").addEventListener ("click", zucchiniVoiceInput, false);
		function zucchiniVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('zucchini-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// squash
		document.getElementById ("squash-voice").addEventListener ("click", squashVoiceInput, false);
		function squashVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('squash-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// buk choy
		document.getElementById ("buk-choy-voice").addEventListener ("click", bukVoiceInput, false);
		function bukVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('buk-choy-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// turnip
		document.getElementById ("turnip-voice").addEventListener ("click", turnipVoiceInput, false);
		function turnipVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('turnip-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// cranberry-juice
		document.getElementById ("cranberry-juice-voice").addEventListener ("click", cranberryjuiceVoiceInput, false);
		function cranberryjuiceVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('cranberry-juice-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// mayo
		document.getElementById ("mayo-voice").addEventListener ("click", mayoVoiceInput, false);
		function mayoVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('mayo-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// yoghurt
		document.getElementById ("yoghurt-voice").addEventListener ("click", yoghurtVoiceInput, false);
		function yoghurtVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('yoghurt-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// sour-cream
		document.getElementById ("sour-cream-voice").addEventListener ("click", sourcreamVoiceInput, false);
		function sourcreamVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('sour-cream-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// fetta
		document.getElementById ("fetta-voice").addEventListener ("click", fettaVoiceInput, false);
		function fettaVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('fetta-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// pork
		document.getElementById ("pork-voice").addEventListener ("click", porkVoiceInput, false);
		function porkVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('pork-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// ham
		document.getElementById ("ham-voice").addEventListener ("click", hamVoiceInput, false);
		function hamVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('ham-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// turkey
		document.getElementById ("turkey-voice").addEventListener ("click", turkeyVoiceInput, false);
		function turkeyVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('turkey-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}

		// rice-noodles
		document.getElementById ("rice-noodles-voice").addEventListener ("click", riceVoiceInput, false);
		function riceVoiceInput() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();			
			recognition.start();
			recognition.onresult = function (e) {
			document.getElementById('rice-noodles-text').value = e.results[0][0].transcript;
			recognition.stop();
			};
			recognition.onerror = function(e) {
			recognition.stop();
			}
		}
		}
	// cake
	document.getElementById ("cake-voice").addEventListener ("click", cakeVoiceInput, false);
	function cakeVoiceInput() {
	if (window.hasOwnProperty('webkitSpeechRecognition')) {
		var recognition = new webkitSpeechRecognition();			
		recognition.start();
		recognition.onresult = function (e) {
		document.getElementById('cake-text').value = e.results[0][0].transcript;
		recognition.stop();
		};
		recognition.onerror = function(e) {
		recognition.stop();
		}
	}
	}
	// chicken-noodles
	document.getElementById ("chicken-noodles-voice").addEventListener ("click", chickennoodlesVoiceInput, false);
	function chickennoodlesVoiceInput() {
	if (window.hasOwnProperty('webkitSpeechRecognition')) {
		var recognition = new webkitSpeechRecognition();			
		recognition.start();
		recognition.onresult = function (e) {
		document.getElementById('chicken-noodles-text').value = e.results[0][0].transcript;
		recognition.stop();
		};
		recognition.onerror = function(e) {
		recognition.stop();
		}
	}
	}
	// taco
	document.getElementById ("taco-voice").addEventListener ("click", tacoVoiceInput, false);
	function tacoVoiceInput() {
	if (window.hasOwnProperty('webkitSpeechRecognition')) {
		var recognition = new webkitSpeechRecognition();			
		recognition.start();
		recognition.onresult = function (e) {
		document.getElementById('taco-text').value = e.results[0][0].transcript;
		recognition.stop();
		};
		recognition.onerror = function(e) {
		recognition.stop();
		}
	}
	}
	// stir-fry
	document.getElementById ("stir-fry-voice").addEventListener ("click", stirVoiceInput, false);
	function stirVoiceInput() {
	if (window.hasOwnProperty('webkitSpeechRecognition')) {
		var recognition = new webkitSpeechRecognition();			
		recognition.start();
		recognition.onresult = function (e) {
		document.getElementById('stir-fry-text').value = e.results[0][0].transcript;
		recognition.stop();
		};
		recognition.onerror = function(e) {
		recognition.stop();
		}
	}
	}


	});

  