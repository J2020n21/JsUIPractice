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
$('#goods').on('input',function(e){
  var value = e.target.value;
  console.log(value);

  if(value == 'shirt'){
    $('#select').removeClass('hidden');
    $('#select').html('');
    var color = ['Black','White'];
    var Templet = `<option>${color[0]}</option>
                    <option>${color[1]}</option>`
    $('#select').append(Templet);
  }
  else if(value =='pants'){
    $('#select').removeClass('hidden');
    $('#select').html('');
    var pantsSizes = [28,30]
    var Templet= `<option>${pantsSizes[0]}</option>
                  <option>${pantsSizes[1]}</option>`
    $('#select').append(Templet);
  }
  else{
    $('#select').addClass('hidden');
  }
})

