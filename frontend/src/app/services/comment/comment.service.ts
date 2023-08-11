import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {Comment} from "../../models/comment.model";

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  baseUri: string = 'http://localhost:4000/comments';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  addComment(data: Comment): Observable<any> {
    return this._http
      .post(this.baseUri, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  updateComment(id: string, data: Comment): Observable<Comment> {
    return this._http
      .put<Comment>(`${this.baseUri}/${id}`, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  getCommentList(): Observable<Comment[]> {
    return this._http.get<Comment[]>(this.baseUri);
  }

  getCommentListById(id: string): Observable<Comment> {
    return this._http
      .get<Comment>(`${this.baseUri}/${id}`, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  getCommentListByFlightId(flightId: string): Observable<Comment[]> {
    return this._http
      .get<Comment[]>(`${this.baseUri}/byflightid/${flightId}`, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  deleteComment(id: string): Observable<Comment> {
    return this._http
      .delete<Comment>(`${this.baseUri}/${id}`, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
