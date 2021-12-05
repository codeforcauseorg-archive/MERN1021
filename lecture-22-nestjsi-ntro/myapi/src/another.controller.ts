import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/another")
export class AnotherController {
  constructor(private readonly appService: AppService) {
    
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
