$(document).ready(function(){
    $.get("https://joyho796.github.io/assignment9/data.json", function(data){
            str = JSON.stringify(data);

            $("#json_str").text(str);
            songs = JSON.parse(str);
            dataHTML = "";
            songs.forEach(function(song) {
                dataHTML += "<p>";
                dataHTML += "<strong>" + song.title + "</strong><br>";
                dataHTML += song.artists[0];
                // song["artists"].forEach(function(artist){
                //     dataHtml += artist;
                // })
                dataHTML += "Released: " + song.year;
                dataHTML += "</p>";
            })
            $("#song_data").html(dataHTML);

        })

});

