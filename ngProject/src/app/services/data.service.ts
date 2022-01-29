import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { concat, of, throwError } from 'rxjs';
import { NotFoundError } from '../common/not-fount.error';
import { BadInput } from '../common/bad-input';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(@Inject(String) private url: string, private http: HttpClient) { }

    get() {
        return this.http.get(this.url)
            .pipe(
                catchError(this.handleError)
            );
    }

    create(resource: any) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError)); // Catch error, try to use catch 
    }

    update(resource: any) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRed: true }))
            .pipe(catchError(this.handleError));
    }

    delete(resource: any) {
        // return concat(of(7), throwError(new AppError()));
        return this.http.delete(this.url + '/' + resource.id)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return concat(of(7), throwError(new BadInput(error.json())));
        // return throwError(new BadInput(error.json()));
        if (error.status === 404)
            return concat(of(7), throwError(new NotFoundError()));
        // return throwError(new NotFoundError());

        return concat(of(7), throwError(new AppError(error)));
        // return throwError(new AppError(error));
    }
}
