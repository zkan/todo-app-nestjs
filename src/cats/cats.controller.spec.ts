import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: {
            create: jest.fn().mockReturnValue(undefined),
            findAll: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const mockCats: Cat[] = [{ name: 'Whiskers', age: 3, breed: 'Persian' }];
      (service.findAll as jest.Mock).mockResolvedValue(mockCats);

      const result = await controller.findAll();
      expect(result).toEqual(mockCats);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a cat by id', () => {
      const params = { id: '1' };
      expect(controller.findOne(params)).toBe('This action returns a #1 cat');
    });
  });

  describe('create', () => {
    it('should call the service create method', async () => {
      const mockCat: Cat = { name: 'Whiskers', age: 3, breed: 'Persian' };
      await controller.create(mockCat);
      expect(service.create).toHaveBeenCalledWith(mockCat);
    });
  });
});
