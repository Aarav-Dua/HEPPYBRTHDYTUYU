var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    BdayImgObject=Img;

    BdayImgObject.scaleToWidth(800);
    BdayImgObject.scaleToHeight(600);
    BdayImgObject.set({

    top:0,
    left:0

    });
    canvas.add(BdayImgObject);
});
}
	


function hpybrthdytuyu(){
	x.play();
}
