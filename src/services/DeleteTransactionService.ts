import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

// import AppError from '../errors/AppError';
interface Request {
  id: string;
}
class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionRepository.findOne({ where: { id } });
    if (!transaction) {
      throw new AppError('transaction not exists');
    }
    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
