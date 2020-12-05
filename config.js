var token, userId;
var info = [];

// so we don't have to write this out everytime
// const twitch = window.Twitch.ext;

// onContext callback called when context of an extension is fired
window.Twitch.ext.onContext((context) => {
  console.log(context);
});


// onAuthorized callback called each time JWT is fired
window.Twitch.ext.onAuthorized((auth) => {
  // save our credentials
  token = auth.token;
  userId = auth.userId;
});

$(function(){
    $("#form").submit(function(e) {
      e.preventDefault();
      info = [];
      $('input[type=text]').each(function() {
        var isbn = $(this).val();
        info.push(isbn);
      })
      window.Twitch.ext.configuration.set("broadcaster","1",JSON.stringify(info));
  })
})

// onChanged configuration
// updates viewer panel
window.Twitch.ext.configuration.onChanged(function() {
  //checks if configuration is defined
        console.log("yup- config");
        updateBooks();
  })
