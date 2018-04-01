//***************LOG IN FORM**************//
var labels = $(".second-feild").children("label");
labels.hide();

////////when user clicks input feild switch placeholder to label/////////
//slect input feild and put hover event listener on it
$('input').on( "click", function(e){  //mouseover function
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
// }, function(e){ //mouseout function
//     e.preventDefault();
//     //selects all input elements inside of the second form feild
//     var secondFormInputs = $(".second-feild").children("input");
//     //loop through secondFormInputs
//     secondFormInputs.each(function(index){
//         console.log(secondFormInputs + index);
//         //var placeHolder holds the placeholder value for "this"
//     let placeHolder = $(secondFormInputs[index]).attr("placeholder");
//         //holds event target for mouse out function
//         let $targetOut = $(e.target);
//         $targetOut.prev().slideUp(400);
//         $($targetOut).attr("placeholder", placeHolder);
//         console.log(pla);
//     });//end of each function

});//end of mouseout function


//***************flickr photo**************//

$('#flickr-submit').click(function(e){
    e.preventDefault();
    const flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let $searchInput = $('#flickr-search').val();
    let searchData = {
        tags: $searchInput,
        format: 'json'
    };

    function displayPhotos(data){
        photoHTML = '<ul id="photos">';
        $.each(data.items, function(i, photo){
            photoHTML += '<li class="flickr-thumbnail">';
            photoHTML += '<a href="' + photo.link + '">';
            photoHTML += '<img href="' + photo.media.m + '"></a></li>'
        });
        photoHTML += '</ul>';
        $('#photos').html(photoHTML);
    }
    $.getJSON(flickrAPI, $searchInput, searchData);

    // $.getJSON(flickrAPI, data, );
});
//***************WEATHER WIDGET**************//
