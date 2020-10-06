// document.addEventListener("DOMContentLoaded", function(){
//     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#openModal"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#openModal').style.marginLeft = scrollbar;
//     });
//     document.querySelector('[href="#close"]').addEventListener('click',function(){
//       document.body.style.overflow = 'visible';
//       document.querySelector('#openModal').style.marginLeft = '0px';
//     });
// });

// document.addEventListener("DOMContentLoaded", function(){
//     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#openModal2"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#openModal2').style.marginLeft = scrollbar;
//     });
//     document.querySelector('[href="#close2"]').addEventListener('click',function(){
//       document.body.style.overflow = 'visible';
//       document.querySelector('#openModal2').style.marginLeft = '0px';
//     });
// });

// document.addEventListener("DOMContentLoaded", function(){
//     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#openModal3"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#openModal3').style.marginLeft = scrollbar;
//     });
//     document.querySelector('[href="#close3"]').addEventListener('click',function(){
//       document.body.style.overflow = 'visible';
//       document.querySelector('#openModal3').style.marginLeft = '0px';
//     });
// });

// document.addEventListener("DOMContentLoaded", function(){
//     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#openModal4"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#openModal4').style.marginLeft = scrollbar;
//     });
//     document.querySelector('[href="#close4"]').addEventListener('click',function(){
//       document.body.style.overflow = 'visible';
//       document.querySelector('#openModal4').style.marginLeft = '0px';
//     });
// });

$(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal-open").on('click', function(e){
		console.log(e);
		showModal('#modal1');
 });
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('modal-open')))
		) {
			hideModals();
		}
	});
	
});