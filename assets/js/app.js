// back to top button start
$(document).ready(function(){
    $(window).on('scroll' , function(){
        var scroll= $(this).scrollTop();
        if(scroll >400){
            $('.back_to_top').fadeIn(500)
        }
        else{
            $('.back_to_top').fadeOut(700) 
        }
        
        
        if(scroll > 500) {
            $('.nav_part').addClass('nav_bg'); 
        }
        else{
            $('.nav_part').removeClass('nav_bg');
        }
    });
    
    
    $('.back_to_top').click(function(){
        $('html,body').animate({scrollTop:0}, 1000);
    });
});
// back to top button end

// dark mode button start 
var btn = document.getElementById("btn");
var btnText = document.getElementById("btnText");
var btnIcon = document.getElementById("btnIcon");

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "moon.png";
        btnText.innerHTML = "Dark"
        // icon.classList.add("sun");
    }else{
        btnIcon.src = "sun.png";
        btnText.innerHTML = "Light"
        // icon.classList.add("moon");
    }
}
// dark mode button end


// type text effect start

var text = ['App Developer','Student'];
var count = 0;
var index = 0;
var currentText = 0;
var letter = 0;

setInterval(Mytype,200);
function Mytype(){
    currentText = text[count];
    letter = currentText.slice(0,index++);
    var place = document.querySelector('.multiText').innerHTML = letter;
    
    if(letter.length==currentText.length){
        count++;
        index=0; 
    }
    if (count== text.length){
        count= 0;
    }
}
// type text effect end

// wow js 
new WOW().init();

// veno box
new VenoBox({
    selector: '.my-video-links',
});