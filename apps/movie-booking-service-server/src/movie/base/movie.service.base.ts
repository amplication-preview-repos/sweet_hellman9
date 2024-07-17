/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Movie as PrismaMovie } from "@prisma/client";

export class MovieServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MovieCountArgs, "select">): Promise<number> {
    return this.prisma.movie.count(args);
  }

  async movies(args: Prisma.MovieFindManyArgs): Promise<PrismaMovie[]> {
    return this.prisma.movie.findMany(args);
  }
  async movie(args: Prisma.MovieFindUniqueArgs): Promise<PrismaMovie | null> {
    return this.prisma.movie.findUnique(args);
  }
  async createMovie(args: Prisma.MovieCreateArgs): Promise<PrismaMovie> {
    return this.prisma.movie.create(args);
  }
  async updateMovie(args: Prisma.MovieUpdateArgs): Promise<PrismaMovie> {
    return this.prisma.movie.update(args);
  }
  async deleteMovie(args: Prisma.MovieDeleteArgs): Promise<PrismaMovie> {
    return this.prisma.movie.delete(args);
  }
}