import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "primeng/components/common/messageservice";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private messageService: MessageService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
            .pipe(
                catchError((error) => this.handleError(error))
            );
    }

    private handleError(error: HttpErrorResponse): Observable<any> {

        let mensaje = error.name;
        let descripcion = error.message;

        if(error.status != 0) {
            mensaje = error.error.mensaje;
            descripcion = error.error.descripcion;
        }

        this.messageService.add({severity:'error', summary:mensaje, detail:descripcion});

        return throwError({mensaje: mensaje, descripcion: descripcion});
    }
    
}