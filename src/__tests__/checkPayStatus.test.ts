/* eslint-disable no-undef */
import { CinetPayConfig } from '../models';
import { Cinetpay } from './../cinetpay';
test('Check payment status', () => {
  const config: CinetPayConfig = {
    apikey: '5579980505863a3f6aabd82.89189525',
    site_id: 659913,
    notify_url: 'https://mon-site-internet.com/notify',
    return_url: 'https://mon-site-internet.com/return',
    lang: 'fr',
  };
  // eslint-disable-next-line no-undef
  const cp = new Cinetpay(config);

  const uniqId = 'TEST_ID';
  cp.checkPayStatus(uniqId)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  expect(cp);
});
