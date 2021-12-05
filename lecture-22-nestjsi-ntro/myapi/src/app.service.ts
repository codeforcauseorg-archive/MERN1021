import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  count = 0;

  getHello(): string {
    this.count += 1;
    return String(this.count);
  }
}
