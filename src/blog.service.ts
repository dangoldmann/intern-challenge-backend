import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  getAllBlogs(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  getBlog(id: string): Promise<Blog> {
    return this.blogsRepository.findOne({ where: { id: parseInt(id) } });
  }

  createBlog(blogData: CreateBlogDto): Promise<Blog> {
    const blog = this.blogsRepository.create(blogData);
    return this.blogsRepository.save(blog);
  }

  deleteBlog(id: string): Promise<any> {
    return this.blogsRepository.delete({ id: parseInt(id) });
  }
}
