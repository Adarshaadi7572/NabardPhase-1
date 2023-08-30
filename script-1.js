// For Preloader 
// var preloader =  document.getElementById('loading');
// var set = setTimeout(myFunction, 5000);
// function myFunction(){
    // preloader.style.display = 'none';
    
    // }
// $(window).on("load", function(){
//     $("#loading").fadeOut("slow")
// });
const pBar_1 = document.querySelector("#p-1");
function updateProgressBar(progressBar, value){
    const fill = progressBar.querySelector('.progress_fill');
    const name = progressBar.querySelector('.progress_text');
    var wid = 0;
    var anim = setInterval(animate, 20);
    function animate(){
        if(wid == value){
            clearInterval(anim);

        }
        else{
            wid++;
            fill.style.width= `${wid}%`
            name.textContent = `${wid}%`
        }
    }
}
updateProgressBar(pBar_1, 100);
const pBar_2 = document.querySelector("#p-2");
function updateProgressBar(progressBar, value){
    const fill = progressBar.querySelector('.progress_fill');
    const name = progressBar.querySelector('.progress_text');
    var wid = 0;
    var anim = setInterval(animate, 20);
    function animate(){
        if(wid == value){
            clearInterval(anim);

        }
        else{
            wid++;
            fill.style.width= `${wid}%`
            name.textContent = `${wid}%`
        }
    }
}
updateProgressBar(pBar_2, 70);
const pBar_3 = document.querySelector("#p-3");
function updateProgressBar(progressBar, value){
    const fill = progressBar.querySelector('.progress_fill');
    const name = progressBar.querySelector('.progress_text');
    var wid = 0;
    var anim = setInterval(animate, 20);
    function animate(){
        if(wid == value){
            clearInterval(anim);

        }
        else{
            wid++;
            fill.style.width= `${wid}%`
            name.textContent = `${wid}%`
        }
    }
}
updateProgressBar(pBar_3, 40);
const pBar_4 = document.querySelector("#p-4");
function updateProgressBar(progressBar, value){
    const fill = progressBar.querySelector('.progress_fill');
    const name = progressBar.querySelector('.progress_text');
    var wid = 0;
    var anim = setInterval(animate, 20);
    function animate(){
        if(wid == value){
            clearInterval(anim);

        }
        else{
            wid++;
            fill.style.width= `${wid}%`
            name.textContent = `${wid}%`
        }
    
    
    }

}
function changeColor(){
    const fill = progressBar.querySelector('.progress_fill');
    const name = progressBar.querySelector('.progress_text');
    if(wid<=50){
            fill.style.color = rgb(0,255,0);
    }
    else if((wid>50) && (wid<=70)){
        fill.style.color = rgb(255,0,0);

    }
    else{
        fill.style.color = rgb(0,0,255);

    }
}
changeColor();
updateProgressBar(pBar_4, 10);