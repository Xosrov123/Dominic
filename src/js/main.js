{
  let sagbtn = document.getElementById("sagbtn");
  let solbtn = document.getElementById("solbtn");
  let mainboxcontent = document.querySelector(".main-box-content");

  solbtn.addEventListener("click", function (e) {
    mainboxcontent.classList.add("main-box-contentcopy");
  });
  sagbtn.addEventListener("click", function (e) {
    mainboxcontent.classList.remove("main-box-contentcopy");
  });

  const navbar = document.querySelector("#navbar");

  document.addEventListener("scroll", function (e) {
    if (window.scrollY > 20) {
      navbar.classList.add("navbarActive");
    } else {
      navbar.classList.remove("navbarActive");
    }
  });

  let _CONTENT = [
    "WEB DESIGN",
    "CREATIVE DESIGN",
    "GRAPHIC DESIGN",
    "WEB DEVELOPER",
  ];

  // Current sentence being processed
  let _PART = 0;

  // Character number of the current sentence being processed
  let _PART_INDEX = 0;

  // Holds the handle returned from setInterval
  let _INTERVAL_VAL;

  // Element that holds the text
  let _ELEMENT = document.querySelector("#tanitim");

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    let text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
      // Hide the cursor
      // _CURSOR.style.display = 'none';

      clearInterval(_INTERVAL_VAL);
      setTimeout(function () {
        _INTERVAL_VAL = setInterval(Delete, 50);
      }, 1000);
    }
  }

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    let text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
      clearInterval(_INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (_PART == _CONTENT.length - 1) _PART = 0;
      else _PART++;

      _PART_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(function () {
        // _CURSOR.style.display = 'inline-block';
        _INTERVAL_VAL = setInterval(Type, 50);
      }, 200);
    }
  }

  // Start the typing effect on load
  _INTERVAL_VAL = setInterval(Type, 50);
}
{
  const btnAll = document.getElementById("btn1");
  const btnWeb = document.getElementById("btn2");
  const btnCreative = document.getElementById("btn3");
  const btnGraphic = document.getElementById("btn4");
  const section4main = document.querySelector(".section4main");
  const section4mainyuxaridiv2 = document.querySelector(
    ".section4mainyuxaridiv2"
  );

  let baza = [
    {
      name: "All",
    },
    {
      name: "Web",
    },
    {
      name: "Creative",
    },
    {
      name: "Graphic",
    },
  ];

  btnAll.addEventListener("click", function (e) {
    for (let i = 0; i < baza.length; i++) {
      btnWeb.classList.remove("btncopy");
      btnCreative.classList.remove("btncopy");
      btnGraphic.classList.remove("btncopy");
      if (baza[i].name == "All") {
        section4main.innerHTML = "";
        section4main.innerHTML += `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv3">
                <div class="hover"></div>
              </div>
            </div>
  
  
  
            <div class="section4mainasagihisse">
              <div class="section4mainasagidiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv3">
                <div class="hover"></div>
              </div>
        `;
        btnAll.classList.add("btncopy");
      }
    }
  });
  btnWeb.addEventListener("click", function (e) {
    btnAll.classList.remove("btncopy");
    btnCreative.classList.remove("btncopy");
    btnGraphic.classList.remove("btncopy");
    for (let i = 0; i < baza.length; i++) {
      if (baza[i].name == "Web") {
        section4main.innerHTML = "";
        section4main.innerHTML += `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv3">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv1">
                <div  class="hover"></div>
              </div>
            </div>
  
  
  
            <div class="section4mainasagihisse">
              
              <div class="section4mainasagidiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv3">
                <div class="hover"></div>
              </div>
        `;
        section4mainyuxaridiv2.classList.add("section4divcopy");
        btnWeb.classList.add("btncopy");
      }
    }
  });
  btnCreative.addEventListener("click", function (e) {
    btnWeb.classList.remove("btncopy");
    btnAll.classList.remove("btncopy");
    btnGraphic.classList.remove("btncopy");
    for (let i = 0; i < baza.length; i++) {
      if (baza[i].name == "Creative") {
        section4main.innerHTML = "";
        section4main.innerHTML += `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv1">
                <div class="hover"></div>
              </div>
            </div>
        `;

        btnCreative.classList.add("btncopy");
      }
    }
  });
  btnGraphic.addEventListener("click", function (e) {
    btnCreative.classList.remove("btncopy");
    btnWeb.classList.remove("btncopy");
    btnAll.classList.remove("btncopy");

    for (let i = 0; i < baza.length; i++) {
      if (baza[i].name == "Graphic") {
        section4main.innerHTML = "";
        section4main.innerHTML += `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv3">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv2">
                <div class="hover"></div>
              </div>
            </div>
  
  
  
            <div class="section4mainasagihisse">
              
              
              <div class="section4mainasagidiv3">
                <div class="hover"></div>
              </div>
        `;

        btnGraphic.classList.add("btncopy");
      }
    }
  });
}
{
  let homelineheight = document.getElementById("homelineheight");
  let aboutuslineheight = document.getElementById("aboutuslineheight");
  let serviceslineheight = document.getElementById("serviceslineheight");
  let portfoliolineheight = document.getElementById("portfoliolineheight");
  let testimonialslineheight = document.getElementById(
    "testimonialslineheight"
  );
  let bloglineheight = document.getElementById("bloglineheight");
  let contactuslineheight = document.getElementById("contactuslineheight");

  let navbarsagitemlinkactive = document.querySelector(
      ".navbarsagitemlink-active"
    ),
    navbarsagitemlink1 = document.querySelector(".navbarsagitemlink1"),
    navbarsagitemlink2 = document.querySelector(".navbarsagitemlink2"),
    navbarsagitemlink3 = document.querySelector(".navbarsagitemlink3"),
    navbarsagitemlink4 = document.querySelector(".navbarsagitemlink4"),
    navbarsagitemlink5 = document.querySelector(".navbarsagitemlink5"),
    navbarsagitemlink6 = document.querySelector(".navbarsagitemlink6");

  navbarsagitemlinkactive.addEventListener("click", function (e) {
    homelineheight.style.width = "80%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
  });

  navbarsagitemlink1.addEventListener("click", function (e) {
    aboutuslineheight.style.width = "80%";
    homelineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
  });

  navbarsagitemlink2.addEventListener("click", function (e) {
    serviceslineheight.style.width = "80%";
    homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
  });
  navbarsagitemlink3.addEventListener("click", function (e) {
    portfoliolineheight.style.width = "80%";
    homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
  });
  navbarsagitemlink4.addEventListener("click", function (e) {
    testimonialslineheight.style.width = "80%";
    homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
  });
  navbarsagitemlink5.addEventListener("click", function (e) {
    bloglineheight.style.width = "80%";
    homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
  });
  navbarsagitemlink6.addEventListener("click", function (e) {
    contactuslineheight.style.width = "80%";
    homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
  });
}
{
  let absalutebutton = document.getElementById("absalutebutton");
  document.addEventListener("scroll", function (e) {
    if (window.scrollY < 20) {
      absalutebutton.classList.add("opacity0");
    } else {
      absalutebutton.classList.remove("opacity0");
    }
  });
}
{
  const elements = document.querySelectorAll("section");
  window.addEventListener("scroll", function (e) {


    if (window.scrollY + 10 >= elements[0].offsetTop &&window.scrollY + 10 <= elements[0].offsetTop + elements[0].offsetHeight) {
      console.log(elements[0].id);
      homelineheight.style.width = "80%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
    }
    else if (window.scrollY + 10 >= elements[1].offsetTop &&window.scrollY + 10 <= elements[1].offsetTop + elements[1].offsetHeight) {
      console.log(elements[1].id);
      homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "80%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
    }
    else if (window.scrollY + 10 >= elements[2].offsetTop &&window.scrollY + 10 <= elements[2].offsetTop + elements[2].offsetHeight) {
      console.log(elements[2].id);
      homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "80%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
    }
    else if (window.scrollY + 10 >= elements[3].offsetTop &&window.scrollY + 10 <= elements[3].offsetTop + elements[3].offsetHeight) {
      console.log(elements[3].id);
      homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "80%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
    }
    else if (window.scrollY + 10 >= elements[4].offsetTop &&window.scrollY + 10 <= elements[4].offsetTop + elements[4].offsetHeight) {
      console.log(elements[4].id);
      homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "80%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "0%";
    }
    else if (window.scrollY + 10 >= elements[5].offsetTop &&window.scrollY + 10 <= elements[5].offsetTop + elements[5].offsetHeight) {
      console.log(elements[5].id);
      homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "80%";
    contactuslineheight.style.width = "0%";
    }
    else if (window.scrollY + 10 >= elements[6].offsetTop &&window.scrollY + 10 <= elements[6].offsetTop + elements[6].offsetHeight) {
      console.log(elements[6].id);
      homelineheight.style.width = "0%";
    aboutuslineheight.style.width = "0%";
    serviceslineheight.style.width = "0%";
    portfoliolineheight.style.width = "0%";
    testimonialslineheight.style.width = "0%";
    bloglineheight.style.width = "0%";
    contactuslineheight.style.width = "80%";
    }
  });
}


{
  let burger = document.querySelector('.burger')
  let navbarsagitems2 = document.querySelector('.navbarsagitems2')
  let navbarsagitemlink = document.querySelector('.navbarsagitemlink')
  let navbarsagitemlinkactive = document.querySelector('.navbarsagitemlink-active')

  
  
  burger.addEventListener('click',function(e){
    if(navbarsagitems2.classList.contains ("navbarsagitems2copy1")){
      navbarsagitems2.classList.remove ("navbarsagitems2copy1")
    }else{
      navbarsagitems2.classList.add ("navbarsagitems2copy1")
    }
  })
  navbarsagitemlink.addEventListener('click',function(e){
    navbarsagitems2.classList.remove ("navbarsagitems2copy1")
  })
  
  navbarsagitemlinkactive.addEventListener('click',function(e){
    navbarsagitems2.classList.remove ("navbarsagitems2copy1")
  })
  
  }
  
  
  
  
  




  {
    let sagbtn = document.getElementById("sagbtn");
    let solbtn = document.getElementById("solbtn");
    let swipper = document.querySelector(".swipper");
   
  

  
    let i = 0

  solbtn.addEventListener("click", function (e) {
    if(swipper.classList.contains("main-box-content") && i == 0){
      swipper.classList.add("main-box-contentcopy2");
      i++
    }
    else if(swipper.classList.contains("main-box-contentcopy2") && i == 1){
      swipper.classList.add("main-box-contentcopy3");
      i = 0
    }
    
  });

 let a = 0
 
  sagbtn.addEventListener("click", function (e) {
    if( swipper.classList.contains("main-box-contentcopy3") && a == 0){
      swipper.classList.remove("main-box-contentcopy3")
      a++
    }else if(swipper.classList.contains("main-box-contentcopy2") && a == 1){
      swipper.classList.remove("main-box-contentcopy2")
      a = 0
    }
   });
}

// {
//   let sagbtn = document.getElementById("sagbtn");
//     let solbtn = document.getElementById("solbtn");
//     let swipper = document.querySelector(".swipper");
//     let mainboxcontent = document.querySelector(".main-box-content");
//   let m = 0
//   let a = 0
//   let i = 0
//   if(m == 0){
//     solbtn.addEventListener("click", function (e) {
//       if(i == 0){
//         swipper.classList.add("main-box-contentcopy2");
//         i++
//       }
//     });
//     sagbtn.addEventListener("click", function (e) {
//       if(  a == 0){
//         swipper.classList.remove("main-box-contentcopy2")
//         a++
//       }
//     });
//     m++
//   }else if(m == 1){
//     solbtn.addEventListener("click", function (e) {
//       if( i == 1){
//         swipper.classList.add("main-box-contentcopy3");
//         i++
//       }
//     });
//     sagbtn.addEventListener("click", function (e) {
//       if( a == 1){
//         swipper.classList.remove("main-box-contentcopy3")
//         a = 0
//         m = 0
//       }
//     });
//   }
// }
