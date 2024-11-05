let text =document.getElementById('text');
let bird1 =document.getElementById('bird1');
let bird2 =document.getElementById('bird2');
let btn =document.getElementById('btn');
let rocks =document.getElementById('rocks');
let forest =document.getElementById('forest');
let water =document.getElementById('water');
let header =document.getElementById('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    text.style.top =  50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop =  value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px'; 
    forest.style.top = value * 0.25 + 'px'; 
    header.style.top = value * 0.5 + 'px'; 
})


// readmore button
function showMore() {
  var moreText = document.getElementById("more");
  var btnText = document.querySelector("button");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}
showMore();

// read more for ali 
function viewMore() {
  var moreText = document.getElementById("extra");
  var btnText = document.querySelector("button");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}
viewMore();



