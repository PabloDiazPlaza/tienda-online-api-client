import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  findAll(@Query('q') query: string) {
    var where = {};
    if (query && query.length > 0) {
      where = {
        OR: [
          {
            name: {
              contains: query,
            },
          },
        ],
      };
    }
    return this.productService.products({
      where: where,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.product({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return null;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return null;
  }
}
