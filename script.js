//data = {"song_list":[ {"song": {"title":"Love Story", "artist(s)":["Taylor Swift"], "genre(s)":["Pop"], "year":"2008" } }, {"song": {"title":"Heal the World", "artist(s)":["Michael Jackson"], "genre(s)":["Pop"], "year":"1991" } }, {"song": {"title":"Bad Romance", "artist(s)":["Lady Gaga"], "genre(s)":["Pop"], "year":"2008" } }, {"song": {"title":"Writing's on the Wall", "artist(s)":["Sam Smith"], "genre(s)":["Pop"], "year":"2015" } }, {"song": {"title":"The Phantom of the Opera", "artist(s)":["Andrew Lloyd Webber"], "genre(s)":["Musicals"], "year":"2008" } }, {"song": {"title":"I Dreamed a Dream", "artist(s)":["Randy Graff"], "genre(s)":["Musicals"], "year":"1987" } }, {"song": {"title":"Can You Feel the Love Tonight", "artist(s)":["Elton John"], "genre(s)":["Musicals", "Movie"], "year":"1994" } }, {"song": {"title":"Into the Unknown", "artist(s)":["Idina Menzel", "Aurora"], "genre(s)":["Musicals", "Movie"], "year":"2019" } }, {"song": {"title":"Airplanes", "artist(s)":["B.o.B", "Hayley Williams"], "genre(s)":["Pop", "Rap"], "year":"2010" } }, {"song": {"title":"Love the Way You Lie", "artist(s)":["Eminem", "Rhianna"], "genre(s)":["Pop", "Rap"], "year":"2010" } }, ]};
$(document).ready(function(){
    console.log('1');
    $.get("https://joyho796.github.io/assignment9/data.json",
    function(data){
        console.log('2');
        str = JSON.stringify(data);
        console.log("asdf");
        $("#json_str").value("asdf");
    })

});
function onLoad() {
    // request = new XMLHttpRequest();

    // request.open("GET", "data.json", true);

    // request.onreadystatechange = function() {

    //     if (request.readyState == 4 && request.status == 200) {

    //         result = request.responseText;
    //         data = JSON.parse(result);

    //         document.getElementById("https://joyho796.github.io/assignment9/data.json").innerHTML = JSON.stringify(data);


    //     } else if (request.readyState == 4 && request.status != 200) {

    //         document.getElementById("messages").innerHTML = "Whoops, something went terribly wrong!";

    //     } else if (request.readyState == 3) {

    //         document.getElementById("messages").innerHTML = "Come back soon!";

    //     }

    //         }//end on readystate change

    //     // Step 4: fire off the HTTP request
    //         request.send();
    //         console.log("4 request sent");

}
