import { AutoMap } from '@automapper/classes';

export class UserDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  email: string;
}
