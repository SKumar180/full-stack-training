$(document).ready(function(){
    $("#mybutton").click(function(){
        $.ajax({
            type: "POST",
            url: http://localhost:3000/posts",
            data: {
                title: "Donald Duck",
                author: "Nitish"
              },
            success: success,
            dataType: dataType
          });
    });
  });