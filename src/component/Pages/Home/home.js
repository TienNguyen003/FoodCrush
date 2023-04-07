import { memo } from 'react';
import MealContent from '~/component/component/MainContentMeal/mealcontent';
import HomeMeals from '~/component/component/MealCategories/homeMeals';

function Home({ mes }) {
    return (
        <>
            <HomeMeals />
            <MealContent mes={mes} />
        </>
    );
}

export default memo(Home);
