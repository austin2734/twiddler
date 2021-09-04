$(document).ready(function(){
  // Select already existing elemnts
  var $app = $('#app');
  $app.html('');


 // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $updateFeed = $('<button id="update-feed"></button>');
  $updateFeed.text('Update Feed');
  var $feed = $('<div id="feed"></div>');
  var $handleUsernameClick = $('#feed .tweet .username');
  var pickedUser = '';
  var $buttonDiv = $('<div class="container"></div>');


// Create event handler functions

$updateFeed.on("click", function (){
  $updateFeed.text('Update Feed');
  pickedUser = '';
  renderFeed();
});

$(document).on("click",'.username',function(){
  $updateFeed.text('Back');
  pickedUser = $(this).text();
  renderFeed();
});



// Append new HTML elements to the DOM


$title.appendTo($app);
$updateFeed.appendTo($buttonDiv);
$buttonDiv.appendTo($app);

var renderFeed = function () {
  $('#feed').empty();
  var user = pickedUser;
  var index = streams.home.length - 1;
     while(index >= 0){
     var tweet = streams.home[index];
     var $tweet = $('<div class="tweet"></div>');
     var $photo = $('<img class="profile-photo" src"">');
     var $message = $('<p class="message"></p>');
     var $userName = $('<span class="username" type="button"></span>');
     var $timeStamp = $('<div class="timestamp"></div>');
     var $comment = $('<i class="icon comment far fa-comments"></i>');
     var $retweet = $('<i class="icon retweet fas fa-retweet"></i>')
     var $like = $('<i class="icon like far fa-grin-hearts"></i>')
     var $share = $('<i class="icon share fas fa-share"></i>');
     var timeConvert = jQuery.timeago(tweet.created_at);




     if (user.length > 0) {
        if (user !== '@' + tweet.user){
          index -= 1
          continue;
        }
     }
     $userName.text('@' + tweet.user);
     $message.text(tweet.message);
     $photo.attr('src', tweet.profilePhotoURL);
     $timeStamp.text(timeConvert);

     $photo.appendTo($tweet);
     $userName.appendTo($tweet);
     $timeStamp.appendTo($tweet);
     $message.appendTo($tweet);
     $comment.appendTo($tweet);
     $retweet.appendTo($tweet);
     $like.appendTo($tweet);
     $share.appendTo($tweet);
     $tweet.appendTo($feed);



     index -= 1;
    }



  $feed.appendTo($app);

  }

  renderFeed();




window.isItBeautifulYet = true



});