var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
    '<video width="320" height="240" controls><source src="https://tinyexplorers.github.io/css/toy1.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  'The answer is BALL... Great job! What about this toy?',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

var FakeImg = [
  '<img width="50%" src="https://media-public.canva.com/MABvDQ2pOt8/1/screen.svg" />',
  '<img width="50%" src="https://media-public.canva.com/MACk1Spk9Lg/1/screen.svg" />' 
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://media-private.canva.com/MADLpX6pWZE/1/thumbnail_large.png?response-expires=Thu%2C%2013%20Dec%202018%2008%3A43%3A18%20GMT&AWSAccessKeyId=AKIAJWF6QO3UH4PAAJ6Q&Expires=1544690598&Signature=0Am4OezLp8r2DaF5%2FByj%2Faf81Eo%3D" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://media-private.canva.com/MADLpX6pWZE/1/thumbnail_large.png?response-expires=Thu%2C%2013%20Dec%202018%2008%3A43%3A18%20GMT&AWSAccessKeyId=AKIAJWF6QO3UH4PAAJ6Q&Expires=1544690598&Signature=0Am4OezLp8r2DaF5%2FByj%2Faf81Eo%3D" /></figure>' + Fake[i] + FakeImg[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
   $('.menu .button').toggleClass('active');
});