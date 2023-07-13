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

//상품선택

var pants=[28, 30, 32, 34];
var shirts=['White','Grey','Black'];

$('#goods').on('input',function(e){
  var value = e.target.value;
  console.log(value);

  if(value == 'shirt'){
    $('#select').removeClass('hidden');
    $('#select').html('');
    
    shirts.forEach(function(data){
      $('#select').append(`<option>${data}</option>`);
    })
  }
  else if(value =='pants'){
    $('#select').removeClass('hidden');
    $('#select').html('');

    pants.forEach(function(data){
      $('#select').append(`<option>${data}</option>`);
    })
  }
  else{
    $('#select').addClass('hidden');
  }
})

//GET request
$.get('https://codingapple1.github.io/hello.txt').then(function(data){
  console.log(data);
});

$.get('https://codingapple1.github.io/price.json')
.done(function(data){
  //console.log(data);
  console.log(data.price);
})
.fail(function(err){
  console.log(err);
})

