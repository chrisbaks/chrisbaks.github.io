$("#col-container").waypoint(function() {
    $(".slide").css({ 
    opacity: "1",
    marginTop: "0"     
    });
    }, { offset: 100 });

$("#col-container1").waypoint(function(){
$(".slide1").css({ 
    opacity: "1",
    marginTop: "0"     
    });
}, { offset: 150 });

$("#col-container2").waypoint(function(){
$(".slide2").css({ 
    opacity: "1",
    marginTop: "0"     
    });
}, { offset: 200 });

var typed = new Typed(".typed", {
strings: [
"Web  designer",
"Web developer",
"Front-end Web Developer.UI|UX"
],
backSpeed: 40,
typeSpeed: 40
});

function validation(email){
            
var emailReg = /^([a-za-z0-9_.+-])+\@(([a-za-z0-9_])+\.)+([a-za-z0-9]{2,4})+$/;
return emailReg.test(email);
  };
  
$("form").submit(function(e){

e.preventDefault();

var errors="";
var fieldsMissing = "";
       
if($("#subject").val() == ""){
fieldsMissing += "<br>Subject";
  };
        
if($("#email").val() == ""){
fieldsMissing += "<br>Email";
    };
        
if($("#cmessage").val() == ""){
fieldsMissing += "<br>Message";
};
        
if(fieldsMissing != ""){
errors += "<p>The following field(s) are missing.</p>" + fieldsMissing;
    };
        
        

if(validation($("#email").val())== false){
errors += "<p>You need to enter a valid email address<p> ";
        
  };
      
if(errors != ""){
$("#errors").html('<div class ="alert alert-danger" role="alert"><strong>There were error(s) in your form:</strong>' + errors +'</div>');
}else {
$("form").unbind("submit").submit(); 

}
});
$(".act").hover(function(){
$(this).addClass("highlighted");
},function(){
$(this).removeClass("highlighted");
});

$(".card").hover(function(){
$(this).addClass("highlighted2");
},function(){
$(this).removeClass("highlighted2");
});
