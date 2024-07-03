import { Router } from 'express';

const router = Router();

router.get('/livros');
router.get('/livro/:id');
router.post('/livro');
router.put('/livro/:id');
router.delete('/livro/:id');

export { router };
