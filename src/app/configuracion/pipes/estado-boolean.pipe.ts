import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: "estadoBooleanPipe"})
export class EstadoBooleanPipe implements PipeTransform {
    
    transform(value: number): boolean {
        return value == 1 ? true : false;
    }
}