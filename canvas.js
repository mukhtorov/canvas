// for personal
// here is the div content to convert to image
//<div id="personal" class = "wrap tabs" ></div> 
//function 1

$(function() { 
    $( document ).click(function() { 
        html2canvas($("#personal"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);
                // Convert as image 
                Canvas2Image.saveAsPNG(canvas);
				// creating img id for displaying the image
                $("#img1").append(canvas);
                // Clean up 
                document.body.removeChild(canvas);
            }
        });
    });
});


//background of image will be white
//function 2
$(function(){
    $(document).click(function(){
      html2canvas($('#personal'), 
      {
        onrendered: function (canvas) {
          var a = document.createElement('a');
          // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
          a.download = 'enrolment.jpg';
          a.click();
        },
            background: '#fff'
      });
    })
  });
  
+  