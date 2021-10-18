import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  category,
  Prisma
} from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async category(categoryWhereUniqueInput: Prisma.categoryWhereUniqueInput): Promise<category | null> {
    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
    });
  }

  async categories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.categoryWhereUniqueInput;
    where?: Prisma.categoryWhereInput;
    orderBy?: Prisma.categoryOrderByWithRelationInput;
  }): Promise<category[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCategory(data: Prisma.categoryCreateInput): Promise<category> {
    return this.prisma.category.create({
      data,
    });
  }

  async updateCategory(params: {
    where: Prisma.categoryWhereUniqueInput;
    data: Prisma.categoryUpdateInput;
  }): Promise<category> {
    const { where, data } = params;
    return this.prisma.category.update({
      data,
      where,
    });
  }

  async deleteCategory(where: Prisma.categoryWhereUniqueInput): Promise<category> {
    return this.prisma.category.delete({
      where,
    });
  }
}


