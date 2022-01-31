/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import axios from 'axios';
import { CinetPayConfig, PaymentConfig } from './models';
import qs = require('querystring');

const baseUrl = 'https://api-checkout.cinetpay.com/v2/';

export class Cinetpay {
  config = new CinetPayConfig();

  /**
   * Initialisation de la librairie
   *
   * @param {Array} CinetPayConfig Les informations d'initialisation de la librairie
   */
  constructor(config: CinetPayConfig) {
    this.config = config;
  }

  /**
   * Déclancher le processus de paiement
   *
   * @param {Array} paymentConfig Les informations pour effecuter le paiement
   * @returns {any} Résultat de la requête
   */
  makePayment = async (paymentConfig: PaymentConfig) => {
    try {
      axios({
        url: baseUrl + 'payment',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({ ...paymentConfig, ...this.config }),
        timeout: 5000,
      })
        .then((response: any) => {
          if (response.status === 200 && response.data.code === '201' && response.data.data) {
            localStorage.setItem('payment', JSON.stringify(response.data));
            window.location.href = response.data.data.payment_url;
          } else {
            return response.data;
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    } catch (err) {
      throw err;
    }
  };

  /**
   * Determine le status de la transaction
   *
   * @param {String} transaction_id Identifiant de la transaction ou payment_token obtenu lors de l’initialisation du paiement
   * @returns {any} Résultat de la requête
   */
  checkPayStatus = async (transaction_id: string) => {
    if (!transaction_id) {
      throw new TypeError('transaction_id or payment_token is required');
    }
    try {
      axios({
        url: baseUrl + 'payment/check',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({ transaction_id, ...this.config, token: transaction_id }),
        timeout: 5000,
      })
        .then((response: any) => {
          if (response.status === 200 && response.data.code === '00' && response.data.data) {
            localStorage.setItem(transaction_id, JSON.stringify(response.data.data));
            return response.data;
          } else {
            return response.data;
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    } catch (err) {
      throw err;
    }
  };
}
