import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = httpRequest.clone({
        params: (httpRequest.params ? httpRequest.params : new HttpParams()).set('key', 'Aya')
      });
    return next.handle(newReq);
  }
}