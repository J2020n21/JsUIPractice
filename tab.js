// Tab click function

// alert($('.tab-button').length);

// for(let i=0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//       openTab(i);
//     })
// }

// Tab function with Eventlistner
$('.list').click(function(e){
  openTab(e.target.dataset.btn);
})


function openTab(i){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
}


