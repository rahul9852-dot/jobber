import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') input: CreateUserInput) {
    return this.usersService.createUser(input);
  }

  @Query(() => [User], { name: 'users' })
  async users() {
    return this.usersService.getUsers();
  }
}
