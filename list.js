var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

var btn_click=0

function addCard(data){
    data.forEach(function(data){
        var templet =`
        <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data.title}</h5>
        <p>Price : ${data.price}</p>
        </div>
        `
        $('.row').append(templet);
        })
}



//Make products cards
products.forEach(function(data,n){
    //basic 3 cards
    var templet =`
    <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[n].title}</h5>
    <p>Price : ${products[n].price}</p>
    </div>
    `
    $('.row').append(templet);
})


//show more card
$('#more').click(function(){
    if(btn_click == 0){
    btn_click++;
    $.get('https://codingapple1.github.io/js/more1.json')
    .done(function(data){
        addCard(data);
        })
    }
    else if(btn_click == 1){
        btn_click++;
        //show more card
        $.get('https://codingapple1.github.io/js/more2.json')
        .done(function(data){
            addCard(data);
        })
    }
    else if(btn_click == 2){
        $('#more').addClass('hidden');
    }
})

