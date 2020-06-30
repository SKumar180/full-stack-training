let todos=[

    {
        name:"Buy a phone",
        status:true
    },
    
    {
        name:"Cake",
        status:false
    },
    
    {
        name:"Buy a Computer",
        status:true
    }
]

//Add todo on DB
//To add todo on UI
let todos=null
function saveTodo(item){
    let obj={
        "name": item,
        "status": false,
    }
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/todos",
        data:obj,
        success:function(response){
            console.log('response',response);
            addTodo(item);
        }
        }
    })
}



//Paint todo on UI
function addTodo(item)
{
    let newObject={
        name:item,
        status:false
    }
    
     // $("#todoitems").html("<li>Item one</li><li>Item two</li>")
     if(item)
     {
        todos.push(newObject)
        $("#todoitems").append("<li>"+newObject.name+"</li>");
        $("#errMsg").hide();
     }
        else
        //do nothing
        $("#errMsg").show();
}

function loadTodo(){
    
    $.ajax({
        type:"GET",
        url:"http://localhost:3000/todos",
        success:function(result){
            console.log('result',result);
            todos=result;
            result.map(function(obj){
                addTodo(obj.name)
            })
        },

    })
    // fetch("http://localhost:3000/todos").then(function(result){
    //     console.log('result',result);
    // }).then(function(err){
    //     console.log('err',err);
    // })
}

$(document).ready(function(){
    $("#errMsg").hide()
    // Get value on button click and show alert
    //loadTodo()
    //$("#addtodobtn").click(function(){
       // var todo = $("#todo").val();
        //addTodo(todo)
       // $(#todo).val("")
   // });
   //or
   loadTodo()
   $("#addtodo").submit(function(event){
       event.preventDefault();
       var todo = $("#todo").val()
       //addTodo(todo)
       saveTodo(todo);
       $("#todo").val("")
   });
});