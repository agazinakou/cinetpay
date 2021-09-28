/* eslint-disable @typescript-eslint/no-explicit-any */
export class CinetPayConfig {
  apikey: string;
  site_id: number;
  notify_url: string;
  return_url: string;
  lang: 'fr' | 'en';

  constructor(obj: any = {}) {
    this.apikey = obj.apikey;
    this.site_id = obj.site_id;
    this.notify_url = obj.notify_url;
    this.return_url = obj.return_url;
    this.lang = obj.lang;
  }
}
