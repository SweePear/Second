// $("p").wrap("<h1></h1>")
// $(".div1").css("background","blue")

// $('button').click(function(){
//     if ($('body').attr('style')=='background-color: black;'){
//         $('body').removeAttr('style')
//     }
//     else{
//         $('body').css('background-color', 'black')
//     }
// })

// $("#vdiv").click(function(){
//     $('button').wrap("<div></div>")
// })
// $("#btnDiv").click(function() { $("#dididi").fadeOut(1000).fadeIn(3000); });
// $("#btnDiv").click(function() { $("#dididi").slideUp(1000).slideDown(3000, function() {
// }); });
// $("#btnDiv").click(function() { 
//     $("div").animate({fontSize: "1.3em"}, 1000);
//       $("div").animate({marginLeft: "300px"}, 5000);
//       $("div").animate({marginTop: "50px"}, 1000);
//       $("div").animate({borderRadius: "50px"}, 1000);
//       $("div").animate({fontSize: "1em"}, 1000);
//       $("div").animate({marginLeft: "0px"}, 1000);
//       $("div").animate({marginTop: "0px"}, 1000);
//       $("div").animate({width: "100%"}, 1000);


//  });

// 1
// $(".p1").hover(function() { 
//     $("strong").animate({fontSize: "1.3em"}, 1000);
//     $("strong").css({color: "green"}, 1000);
//     $("em").css({color: "red"}, 1000);
//     $("em").animate({fontSize: "1.3em"}, 1000);
// });

// // 2
// $(".left2").click(function() { 
//   $(".div2").animate({marginLeft: "0px"}, 1000);
// });
// $(".right2").click(function() { 
//       $(".div2").animate({marginLeft: "100px"}, 1000);
// });

// // 3
// $("figcaption").css({visibility: "hidden"});
// $("figure").hover(function() { 
//     $("figcaption").figcaption({visibility: "collapse"}, 1000);
// });

// async function film() {
//   let url = 'https://api.github.com/users/mojombo';
//   let response = await fetch(url);

//   // let answer = await response.text();
//   // alert(answer)
//   let answer = await response.json();

//   p = document.createElement("p")
//   p.innerHTML = answer.login;
//   document.body.append(p)
//   p1 = document.createElement("p")
//   p1.innerHTML = answer.type;
//   document.body.append(p1)
//   p2 = document.createElement("p")
//   p2.innerHTML = answer.followers_url;
//   document.body.append(p2)
// }