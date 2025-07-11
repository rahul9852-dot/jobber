import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.dto';
import { create } from 'domain';

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly userService: UsersService, // Assuming UserService is defined and injected
    ) { }

    @Mutation(() => User)
    async createUser(@Args('createUserInput') CreateUserInput: CreateUserInput): Promise<User> {
        return this.userService.createUser(CreateUserInput);
    }
    @Query(() => [User], { name: 'users' })
    async getUsers() {
        return this.userService.getUsers();
    }
}
