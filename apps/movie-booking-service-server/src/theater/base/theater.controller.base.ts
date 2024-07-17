/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TheaterService } from "../theater.service";
import { TheaterCreateInput } from "./TheaterCreateInput";
import { Theater } from "./Theater";
import { TheaterFindManyArgs } from "./TheaterFindManyArgs";
import { TheaterWhereUniqueInput } from "./TheaterWhereUniqueInput";
import { TheaterUpdateInput } from "./TheaterUpdateInput";

export class TheaterControllerBase {
  constructor(protected readonly service: TheaterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Theater })
  async createTheater(
    @common.Body() data: TheaterCreateInput
  ): Promise<Theater> {
    return await this.service.createTheater({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Theater] })
  @ApiNestedQuery(TheaterFindManyArgs)
  async theaters(@common.Req() request: Request): Promise<Theater[]> {
    const args = plainToClass(TheaterFindManyArgs, request.query);
    return this.service.theaters({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Theater })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async theater(
    @common.Param() params: TheaterWhereUniqueInput
  ): Promise<Theater | null> {
    const result = await this.service.theater({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Theater })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTheater(
    @common.Param() params: TheaterWhereUniqueInput,
    @common.Body() data: TheaterUpdateInput
  ): Promise<Theater | null> {
    try {
      return await this.service.updateTheater({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Theater })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTheater(
    @common.Param() params: TheaterWhereUniqueInput
  ): Promise<Theater | null> {
    try {
      return await this.service.deleteTheater({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}