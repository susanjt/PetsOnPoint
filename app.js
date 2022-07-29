{
    "dependencies"; {
      "supersaas-api-client"; "^1.0"
    }
  }
  
  var supersaas = require('supersaas-api-client');
  var Client = supersaas.Client;

  Client.configure({
    accountName: 'petsonpoint',
    api_key: 'vIk1qrjs-ePZqSwP8A1DBw',
    host: 'https://www.supersaas.com/schedule/petsonpoint/Appointments',
    dryRun: true,
    verbose: true
  })
  Client.Instance.accountName; //=> 'account'

  const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(cp());

app.get('/set', (req, res) => {
  // Set the new style cookie
  res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
  // And set the same value in the legacy cookie
  res.cookie('3pcookie-legacy', 'value', { secure: true });
  res.end();
});

app.get('/', (req, res) => {
  let cookieVal = null;

  if (req.cookies['3pcookie']) {
    // check the new style cookie first
    cookieVal = req.cookies['3pcookie'];
  } else if (req.cookies['3pcookie-legacy']) {
    // otherwise fall back to the legacy cookie
    cookieVal = req.cookies['3pcookie-legacy'];
  }

  res.end();
});

app.listen(process.env.PORT);