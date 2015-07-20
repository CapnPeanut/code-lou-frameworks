/************************************************************************
Light Box
************************************************************************/

var $overlay = $('<div class="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></P>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);







$(".gallery a").click(function(event){
    event.preventDefault();
    var imagelocation = $(this).attr("href");
    
    $image.attr("src", imagelocation);
    
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});


$overlay.click(function(){
    
   $overlay.hide(); 
});



/************************************************************************
Nav Menu Mobile
************************************************************************/


var $select = $("<select class='navMenu'></select>");
$(".menu").append($select);

$(".menu a").each(function(){
    var $anchor = $(this);
    
    var $option = $("<option></option>");
    
    
    //selected select thingy
    if($anchor.parent().hasClass("selectedItem")) {
        $option.prop("selected", true);   
    }
    
    
    
    $option.val($anchor.attr("href"));
    
    $option.text($anchor.text());
    
    $select.append($option);
    
});


$select.change(function(){
    
 window.location = $select.val();
    
});













/*add password limitations

*/




