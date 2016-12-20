$(document).ready(function() {

var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    r: 'json',
    part: 'snippet',
    key: 'AIzaSyCEE1vUc_I0eZhU1ScrZSS4kukTmZM0Ndo'
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function displayYOUTUBESearchData(data) {
  var resultElement = '';
  if (data.items) {
    console.log(data);
    data.items.forEach(function(item) {
      resultElement += '<div class="thumb"><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.high.url + '" alt="catVideoThumbnail"></a></div>';
      var source = item.id.videoId;
    });
  }
  else {
    resultElement += '<p>No results</p>';
    console.log(data.items);
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYOUTUBESearchData);
  });
}

$(function(){watchSubmit();});

});



//for thumbnails:
//data.items.snippet.thumbnails.(default or high or medium)