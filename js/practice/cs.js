document.getElementById('click1').addEventListener('click', function(){
    var i = document.getElementById("result1").innerHTML;
    i++;
      document.getElementById("result1").innerHTML = i+"likes";
  })