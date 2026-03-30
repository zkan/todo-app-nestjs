import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return "This action returns all cats"', () => {
      expected = { message: 'This action returns all cats' };
      expect(controller.findAll()).toStrictEqual(expected);
    });
  });
});
