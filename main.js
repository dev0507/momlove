var Images = ["mom5.jpg","mom2.gif","mom6.jpg","mom son.gif","mom7.jpg","mom3.gif","mom8.jpg","mom4.gif","mom9.jpeg","mom5.gif","mom10.jpeg","mom6.gif","mom12.jpeg","mom13.jpeg","mom14.jpeg","mom15.jpeg","mom16.jpeg"] ;
var I=0 ;
function Change(){
    
    document.getElementById("mom2.0").src=Images[I];
    I++;
    if(I==17){
        I=0;
    }
   document.getElementById("audio").play();
}
