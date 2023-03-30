{
    "dependencies": {
        "supersaas-api-client": "^1.0"
    }
}

var supersaas = require('supersaas-api-client');
var sss = require('supersaas-api-client');
var Client = supersaas.Client;

var Client = new Client({accountName: 'petsonpoint', api_key: 'xxxxxxxxxxxxxxxxxxxxxx'});
process.env.SSS_API_ACCOUNT_NAME = 'your-env-supersaas-account-name';
process.env.SSS_API_KEY = 'your-supersaas-account-api-key';
supersaas.Client.Instance.accountName; //=> 'your-env-supersaas-account-name';
supersaas.Client.Instance.api_key; //=> 'your-env-supersaas-account-name';

Client.Instance.users.create(attributes, function(err, data){});
Client.Instance.schedules.list(function(err, data) { 
    console.log(data); //=> ["Schedule", ...]
});

Client.Instance.users.create({"name": ..., ...}, null, true, function(err, data) { 
    console.log(data); //=> {location: 'https://www.supersaas.com/api/users'}
});

Client.Instance.users.get(12345, function(err, data) { 
    console.log(data); //=> "User"
});

Client.Instance.users.list(false, 25, 0, function(err, data) { 
    console.log(data); //=> ["User", ...]
});

Client.Instance.users.list(false, 25, 0, function(err, data) { 
    console.log(data); //=> ["User", ...]
});

Client.Instance.appointments.changes(12345, '2023-03-24 00:00:00', true, function(err, data) { 
    console.log(data); //=> ["Appointment", ...]
});

Client.Instance.appointments.range(12345, false, '2023-01-31 00:00:00', '2023-03-31 00:00:00', true, function(err, data) { 
    console.log(data); //=> ["Appointment", ...]
});

Client.Instance.appointments.create(12345, 67890, {"full_name": ...}, true, true, function(err, data) { 
    console.log(data); //=> {location: 'https://www.supersaas.com/api/bookings}
});

Client.Instance.appointments.update(12345, 67890, {"full_name": ...}, true, true, function(err, data) { 
    console.log(data); //=> "object"
});

Client.Instance.appointments.get(12345, 67890, function(err, data) { 
    console.log(data); //=> ["Appointment", ...]
});

Client.Instance.appointments.list(12345, true, '2019-01-31 00:00:00', function(err, data) { 
    console.log(data); //=> ["Appointment", ...]
});

Client.Instance.appointments.delete(12345, 67890, function(err, data) { 
    console.log(data); //=> "object"
});

Client.Instance.forms.list(12345, '2019-01-31 00:00:00', function(err, data) { 
    console.log(data); //=> ["Form", ...]
});

Client.Instance.forms.get(12345, function(err, data) { 
    console.log(data); //=> "Form"
});