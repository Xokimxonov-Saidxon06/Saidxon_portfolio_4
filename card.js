var cardArray = [
    {
        id:1,
        productName: "Burger Dreams",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:9.20,
        count:1,
        img: './img/burgers/b-1.png'

    },
    {
        id:2,
        productName: "Burger Dreams",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:9.20,
        count:1,
        img: './img/burgers/b-2.png'

    },
    {
        id:3,
        productName: "Burger Dreams",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:9.20,
        count:1,
        img: './img/burgers/b-3.png'
    
    },
    {
        id:4,
        productName: "Burger Dreams",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:9.20,
        count:1,
        img: './img/burgers/b-4.png'
    
    },
    {
        id:5,
        productName: "Burger Dreams",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:9.20,
        count:1,
        img: './img/burgers/b-5.png'
    
    },
    {
        id:6,
        productName: "Burger Dreams",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:9.20,
        count:1,
        img: './img/burgers/b-6.png'
    
    },
];
var cards = []

function CardMap(){
    let cardHtml = cardArray.map((item,index)=>`
         <div class="card-item">
                <img src=${item.img} alt="no img">
                <div class="item-text">
                    <h4>${item.productName}</h4>
                    <p>${item.description}</p>
                    <button class="mt-2">${item.count}</button>
                    <button class="btn-active" onclick = "AddCard(${item.id})"> Add to card </button>
                </div>
                <div class="price">
                    ${item.price} USD
                </div>
        </div>

    `)
    $('.card-groups').html(cardHtml)
}
CardMap()

function AddCard(id){
    var CardLength = cards.length + 1
    const oneCard = cardArray.filter((item)=>{
        if(item.id === id) {
            return item
        }
    })
    cards.push(...oneCard)
    $(".sale-card").css("display","block")
    $(".mahsulot-soni").html(CardLength)
}
function AddModal(){
var tableCard = cards.map((i,index)=>`
<tr>
<td>${index + 1}</td>
<td>${i.productName}</td>
<td>
<img class= "m-img" src=${i.img}>
</td>
<td>${i.price}</td>
<td><button class="delete" onclick=" Delete(${i.id})">Delete</button></td>
</tr>
`
)
let date = new Date();
let d = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
var summa = 0;
let pricen = cards.filter((item)=>{
    return summa = summa + parseInt(item.price)
})
$(".price-span").html(`$${summa}`)
$(".date-span").html(d);
$('.count-span').html(cards.length)
$(".tbody").html(tableCard);
    $(".modal-block").toggleClass("blocK");
    $(".sale-card").css("display","none")
}
function closeModal(){
    $(".modal-block").toggleClass("blocK");
    $(".sale-card").css("display","block")
}
function openLink(){
    $("#openm").toggleClass("transform");
}
function clearModal() {
    cards  = []
    $(".modal-block").removeClass("blocK");
}
function Checkout(){
    alert("Mahsulot sotildi")
    cards  = []
    $(".modal-block").removeClass("blocK");
}
function Delete(){
    
}


