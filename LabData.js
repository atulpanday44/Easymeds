

  var labtestData = [
    {
      name: "Covid-19 RTPCR (CoronaVirus SARS-CoV2)",
      avai :"Available at 1 certified lab",
      price: 700,
    },
    {
      name: "Complete Bolld Count (CBC)",
      avai :"Available at 1 certified lab",
      price: 299,
    },
    {
      name: "Fasting Blood Sugrt(FBS)",
      avai :"Available at 1 certified lab",
      price: 199,
    },
    {
      name: "Post Prandial Blood Sugrt(PPBS)",
      avai :"Available at 1 certified lab",
      price: 199,
    },
    {
      name: "Malaraial Parasite",
      avai :"Available at 1 certified lab",
      price: 130,
    },
    {
      name: "HbA1b-Glycosylated-Hemoglobin-86",
      avai :"Available at 1 certified lab",
      price: 399,
    },
    {
      name: "Uric Acid",
      avai :"Available at 1 certified lab",
      price: 149,
    },
    {
      name: "Total Cholesterol",
      avai :"Available at 1 certified lab",
      price: 99,
    },
    {
      name: "Iron Study",
      avai :"Available at 1 certified lab",
      price: 99,
    },
    {
      name: "Blood Group",
      avai :"Available at 1 certified lab",
      price: 199,
    },
    {
      name: "Vitamin B-12",
      avai :"Available at 1 certified lab",
      price: 499,
    },
    {
      name: "Vitamin D Total",
      avai :"Available at 1 certified lab",
      price: 499,
    },
    {
      name: "Calcium",
      avai :"Available at 1 certified lab",
      price: 99,
    },
    
  ];

  localStorage.setItem("labData", JSON.stringify(labtestData));

  var LabTests = JSON.parse(localStorage.getItem("labData"))
   
       LabTests.map(function (data){
           var div = document.createElement("div")
           div.setAttribute("id","box")
          
           var div2 = document.createElement("div")
           div2.setAttribute("id","text");
           var image = document.createElement("img");
           image.setAttribute("src","https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg");
           image.style.height="30%"
           image.style.marginRight="20px"
           var name = document.createElement("h4");
           name.textContent = data.name;
           name.style.fontWeight="650"
           var p1=document.createElement("p");
           p1.textContent = data.avai;
           var p2 =document.createElement("p");
           p2.textContent = "Rs." + data.price;
           div2.append(name,p1,p2)
           var btn = document.createElement("button")
           btn.textContent = "Select";
           btn.setAttribute("id","bttn");
           btn.addEventListener("click",function(){
               addToCart(data);
           })
           div.append(image,div2,btn);
           document.querySelector("#labtest").append(div);
        })
    
        function cart(data){
        function addToCart(data) {
        console.log(data, "data");
        cartArr.push(data);
       localStorage.setItem("CartItems", JSON.stringify(cartArr));
       alert("added successfully");
        }
    }