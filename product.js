var productdata=[
    {
    image: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
    product: "Skin Care",
    offer: "Upto 50% off",
},
{
    image: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
    product: "Diabetic Care",
    offer: "Upto 30% off",
},
{
    image: "https://5.imimg.com/data5/SELLER/Default/2020/8/LU/JP/KI/6926823/110-ml-dettol-antiseptic-liquid-500x500.jpg",
    product: "Health Condition",
    offer: "Upto 45% off",
},
{
    image: "https://cdn.shopify.com/s/files/1/0339/7389/5303/products/post-workout-tangerine-clementine-natural_704x.jpg?v=1610331096",
    product: "Fitness & Supplements",
    offer: "Upto 20% off",
},
{
    image: "https://www.rd.com/wp-content/uploads/2013/09/01-suja-healthy-foods-sl.jpg",
    product: "Health Food and Drinks",
    offer: "Upto 60% off",
},
{
    image: "https://5.imimg.com/data5/SH/JR/MY-33625657/weight-gain-oil-250x250.jpeg",
    product: "Ayurvedic Care",
    offer: "Upto 50% off",
},
{
    image: "https://image.shutterstock.com/image-photo/sterile-dressing-pack-other-medical-260nw-1031959003.jpg",
    product: "Surgicals and Dressings",
    offer: "Upto 50% off",
},
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16OPL1VLQtXi3BmqyrQvjhwZNHbPnxpETiQ&usqp=CAU",
    product: "Elderly Care",
    offer: "Upto 60% off",
},
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlw0CpQ1ol5JElzogCxVm5en9T_-jnTqBiWA&usqp=CAU",
    product: "Home Care",
    offer: "Upto 20% off",
},
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9JxWPRhR6x7VeytsJ3GkQdmR1QP7_YRXsA&usqp=CAU",
    product: "Personal Care",
    offer: "Upto 40% off",
},
{
    image: "https://m.media-amazon.com/images/G/31/amazonservices/Covid/CovidEssentials-PageBanner.png",
    product: "Covid Essentials",
    offer: "Upto 70% off",
},
{
    image: "https://5.imimg.com/data5/XY/QD/MY-7790175/10-kg-pet-food-250x250.jpg",
    product: "Pet Care",
    offer: "Upto 50% off",
},
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxnvqm5OSfhanXSS5vKMbv5bO5hwx2Hsp5tv2kwVB9Q0UI7XWzATsf5a6OlKr2w1Ioqw&usqp=CAU",
    product: "Mother and Baby Care",
    offer: "Upto 40% off",
},
]

localStorage.setItem("product",JSON.stringify(productdata));

var data=JSON.parse(localStorage.getItem("product"));

data.map(function(elem){
    var division= document.createElement("div");
    division.style.boxShadow= "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
    division.setAttribute("class","box")

    var image=document.createElement("img");
    image.setAttribute("src",elem.image);
    image.style.width="70%";
    image.style.height="60%";
    image.style.marginTop="25px";
    image.style.marginLeft="10px";


    var para=document.createElement("p");
    para.textContent=elem.product;
    if(para.textContent=="Skin Care"){
        division.addEventListener("click",function(){
            window.location.href="innerpage.html";
        })
    }
    para.style.paddingTop="15px"

    var offer= document.createElement("p");
    offer.textContent= elem.offer;
    offer.style.color="grey";
    offer.style.paddingTop="15px"

    division.append(image,para,offer);
    document.querySelector("#bigbox").append(division);
})