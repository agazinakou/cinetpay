### Pourquoi utiliser ce package ?
La bibliothèque vous permet de :

* Accepter des paiements avec tous les opérateurs disponible chez [CinetPay](https://cinetpay.com)

* Verifier le statut d'un paiement (CheckPayStatus) à partir de `l'identifiant de la transaction ou du token de paiement`

### Installation

Avec [npm](http://npmjs.org) faire:

    $ npm install @azinakou/cinetpay

### Propriétés

| Props        | Type           | Description  |
| :------------- |:-------------| :-----|
| `apikey`      | string | Paramètre de votre service disponible dans votre compte - <strong>Obligatoire</strong> |
| `site_id`      | number | Paramètre de votre service disponible dans votre compte - <strong>Obligatoire</strong>  |
| `notify_url`      | string | le lien de notification silencieuse (IPN) après paiement - <strong>Obligatoire</strong>  |
| `return_url`      | string | Le lien où le client sera redirigé après le paiement - <strong>Obligatoire</strong>  |
| `amount`      | number | Montant du paiement - <strong>Obligatoire</strong>  |
| `transaction_id`      | string | L'identifiant de la transaction, elle doit être unique - <strong>Obligatoire</strong>  |
| `currency`      | string | Devise du paiement. <br> Options : `XOF`, `XAF`, `CDF`, `GNF` <strong>Obligatoire</strong>  |
| `description`      | string | Description du paiement  - <strong>Obligatoire</strong> |
| `channels`      | string | Permet de définir les moyens de paiement présent sur le guichet <br> Options : `ALL`, `MOBILE_MONEY`, `CREDIT_CARD`) - <strong>Obligatoire</strong> |
| `customer_id`      | string | L’identifiant du client dans votre système - facultatif |
| `customer_name`      | string | Le prénom(s) du client dans votre système - facultatif |
| `customer_surname`      | string | Le nom du client dans votre système - facultatif |
| `lang`      | string | Définie la langue du guichet de paiement <br> Options : `fr`, `en` <strong>Obligatoire</strong> |
| `customer_phone_number`      | string | Le numéro de téléphone du client dans votre système - facultatif |
| `customer_email`      | string | L’adresse mail du client dans votre système - facultatif |
| `customer_address`      | string | L’adresse du client dans votre système - facultatif |
| `customer_city`      | string | La ville du client dans votre système - facultatif |
| `customer_country`      | string | Le pays du client dans votre système. La valeur à envoyer est le  [Code ISO 3166-1 alpha-2 ](https://www.atlas-monde.net/codes-iso/) - facultatif |
| `customer_state`      | string | L’état dans de la quel se trouve le client. Cette valeur est obligatoire si le client se trouve au États Unis d’Amérique (US) ou au Canada (CA). La valeur à envoyer est le  [Code ISO 3166-1 alpha-2 ](https://www.atlas-monde.net/codes-iso/) - facultatif |
| `customer_zip_code`      | string | Le code zip du pays dans lequel se trouve le client - facultatif |

## Initialisation de la librairie

```typescript


// If you use CommonJS imports with require() use the following approach:
const Cinetpay = require("@azinakou/cinetpay");

// With ES6
import { Cinetpay } from '@azinakou/cinetpay';
```
#### Effectuer un paiement
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
    transaction_id: '' // Identifiant de transaction unique dans votre base de donnée,
    amount: ,
    currency: '',
    channels: '',
    description: ''
};
cp.makePayment(payConfig)
    .then(response => console.log(response))
    .catch(err => console.log(err))
```


#### Voir le statut d'un paiement
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

const token = ''; // Identifiant de la transaction ou payment_token obtenu lors de l’initialisation du paiement

cp.checkPayStatus(token)
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

### URL de Notification
Pour ceux qui possèdent des services qui ne neccessitent pas un traitement des notifications de paiement de CinetPay, vous pouvez ignorer cette étape par exemple les services de don.

A chaque paiement, CinetPay vous notifie via un lien de notification `notify_url`, nous vous conseillons de toujours le traiter côté serveur. Suivez ce lien pour en savoir plus sur la [Notification de paiement](https://github.com/cinetpay/seamlessIntegration#etape-1--pr%C3%A9parer-la-page-de-notification)

### Compatibilité
Ce package a été testé et fonctionne sur tous les navigateurs modernes y compris :

* Google Chrome
* Mozilla Firefox
* Safari

## Exemple

```typescript
import { Cinetpay, PaymentConfig } from '@azinakou/cinetpay';

...

const cp = new Cinetpay({
    apikey: '5579980505863a3f6aabd82.89189525',
    site_id: 659913,
    notify_url: 'https://mon-site-internet.com/notify',
    return_url: 'https://mon-site-internet.com/return',
    lang: 'fr',
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
    description: 'Test de paiement'
};
cp.makePayment(payConfig)
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

English version [Here](README-EN.md)

## Have a greet day :)