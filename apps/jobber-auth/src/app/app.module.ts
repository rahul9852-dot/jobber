import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from './users/models/user.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule, // Ensure UsersModule is imported
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
