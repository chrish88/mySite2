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

const wundergroundAPI = "http://api.wunderground.com/api/6f1e96e055f4b933/conditions/q/36.320,-115.667.json";

let weatherXhr = new XMLHttpRequest();

weatherXhr.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200){
        let weatherResponse = JSON.parse(weatherXhr.responseText);
        console.log(weatherResponse);

        //API data into variables
        let location = weatherResponse.current_observation.display_location.full;
        let timeAndDate = weatherResponse.current_observation.observation_time;
        let temp = weatherResponse.current_observation.temperature_string;
        let wind = weatherResponse.current_observation.wind_mph;
        let windDirec = weatherResponse.current_observation.wind_dir;
        let precip = weatherResponse.current_observation.precip_1hr_in;
        let humid = weatherResponse.current_observation.relative_humidity;
        
        //seclectin DOM elements and injecting data
        document.getElementById('timeDate').textContent = timeAndDate;
        document.getElementById('temp-span').textContent = temp;
        document.getElementById('wind-span').textContent = wind + ' mph';
        document.getElementById('wind-direc').textContent = windDirec;
        document.getElementById('precip-span').textContent = precip;
        document.getElementById('humid-span').textContent = humid;

    }
}
weatherXhr.open("GET", wundergroundAPI, true);
weatherXhr.send();






