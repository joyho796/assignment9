$(document).ready(function(){
    $.get("https://joyho796.github.io/assignment9/data.json", function(data){
        str = JSON.stringify(data);
        $("#json_str").text(str);

        songs = JSON.parse(str);
        dataHTML = "<h3>User Friendly Display</h3>";
        songs.forEach(function(song){
            dataHTML += "<p>";
            dataHTML += "<strong>" + song.title + "</strong><br>";
            dataHTML += "Artist(s): " + song.artists.join(", ") + "<br>";
            dataHTML += "Genre(s): " + song.genres.join(", ") + "<br>";
            dataHTML += "Released: " + song.year;
            dataHTML += "</p><br>";
        });
        $("#song_data").html(dataHTML);

        filteredHTML = "<h3>Filtered Data</h3>";
        filteredHTML += "<p> Select a genre: <select id='genre_select'>";
        genreSet = [];
        songs.forEach(function(song) {
            song.genres.forEach(function(genre){
                if (!genreSet.includes(genre)) {
                    genreSet.push(genre);
                    filteredHTML += "<option value='" + genre + "'>" + genre + "</option>"
                }
            });
        });
        filteredHTML  += "</select>&nbsp&nbsp<input type='button' value='Filter'></p><br>";
        $("#filtered_data").html(filteredHTML);

        $(":button").click(function(){
            selectedGenre = document.getElementById("genre_select").value;
            displayHTML = "<p><strong>Showing Genre: " + selectedGenre + "</strong><p><br>";
            songs.forEach(function(song) {
                if (song.genres.includes(selectedGenre)){
                    displayHTML += "<p>";
                    displayHTML += "<strong>" + song.title + "</strong><br>";
                    displayHTML += "Artist(s): " + song.artists.join(", ") + "<br>";
                    displayHTML += "Genre(s): " + song.genres.join(", ") + "<br>";
                    displayHTML += "Released: " + song.year;
                    displayHTML += "</p><br>";
                }
            });
            $("#filtered_data_display").html(displayHTML);
        });
    });
});

