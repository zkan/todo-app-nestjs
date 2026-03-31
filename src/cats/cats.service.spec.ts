import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should add a cat to the array', () => {
      const cat: Cat = { name: 'Whiskers', age: 3, breed: 'Persian' };
      service.create(cat);
      expect(service.findAll()).toContain(cat);
    });
  });

  describe('findAll', () => {
    it('should return an empty array initially', () => {
      expect(service.findAll()).toEqual([]);
    });

    it('should return all cats', () => {
      const cat1: Cat = { name: 'Whiskers', age: 3, breed: 'Persian' };
      const cat2: Cat = { name: 'Mittens', age: 2, breed: 'Siamese' };
      service.create(cat1);
      service.create(cat2);
      expect(service.findAll()).toHaveLength(2);
    });
  });
});
