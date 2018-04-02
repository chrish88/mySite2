//***************LOG IN FORM**************//
var labels = $(".second-feild").children("label");
labels.hide();

////////when user clicks input feild switch placeholder to label/////////
//slect input feild and put hover event listener on it
$('.login-input').on( "click", function(e){  //mouseover function
    e.preventDefault();
    let $targetIn = $(e.target);

    //tests to see if the event target is an input
    if($targetIn.is("input")){
        //gets target's previous sibling (label) and shows it by sliding
        //the input feild down in one second
        $targetIn.prev().slideDown(400);
        //slide place holder text up
        $($targetIn).attr("placeholder", "");
    }

});//end of mouseout function


//***************flickr photo**************//

$('#flickr-form').submit(function(e){
    e.preventDefault();
    const flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let $searchInput = $('#flickr-search').val();
    let searchData = {
        tags: $searchInput,
        format: "json"
    };

    function displayPhotos(data){
        photoHTML = '<ul id="photos">';
        $.each(data.items, function(i, photo){
            photoHTML += '<li class="flickr-thumbnail">';
            photoHTML += '<a href="' + photo.link + '">';
            photoHTML += '<img src="' + photo.media.m + '"></a></li>'
        });
        photoHTML += '</ul>';
        $('.bottom').html(photoHTML);
    }
    $.getJSON(flickrAPI, searchData, displayPhotos);
});
//***************WEATHER WIDGET**************//
