import { prisma } from '../database/prisma/client';
import { CreateBookDto } from '../dto/createUserDto';

class CreateBookDTO {
  title:string
}

class BookRepository {
  findAll() {
    return prisma.book.findMany();
  }

  findById(id: number) {
    return prisma.book.findFirst({
      where: {
        id: id,
      },
    });
  }

  save(book: CreateBookDto) {
    return prisma.book.create({
      data: book,
    });
  }

  deleteById(id: number) {
    return prisma.book.delete({
      where: {
        id: id,
      },
    });
  }

  updateById(id: number, book:){
    return prisma.book.update({
        where:{id: id}
    })
  }
}

export default new BookRepository();
