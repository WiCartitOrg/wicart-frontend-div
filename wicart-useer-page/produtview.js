
var button = document.getElementById("sum");
var button2 = document.getElementById("sub");
var price = document.getElementById("prod-price");
var updatePrice = parseFloat(price.firstChild.nodeValue);
count = 1;
 
button.onclick = function() {
  count += 1;
  var result = document.getElementById("result");
  price.innerHTML = parseFloat(count) * updatePrice;
  result.innerHTML = count;
};


button2.onclick = function() {
  var result = document.getElementById("result");

  count = parseFloat(result.firstChild.nodeValue);
  if(count >= 2){
    count -= 1;
  }
  else{
    return false;
  }
  price.innerHTML = parseFloat(count) * updatePrice;
  result.innerHTML = count;
};