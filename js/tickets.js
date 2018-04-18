function footballtickets(){
  var total=0;
  var num = document.forms["football-form"]["num"].value;
  var vip = document.forms["football-form"]["vip"].value;
  if(vip == 0)
  {
    total = num * 50;
  }else {
    total = (num  *50) + 100;
  }

  document.getElementById("football-total").innerHTML = total;
}

function baskettickets(){
  var total=0;
  var num = document.forms["basket-form"]["num"].value;
  var vip = document.forms["basket-form"]["vip"].value;
  if(vip == 0)
  {
    total = num * 50;
  }else {
    total = (num  *50) + 100;
  }

  document.getElementById("basket-total").innerHTML = total;
}

function volleytickets(){
  var total=0;
  var num = document.forms["volley-form"]["num"].value;
  var vip = document.forms["volley-form"]["vip"].value;
  if(vip == 0)
  {
    total = num * 50;
  }else {
    total = (num  *50) + 100;
  }

  document.getElementById("volley-total").innerHTML = total;
}
