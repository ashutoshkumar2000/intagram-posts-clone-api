import { Test, TestingModule } from '@nestjs/testing';
import { InstaPostResolver } from './insta-post.resolver';

describe('InstaPostResolver', () => {
  let resolver: InstaPostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstaPostResolver],
    }).compile();

    resolver = module.get<InstaPostResolver>(InstaPostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
