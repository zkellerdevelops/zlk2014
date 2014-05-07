//+++++ DIV BACKGROUND IMAGE ++++++
$(document).ready(function () {

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=99895690@N00&lang=en-us&format=json&jsoncallback=?", displayImages);

        function displayImages(data) {

            // Start putting together the HTML string
            var htmlString = "";

            // Now start cycling through our array of Flickr photo details
            $.each(data.items, function(i,item){

                // I only want the ickle square thumbnails
                var sourceSquare = (item.media.m).replace("_m.jpg", "_b.jpg");

                // Here's where we piece together the HTML
                // htmlString += '<a href="' + item.link + '" target="_blank">';
                htmlString += '<img class="img-responsive" title="' + item.title + '" src="' + sourceSquare;
                htmlString += '" alt="'; htmlString += item.title + '" />';
                htmlString += '</a>';
                console.log(htmlString);

                if (htmlString) return false;

            });

        // Pop our HTML in the #images DIV
        $('#images').append(htmlString);

        // Close down the JSON function call
        }


        $('#images').resizeToParent({parent: '#imgcontainer'});
});