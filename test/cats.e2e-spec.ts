import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('CatsController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/cats (GET)', () => {
    it('should return all cats', () => {
      return request(app.getHttpServer())
        .get('/cats')
        .expect(200)
        .expect({ message: 'This action returns all cats' });
    });
  });

  describe('/cats/:id (GET)', () => {
    it('should return a cat by id', () => {
      return request(app.getHttpServer())
        .get('/cats/1')
        .expect(200)
        .expect('This action returns a #1 cat');
    });
  });

  describe('/cats (POST)', () => {
    it('should create a new cat', () => {
      return request(app.getHttpServer())
        .post('/cats')
        .send({ name: 'test', age: 1, breed: 'mixed' })
        .expect(201)
        .expect('This action adds a new cat');
    });
  });
});
