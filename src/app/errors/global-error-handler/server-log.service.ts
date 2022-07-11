import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';

const api_url = 'http://localhost:7000';

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(private http: HttpClient) { }

  log(serverLog: ServerLog) {
    return this.http.post(api_url + '/infra/log', serverLog);
  }
}
