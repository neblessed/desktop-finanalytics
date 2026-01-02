import { useState } from 'react';
import Button from '../common/Button/Button';
import Field from '../common/Field/Field';
import './CategoriesForm.css';
import { useAppDispatch } from '../../hooks/redux';
import { addCategory } from '../../store/slices/operations.slice';
import { setMenu } from '../../store/slices/menu.slice';

const categoriesIcons = [
   './categories/food.svg',
   './categories/transport.svg',
   './categories/medicine.svg',
   './categories/groceries.svg',
   './categories/rent.svg',
   './categories/gift.svg',
   './categories/savings.svg',
   './categories/entertainment.svg',
];

const formValidation = (name: string, icon: string) => {
   if (name.length === 0) {
      throw new Error('Name must be setted!');
   }

   if (icon.length === 0) {
      throw new Error('Please, choose the icon!');
   }
};

function CategoriesForm() {
   const dispatch = useAppDispatch();
   const [name, setName] = useState('');
   const [icon, setIcon] = useState('');
   const [error, setError] = useState<string | null>(null);

   return (
      <>
         <h3>Add Categories</h3>
         {error && <p className="categories_form_error_text">❌ {error}</p>}
         <form className="new_category__form">
            <Field
               label="Category"
               placeholder="New category title.."
               value={name}
               changesHandler={(e) => setName(e.target.value)}
            />
            <div className="new_category__icons_feed">
               {categoriesIcons.map((categoryIcon) => {
                  return (
                     <img
                        className={`category_icon ${icon == categoryIcon ? 'category_selected' : ''}`}
                        src={categoryIcon}
                        key={categoryIcon}
                        onClick={() => {
                           setIcon(categoryIcon);
                           console.log(icon === categoryIcon);
                        }}
                     />
                  );
               })}
            </div>
            <Button
               title="Save"
               onClick={(e) => {
                  e.preventDefault();

                  try {
                     formValidation(name, icon);
                     dispatch(addCategory({ name, iconPath: icon }));
                     dispatch(setMenu('home'));
                  } catch (e) {
                     setError((e as Error).message);
                  }
               }}
            />
         </form>
      </>
   );
}

export default CategoriesForm;
