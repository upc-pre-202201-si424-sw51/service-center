import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { UserEntity } from '../../../infrastructure/persistence/entities/user.entity';
import { User } from '../../../domain/entities/user.model';
import { UserDto } from '../dto/user.dto';

export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, User, UserDto);
      createMap(mapper, User, UserEntity);
    };
  }
}
