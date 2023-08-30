var preloader =  document.getElementById('loading');
var set = setTimeout(myFunction, 5000);
function myFunction(){
    preloader.style.display = 'none';
    
    }
    
    var message = "मत्स्य निगरानी परियोजना";
    var speed = 150;
    var i = 0;
    function autotyper(){
        document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(autotyper, speed);
       
        
    }
    autotyper();