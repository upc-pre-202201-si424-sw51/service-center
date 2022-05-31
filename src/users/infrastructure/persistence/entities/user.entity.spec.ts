import { UserEntity } from './user.entity';

describe('UsersEntity', () => {
  it('should be defined', () => {
    expect(new UserEntity()).toBeDefined();
  });
});
