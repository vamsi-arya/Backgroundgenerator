var css = document.querySelector("h3");
 var color1 = document.querySelector(".color1");
 var color2= document.querySelector(".color2");
 var body = document.getElementById("gradient");
//  var body = document.getElementById("radial-gradient");

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textcontent = body.style.background + ";";
 } 

//  function setGradient() {
//     body.style.background =
//     "radial-gradient(to right, "
//     + color1.value
//     + ", "
//     + color2.value
//     + ")";
//     css.textcontent = body.style.background + ";";
//  }
 
color1.addEventListener("input", setGradient);
//     body.style.background =
//     "linear-gradient(to right, "
//     + color1.value
//     + ", "
//     + color2.value
//     + ")";
// }) 

//  console.log(css);
//  console.log(color1);
//  console.log(color2);


//  color1.addEventListener("input", function() {
//     console.log(color1.value);
//  })
  
 color2.addEventListener("input", setGradient);
//     body.style.background =
//     "linear-gradient(to right, "
//     + color1.value
//     + ", "
//     + color2.value
//     + ")";

//  })
// color3.addEventListener("input",radial-gradient);
