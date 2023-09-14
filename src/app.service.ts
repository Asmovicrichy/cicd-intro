import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to CI/CD Intro exercise!!!';
  }

  getCountry(): string {
    return 'I am from Nigeria';
  }
}
