$('button').on("click", function(event) {
  event.preventDefault();
  $('#center_column').empty();
  $.get("http://www.omdbapi.com/?s="+$('input').val(), function(data) {
    data.Search.forEach(function(obj) {

      $('#center_column').append("<div>"+obj.Title+": "+obj.Year+"</div>");

      if (obj.Poster === "N/A"){
        $('#center_column').append("<img src='mockups/images/no_image.png'>")
      } else {
        $('#center_column').append($("<img class='movie_poster' src="+obj.Poster+">"));
      };
    })
  });
})
