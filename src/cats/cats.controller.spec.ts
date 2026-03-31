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

  describe('findOne', () => {
    it('should return a cat by id', () => {
      const params = { id: '1' };
      expect(controller.findOne(params)).toBe('This action returns a #1 cat');
    });
  });

  describe('root', () => {
    it('should return "This action returns all cats"', () => {
      const expected = { message: 'This action returns all cats' };
      expect(controller.findAll()).toStrictEqual(expected);
    });
  });

  describe('create', () => {
    it('should return "This action adds a new cat"', () => {
      expect(controller.create()).toBe('This action adds a new cat');
    });
  });
});
