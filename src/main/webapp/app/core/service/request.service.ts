import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {HttpParamsPair} from './util/http-params-pair';

@Injectable({
    providedIn: 'root'
})
export class RequestService<DTO> {

    public apiUrl = 'api/';

    constructor(private http: HttpClient) {
    }

    public query(url: string, req?: HttpParamsPair[]): Observable<HttpResponse<DTO[]>> {
        const options: HttpParams = this.createCustomRequestOption(req);
        return this.http.get<DTO[]>(this.apiUrl + url, {params: options, observe: 'response'}).pipe(
            take(1),
            catchError((err: HttpErrorResponse) => {
                const message = `Failed to execute GET request to ${url} .Reason: ${err.message}`;
                console.error(message);
                return throwError(message);
            })
        );
    }

    public post(url: string, body: any): Observable<HttpResponse<DTO>> {
        return this.http.post<any>(this.apiUrl + url, body, {observe: 'response'}).pipe(
            take(1),
            catchError((err: HttpErrorResponse) => {
                const message = `Failed to execute POST request to ${url} .Reason: ${err.message}`;
                console.error(message);
                return throwError(err);
            })
        );
    }

    get(url: string): Observable<HttpResponse<DTO>> {
        return this.http.get<DTO>(this.apiUrl + url, {observe: 'response'}).pipe(
            take(1),
            catchError((err: HttpErrorResponse) => {
                const message = `Failed to execute GET request to ${this.apiUrl}${url} .Reason: ${err.message}`;
                console.error(message);
                return throwError(message);
            })
        );
    }

    private createCustomRequestOption(req?: HttpParamsPair[]): HttpParams {
        let options: HttpParams = new HttpParams();
        if (req && req.length) {
            req.forEach((httpParamsPair: HttpParamsPair) => {
                options = options.append(httpParamsPair.param, httpParamsPair.value);
            });
        }
        return options;
    };
}
