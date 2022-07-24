{
    "dependencies"; {
      "suersaas-api-client"; "^1.0"
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