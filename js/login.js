var x= false;
var y = false;

function popuplogin(){

  if(x == false)
  {
    x =document.getElementById("login").classList.toggle("log-in-display-on");

    if(y== true)
    {
      y = document.getElementById("reg").classList.toggle("reg-display-on");
    }
  }
  else{
    x =document.getElementById("login").classList.toggle("log-in-display-on");
  }

}

function popupreg(){
  if(y==false)
  {
    y = document.getElementById("reg").classList.toggle("reg-display-on");

    if(x == true)
    {
      x =document.getElementById("login").classList.toggle("log-in-display-on");
    }
  }else {
    y = document.getElementById("reg").classList.toggle("reg-display-on");
  }
}
