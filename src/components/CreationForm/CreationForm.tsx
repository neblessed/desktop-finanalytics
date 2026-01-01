import { useState } from 'react';
import Button from '../common/Button/Button';
import DatePicker from '../common/DatePicker/DatePicker';
import DropdownSelect from '../common/DropdownSelect/DropdownSelect';
import Field from '../common/Field/Field';
import './CreationForm.css';
import { useAppDispatch } from '../../hooks/redux';
import { addOperation } from '../../store/slices/operations.slice';
import { setMenu } from '../../store/slices/menu.slice';
import ExpenseTab from '../Expense/tabs/ExpenseTab';
import type { TransactionType } from '../../types/TransactionType';

const formValidation = (category: string, amount: number) => {
   if (category.length === 0 && amount > 0) {
      throw new Error('Category missed!');
   }

   if (category.length > 0 && amount <= 0) {
      throw new Error('Amount must be positive number!');
   }

   if (category.length === 0 && amount <= 0) {
      throw new Error('Category missed. Amount must be positive number!');
   }
};

function CreationForm() {
   const dispatch = useAppDispatch();
   const [date, setDate] = useState<string>('');
   const [category, setCategory] = useState<string>('');
   const [amount, setAmount] = useState<number>(0);
   const [transactionType, setTransactionType] =
      useState<TransactionType>('spendings');
   const [error, setError] = useState('');

   return (
      <>
         <ExpenseTab
            transactionType={transactionType}
            setTransactionType={setTransactionType}
         />
         {error && <p className="creation_form_error_text">❌ {error}</p>}
         <form className="creation_form">
            <DatePicker handleDateChange={setDate} />
            <DropdownSelect
               label="Category"
               placeholder="Select the category"
               category={category}
               handleCategoryChange={setCategory}
               options={[
                  { name: 'Salary', iconPath: './categories/salary.svg' },
                  { name: 'Rent', iconPath: './categories/rent.svg' },
                  {
                     name: 'Savings',
                     iconPath: './categories/savings.svg',
                  },
                  {
                     name: 'Groceries',
                     iconPath: './categories/groceries.svg',
                  },
                  {
                     name: 'Transfers',
                     iconPath: './categories/salary.svg',
                  },
                  { name: 'Taxi', iconPath: './categories/rent.svg' },
               ]}
            />
            <Field
               label="Amount"
               inputType="number"
               placeholder="Type amount"
               fontWeight={500}
               value={amount > 0 ? amount : ''}
               changesHandler={(e) => setAmount(Number(e.target.value))}
            />
            <div className="create_btn">
               <Button
                  title="Save"
                  type="submit"
                  onClick={(e) => {
                     e.preventDefault();

                     try {
                        formValidation(category, amount);
                        dispatch(
                           addOperation({
                              id: new Date().toISOString(),
                              category,
                              amount,
                              date,
                              type: transactionType,
                           }),
                        );

                        dispatch(setMenu('home'));
                     } catch (e) {
                        setError((e as Error).message);
                     }
                  }}
               />
            </div>
         </form>
      </>
   );
}

export default CreationForm;
