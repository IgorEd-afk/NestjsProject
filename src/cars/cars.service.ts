import { Get, Injectable, Param } from '@nestjs/common';
import { Cars } from './cars.interface';


@Injectable()
export class CarsService {

    private readonly carros: Cars[] = []

    create(car:Cars){
        this.carros.push(car)
    }

    findAll(){
        return this.carros
    }

    
}
