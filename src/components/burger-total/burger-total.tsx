import { FC } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { burgerConstructorIngredients } from '../../services/selectors/burger-constructor';
import { TConstructorIngredient, TConstructorIngredients } from '../../declarations/types';

type TBurgerTotal = {
  constructorList: TConstructorIngredients;
  bun: TConstructorIngredient;
};

const BurgerTotal: FC = () => {
  const { constructorList, bun }: TBurgerTotal = useSelector(burgerConstructorIngredients);
 
    const bunPrice = bun ? bun.ingredient.price : 0;

  const sum = constructorList
  ? constructorList.reduce((acc: number, curr: TConstructorIngredient) => acc + curr.ingredient.price, 0) + bunPrice * 2 
  : 0;

  return (
    <div>
      <p className="text text_type_digits-medium">
        {sum}<CurrencyIcon type="primary" />
      </p>
    </div>
  );
}

export default BurgerTotal