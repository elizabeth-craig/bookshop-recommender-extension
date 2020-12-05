var token, userId;
var info =[];
// so we don't have to write this out everytime
// const twitch = window.Twitch.ext;

// callback called when context of an extension is fired
window.Twitch.ext.onContext((context) => {
  console.log(context);
});


// onAuthorized callback called each time JWT is fired
window.Twitch.ext.onAuthorized((auth) => {
  // save our credentials
  token = auth.token;
  userId = auth.userId;
});

// onChanged configuration
// updates viewer panel
window.Twitch.ext.configuration.onChanged(function() {
  //checks if configuration is defined
        console.log("yup-viewer");
        updateBooks();

  })
