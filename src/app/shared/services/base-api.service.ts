import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  headers = new HttpHeaders('Content-Type: application/json');
  constructor(private httpClient: HttpClient) {}

  private getUrl(url: string = ''): string {
    return 'http://localhost:3000/' + url;
  }
  public get() {
    return this.httpClient.get(this.getUrl(), {headers: this.headers});
  }
  public post(data) {
    return this.httpClient.post(this.getUrl(), data, {headers: this.headers});
  }
  public put(data, url) {
    console.log('base api');
    console.log(data);
    console.log(this.httpClient.put(this.getUrl(url), data, {headers: this.headers}));
  }
  public delete(url) {
    return this.httpClient.delete(this.getUrl(url), {headers: this.headers});
  }
}
