import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/blog.dto';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs() {
    return await this.blogService.getAllBlogs();
  }

  @Get(':id')
  async getBlog(@Param('id') id: string) {
    return await this.blogService.getBlog(id);
  }

  @Post()
  async createBlog(@Body() blogData: CreateBlogDto) {
    return await this.blogService.createBlog(blogData);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return await this.blogService.deleteBlog(id);
  }
}
