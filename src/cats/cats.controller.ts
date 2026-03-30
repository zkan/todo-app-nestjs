import { Controller, Get } from '@nestjs/common';

class MessageDto {
  message: string;
}

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): MessageDto {
    return { message: 'This action returns all cats' };
  }
}
