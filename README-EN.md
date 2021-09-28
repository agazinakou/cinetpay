### Why use this package?
The library allows you to:

* Accept payments with all operators available at [CinetPay](https://cinetpay.com)

* Check the status of a payment (CheckPayStatus) from the `transaction identifier or payment token`

### Installation

With [npm](http://npmjs.org) do:

    $ npm install @azinakou/cinetpay

### Properties

| Props        | Type           | Description  |
| :------------- |:-------------| :-----|
| `apikey` | string | Parameter of your service available in your account - <strong> Required </strong> |
| `site_id` | number | Parameter of your service available in your account - <strong> Mandatory </strong> |
| `notify_url` | string | the silent notification link (IPN) after payment - <strong> Mandatory </strong> |
| `return_url` | string | The link where the customer will be redirected after payment - <strong> Required </strong> |
| `amount` | number | Payment amount - <strong> Mandatory </strong> |
| `transaction_id` | string | The identifier of the transaction, it must be unique - <strong> Mandatory </strong> |
| `currency` | string | Currency of payment. <br> Options: `XOF`,` XAF`, `CDF`,` GNF` <strong> Mandatory </strong> |
| `description` | string | Description of payment - <strong> Mandatory </strong> |
| `channels` | string | Used to define the means of payment available on the <br> Options counter: `ALL`,` MOBILE_MONEY`, `CREDIT_CARD`) - <strong> Mandatory </strong> |
| `customer_id` | string | Customer ID in your system - optional |
| `customer_name` | string | Customer's first name (s) in your system - optional |
| `customer_surname` | string | The name of the customer in your system - optional |
| `lang` | string | Define the language of the payment counter <br> Options: `fr`,` en` <strong> Mandatory </strong> |
| `customer_phone_number` | string | The customer's phone number in your system - optional |
| `customer_email` | string | Customer's email address in your system - optional |
| `customer_address` | string | The customer's address in your system - optional |
| `customer_city` | string | The customer's city in your system - optional |
| `customer_country` | string | The customer's country in your system. The value to send is the [ISO 3166-1 alpha-2 code](https://www.atlas-monde.net/codes-iso/) - optional |
| `customer_state` | string | The state the client is in. This value is required if the customer is in the United States of America (US) or Canada (CA). The value to send is the [ISO 3166-1 alpha-2 code](https://www.atlas-monde.net/codes-iso/) - optional |
| `customer_zip_code` | string | The zip code of the country where the customer is located - optional |

## Initialization of the library

```typescript


// If you use CommonJS imports with require() use the following approach:
const cinetpay = require("@azinakou/cinetpay");

// With ES6
import { Cinetpay } from '@azinakou/cinetpay';
```
#### Make a payment

```typescript
import { Cinetpay, PaymentConfig } from '@azinakou/cinetpay';

...

const cp = new Cinetpay({
    apikey: '',
    site_id: ,
    notify_url: '',
    return_url: '',
    lang: '',
  });

const payConfig: PaymentConfig = {
    transaction_id: '' // Unique transaction identifier in your database,
    amount: ,
    currency: '',
    channels: '',
    description: ''
};
cp.makePayment(payConfig)
    .then(response => console.log(response))
    .catch(err => console.log(err))
```


#### View the status of a payment
```typescript

import { Cinetpay, PaymentConfig } from '@azinakou/cinetpay';

...

const cp = new Cinetpay({
    apikey: '',
    site_id: ,
    notify_url: '',
    return_url: '',
    lang: '',
  });

const token = ''; // Identifier of the transaction or payment_token obtained when initializing the payment

cp.checkPayStatus(token)
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

### Notification URL
For those who have services that do not require processing of payment notifications from CinetPay, you can skip this step for example donation services.

With each payment, CinetPay notifies you via a notification link `notify_url`, we advise you to always process it on the server side. Follow this link to learn more about the [Payment Notification](https://github.com/cinetpay/seamlessIntegration#etape-1--pr%C3%A9parer-la-page-de-notification)

### Compatibility
This package has been tested and works on all modern browsers including:

* Google Chrome
* Mozilla Firefox
* Safari

## Example

```typescript
import { Cinetpay, PaymentConfig } from '@azinakou/cinetpay';

...

const cp = new Cinetpay({
    apikey: '5579980505863a3f6aabd82.89189525',
    site_id: 659913,
    notify_url: 'https://my-website.com/notify',
    return_url: 'https://my-website.com/return',
    lang: 'en',
  });


//Générer un nouveau identifiant de transaction
const s4 = () => {
return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const uniqId = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
//Output format c2181edf-041b-0a61-3651-79d671fa3db7


const payConfig: PaymentConfig = {
    transaction_id: uniqId,
    amount: 300,
    currency: 'XOF',
    channels: 'ALL',
    description: 'Payment test'
};
cp.makePayment(payConfig)
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

Version française [Here](README.md)

## Have a greet day :)