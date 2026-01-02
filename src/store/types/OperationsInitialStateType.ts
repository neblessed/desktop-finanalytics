import type { Category } from '../../types/CategoryType';
import type { OperationType } from '../../types/OperationType';
import type { Totals } from '../../types/TotalsType';

export type OperationsInitialStateType = {
   /**
    * Список операций
    */
   operations: OperationType[];
   /**
    * Значение трат, доходов и баланса
    */
   totals: Totals;
   /**
    * Список категорий
    */
   categories: Category[];
};
