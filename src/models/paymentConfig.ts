/* eslint-disable @typescript-eslint/no-explicit-any */
export class PaymentConfig {
  transaction_id: string;
  amount: number;
  currency: 'XOF' | 'XAF' | 'CDF' | 'GNF';
  description?: string;
  customer_id?: string;
  customer_name?: string;
  customer_surname?: string;
  channels: 'ALL' | 'MOBILE_MONEY' | 'CREDIT_CARD';
  metadata?: any;
  customer_phone_number?: string;
  customer_email?: string;
  customer_address?: string;
  customer_city?: string;
  customer_country?: string;
  customer_state?: string;
  customer_zip_code?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(obj: any = {}) {
    this.transaction_id = obj.transaction_id;
    this.amount = obj.amount;
    this.currency = obj.currency;
    this.description = obj.description;
    this.customer_id = obj.customer_id;
    this.customer_name = obj.customer_name;
    this.customer_surname = obj.customer_surname;
    this.channels = obj.channels;
    this.metadata = obj.metadata;
    this.customer_phone_number = obj.customer_phone_number;
    this.customer_email = obj.customer_email;
    this.customer_address = obj.customer_address;
    this.customer_city = obj.customer_city;
    this.customer_country = obj.customer_country;
    this.customer_state = obj.customer_state;
    this.customer_zip_code = obj.customer_zip_code;
  }
}
