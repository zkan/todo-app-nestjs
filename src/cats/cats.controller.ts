import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): { message: string } {
    return { message: 'This action returns all cats' };
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
