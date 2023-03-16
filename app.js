{
    "dependencies"; {
      "supersaas-api-client"; "^1.0"
    }
  }

  var supersaas = require('supersaas-api-client');
  var Client = supersaas.Client;

  Client.configure({
    accountName: 'petsonpoint',
    api_key: 'hkfaD6nqc6NSBziVJ0FmJw',
    host: 'https://www.supersaas.com/schedule/petsonpoint/Appointments',
    dryRun: true,
    verbose: true
  })
  Client.Instance.accountName; //=> 'account'

