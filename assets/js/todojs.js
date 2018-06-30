// 1. CHECK OFF SPECIFIC TODO BY CLICKING

// using .click() like this will only work on existing <li>s when the page loads
// $('li').click(function(){
//   $(this).toggleClass('completed');
// });

// use on('click') on the parent element <ul>, because it is always there when the page loads whether or not we add new <li>s 
// pass 'li' as the second parameter to indicate that the click event should only fire when we click <li>s inside this <ul>
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});



// 2. CLICK ON SPAN TO DELETE A TODO

// same reason as above, use on('click') instead to accommodate new <li>s to be made later
// $('span').click(function(event){
//   // remove not only the span, but its whole parent <li>, using .parent()
//   // give it a duration of 500 ms, and use a call back function to remove it after the fadeOut is done
//   $(this).parent().fadeOut(500, function(){
//     // $(this) here is diff from that of above
//     // $(this) here points to <li> because that's the element calling fadeOut, whereas above points to <span>
//     $(this).remove();
//   });
//   // jQuery method to stop event from bubbling up
//   // without this, the click event will bubble up to its parent element <li> and listens to the <li>'s click event, which will toggle class 'completed'
//   event.stopPropagation();
// })

$('ul').on('click', 'span', function(event){
  // remove not only the span, but its whole parent <li>, using .parent()
  // give it a duration of 500 ms, and use a call back function to remove it after the fadeOut is done
  $(this).parent().fadeOut(500, function(){
    // $(this) here is diff from that of above
    // $(this) here points to <li> because that's the element calling fadeOut, whereas above points to <span>
    $(this).remove();
  });
  // jQuery method to stop event from bubbling up
  // without this, the click event will bubble up to its parent element <li> and listens to the <li>'s click event, which will toggle class 'completed'
  event.stopPropagation();
})



// 3. PRESS THE ENTER KEY TO ADD NEW TODO 
$("input[type='text']").keypress(function(event){
  // if the input isn't blank and 
  // if the key pressed is the enter key (key code 13)
  if ($(this).val() && (event.which === 13)) {
    // grab new todo text from input
    var todoText = $(this).val();
    // create a new li and add to ul, using .append()
    $('ul').append('<li><span> <i class="fa fa-trash"></i> </span>' + todoText + '</li>');
    // clear the input field
    $(this).val("");
  }
});



// 4. CLICK ON + TO TOGGLE INPUT FIELD
$('.fa-plus').click(function(){
  $("input[type='text']").fadeToggle();
})