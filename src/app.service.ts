/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Welcome to CI/CD Intro exercise. Let's get it done!!!";
  }

  getCountry(): string {
    return 'I am from Nigeria, Ogun state to be precise.';
  }
}
