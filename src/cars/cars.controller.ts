import { Controller,Get,Param,HttpCode, Post, Header,Redirect } from '@nestjs/common';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {

    constructor(private CarsService:CarsService){}

    @Get(':nome/:marca/:preco')
    create(@Param()params:any){
        return this.CarsService.create(params)
    }

    @Get('all')
    findAll(){
        return this.CarsService.findAll()
    }
    
}
