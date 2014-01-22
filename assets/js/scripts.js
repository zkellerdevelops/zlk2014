//+++++ BODY BACKGROUND IMAGE ++++++
// $(document).ready(function () {

//     $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=99895690@N00&lang=en-us&format=json&jsoncallback=?", displayImages);

//         function displayImages(data) {

//             // Start putting together the HTML string
//             var htmlString = "";

//             // Now start cycling through our array of Flickr photo details
//             $.each(data.items, function(i,item){

//                 // I only want the ickle square thumbnails
//                 var sourceSquare = (item.media.m).replace("_m.jpg", "_b.jpg");

//                 // Here's where we piece together the HTML
//                 // htmlString += '<a href="' + item.link + '" target="_blank">';
//                 htmlString += '<body style="background-image: url('+ sourceSquare +')"></body>'
//                 console.log(htmlString);

//                 if (htmlString) return false;

//             });

//         // Pop our HTML in the #images DIV
//         $('head').append(htmlString);

//         // Close down the JSON function call
//         }
// });



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
});



//++++++++ INJECT CSS BACKGROUND IMAGE ++++++++++
// $(document).ready(function () {

//     $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=99895690@N00&lang=en-us&format=json&jsoncallback=?", displayImages);

//         function displayImages(data) {

//             // Start putting together the HTML string
//             // var htmlString = "";

//             var flickrImage;

//             // Now start cycling through our array of Flickr photo details
//             $.each(data.items, function(i,item){

//                 // Change medium images to large
//                 flickrImage = (item.media.m).replace("_m.jpg", "_b.jpg");
//                 console.log(flickrImage);

//                 // Break .each loop
//                 if (flickrImage) return false;

//             });

//         // Pop our CSS in the #images DIV
//         $('#images').css('background-image', 'url('+ flickrImage +')');

//         // Close down the JSON function call
//         }
// });