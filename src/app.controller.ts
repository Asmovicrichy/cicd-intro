import { Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/country')
  getCountry(): string {
    return this.appService.getCountry();
  }

  @Get('/bio')
  getBio(): string {
    return this.appService.getBio();
  }
}
