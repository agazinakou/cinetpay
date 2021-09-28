/* eslint-disable no-undef */
import { PaymentConfig, CinetPayConfig } from '../models';
import { Cinetpay } from './../cinetpay';
test('Make payment', () => {
  const config: CinetPayConfig = {
    apikey: '5579980505863a3f6aabd82.89189525',
    site_id: 659913,
    notify_url: 'https://mon-site-internet.com/notify',
    return_url: 'https://mon-site-internet.com/return',
    lang: 'fr',
  };
  // eslint-disable-next-line no-undef
  const cp = new Cinetpay(config);

  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  const uniqId = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

  const payConfig: PaymentConfig = {
    transaction_id: uniqId,
    amount: 300,
    currency: 'XOF',
    channels: 'ALL',
    description: 'Test de paiement',
  };
  cp.makePayment(payConfig)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  expect(cp);
});
