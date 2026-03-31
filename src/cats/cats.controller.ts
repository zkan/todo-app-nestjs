import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from '../create-cat.dto';

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

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    return 'This action adds a new cat';
  }
}
