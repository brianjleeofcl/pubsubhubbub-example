const pshb = require("pubsubhubbub").createServer({callbackUrl: 'https://pshb-test-app.herokuapp.com/'});

pshb.on('listen', () => {
  pshb.subscribe("http://push-pub.appspot.com/feed", "https://pubsubhubbub.superfeedr.com", error => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('subscribed');
    }
  })
})

pshb.on('error', error => {
  console.error(error);
})

pshb.on('feed', data => {
  console.log(require('util').inspect(data));
})

pshb.listen(process.env.PORT || 8000);