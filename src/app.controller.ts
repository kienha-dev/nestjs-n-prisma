import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller()
export class AppController {
  @Get('/health-check')
  checkHealth(@Res() res: Response): void {
    res.status(HttpStatus.OK).send();
  }
}
