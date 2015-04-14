// $(document).ready(function () {

//   // $('#paris').click(function(){
//   //   $('#ttwp').slideToggle();
//   // })

//   // $('#angel').click(function(){
//   //   $('#angelbig').slideToggle();
//   // })

//     $('.projthumb').click(function () {
//         var index = $(this).index(),
//             newTarget = $('.targetDiv').eq(index).slideDown();
//         $('.targetDiv').not(newTarget).slideUp();

//     });



// });


jQuery(function(){
   jQuery('.showSingle').click(function(){
       var item = $(this);
       var vis = jQuery('.targetDiv:visible');
       var targetItem = item.attr('target');
       var target = jQuery('#div' + targetItem);
       var fn = function() {
           target.slideDown();
       };
       if (vis.length) {
           if (vis[0].id == "div" + targetItem) {
               fn = function() {};
           }
           vis.slideUp(fn);
       } else {
          target.slideDown();
       }
   });
});


