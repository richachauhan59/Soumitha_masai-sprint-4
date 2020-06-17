window.addEventListener("load", function(){
    //alert("soumitha")

    var home = document.getElementById("home")
    home.addEventListener("click", gotoHome)

    var detail = document.getElementById("detail")
    detail.addEventListener("click", gotoDetail)

    var subscription = document.getElementById("subscription")
    subscription.addEventListener("click", gotoSubscription)

    var sign = document.getElementById("sign")
    sign.addEventListener("click", gotoSign)

})

var carSubscription = [
    ["Tigo (45K kms)", "" , "12,999/mo"],
    ["Swift MT (45K kms)", "" , "13,499/mo"],
    ["Freestyle (45K kms)", "" , "13,499/mo"],
    ["Tata Tiago" , "" , "13,499/mo"],
    ["Swift AT (45K kms)" , "" , "14,999/mo"],
    ["Baleno (45k kms)" ,"", "15,999/mo"],
    ["Volkswagen Polo (Petrol)", "" , "16,499/mo"],
    ["120 (45K kms)", "" ,"16,499/mo"],
    ["Maruti Swift" , "" , "17,499/mo"],
    ["Ford FreeStyle" , "" , "17,499/mo"],
    ["Brezza", "" , "18,499/mo"],
    ["Maruti Swift AT" , "" , "18,499/mo"],
    ["Nexon", "" , "18,999/mo"],
    ["Baleno" , "" , "19,499/mo"],
    ["Tata Nexon", "" , "19,499/mo"],
    ["Nexon AT", "" , "20,499/mo"],
    ["Hyundai i20 Elite" , "" , "20,499/mo"],
    ["Nexon AT (45K kms)" , "" , "20,499/mo"],
    ["Hyundai Creta", "" , "22,499/mo"],
    ["Creta (45K kms)" , "" , "22,499/mo"],
    ["Verna" , "" , "23,499/mo"],
    ["Kicks (Petrol)", "" , "23,499/mo"],
    ["Hexa" , "" , "26,499/mo"],
    ["Mahindra XUV", "" , "27,499/mo"],
    ["XUV 500(45K kms)" , "" , "27,499/mo"],
    ["Mahindra Scorpio", "" , "28,999/mo"],     
    ["Hyundai Creta AT" , "" , "32,499/mo"],
    ["Mahindra XUV AT" , "" , "35,499/mo"]
]

var carDetails = [
    ["Tigo (45K kms)", "" , "70"],
    ["Swift MT (45K kms)", "" , "80"],
    ["Freestyle (45K kms)", "" , "80"],
    ["Tata Tiago" , "" , "80"],
    ["Swift AT (45K kms)" , "" , "100"],
    ["Baleno (45k kms)" ,"", "130"],
    ["Volkswagen Polo (Petrol)", "" , "150"],
    ["120 (45K kms)", "" ,"150"],
    ["Maruti Swift" , "" , "180"],
    ["Ford FreeStyle" , "" , "180"],
    ["Brezza", "" , "200"],
    ["Maruti Swift AT" , "" , "200"],
    ["Nexon", "" , "200"],
    ["Baleno" , "" , "220"],
    ["Tata Nexon", "" , "220"],
    ["Nexon AT", "" , "250"],
    ["Hyundai i20 Elite" , "" , "250"],
    ["Nexon AT (45K kms)" , "" , "250"],
    ["Hyundai Creta", "" , "280"],
    ["Creta (45K kms)" , "" , "280"],
    ["Verna" , "" , "300"],
    ["Kicks (Petrol)", "" , "300"],
    ["Hexa" , "" , "320"],
    ["Mahindra XUV", "" , "320"],
    ["XUV 500(45K kms)" , "" , "320"],
    ["Mahindra Scorpio", "" , "350"],     
    ["Hyundai Creta AT" , "" , "370"],
    ["Mahindra XUV AT" , "" , "400"]
]

function gotoHome(){
    event.preventDefault()
    location.href = "index.html"
}

function gotoDetail(){
    var data = JSON.stringify(carDetails)

    localStorage.setItem("carDetails" , data)

    event.preventDefault()
    location.href = "details.html"
}

function gotoSubscription(){
    var data = JSON.stringify(carSubscription)

    localStorage.setItem("carSubscription" , data)

    event.preventDefault()
    location.href = "subscription.html"
}

function gotoSign(){
    event.preventDefault()
    location.href = "sign.html"
}