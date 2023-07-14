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

//sort
$('#sortPrice').click(function(){
    products.sort((a,b)=>{
        return a.price - b.price;
    });

    $('.row').html('');
    addCard(products);
})

$('#sortAlpha').click(function(){

    products.sort((a,b)=>{
        if(a.title < b.title){return 1;} //return a to the right
        else{return -1;} //return b to the right
    });
    console.log(products);

    $('.row').html('');
    addCard(products);
})

$('#filterDown6').click(function(){
    var under6 = products.filter((a)=>{
        return a.price <= 60000;
    });

    $('.row').html('');
    addCard(under6);
})

// 응용1. 가나다순 정렬버튼?

// 응용2. <input>을 이용해 유저가 직접 가격을 입력해서 필터하는 기능?

// 응용3. 원래 순서대로 되돌리기 버튼과 기능을 만들고 싶으면?