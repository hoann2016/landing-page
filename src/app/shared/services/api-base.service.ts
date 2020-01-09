import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpEvent } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiBaseService {
    private API_URL_PATH = '/';
    private SEGEMENT = 'api/v1/';
    private API_URL = this.API_URL_PATH + this.SEGEMENT;
    
    constructor(protected http: HttpClient) { }

    protected get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.API_URL + url);
    }

    protected post<T, V>(url: string, data: V): Observable<T> {
        return this.http.post<any>(this.API_URL + url, data);
    }

    protected postWithProgress<T, V>(url: string, data: V, options: any): Observable<HttpEvent<T>> {
        return this.http.post<any>(this.API_URL + url, data, options);
    }

    protected put<T, V>(url: string, data: V): Observable<T> {
        return this.http.put<T>(this.API_URL + url, data);
    }
    
    protected patch<T, V>(url: string, data: V): Observable<T> {
        return this.http.patch<T>(this.API_URL + url, data);
    }

    protected delete<T>(url: string, itemId: number | string): Observable<T> {
        return this.http.delete<T>(this.API_URL + url + '/' + itemId);
    }

    protected revertSlugToUrl(endPointUrl: string, slugParamsObject?: Object): string {
        return `${ slugParamsObject ? endPointUrl + '?' + this.encodeData(slugParamsObject) : endPointUrl }`
    }

    private encodeData<TD>(data: TD): string {
        return Object.keys(data).map(function(key) {
            return [key, data[key]].map(encodeURIComponent).join("=");
        }).join("&");
    }

    protected getOutsideLudiinoServer(url: string): Observable<any> {
        return this.http.get(url);
    }
}