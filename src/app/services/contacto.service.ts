import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contacto } from '../models/contacto';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = environment.ConexionWebApiProxy + 'contactos' + "/";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
  post(obj: Contacto) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
