import { CinetPayConfig } from '../models';
import { Cinetpay } from './../cinetpay';
/* eslint-disable no-undef */
test('Init library', () => {
  const config: CinetPayConfig = {
    apikey: '5579980505863a3f6aabd82.89189525',
    site_id: 659913,
    notify_url: 'https://mon-site-internet.com/notify',
    return_url: 'https://mon-site-internet.com/return',
    lang: 'fr',
  };
  // eslint-disable-next-line no-undef
  expect(new Cinetpay(config));
});
