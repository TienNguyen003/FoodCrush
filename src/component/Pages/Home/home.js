import { memo } from 'react';
import HomeMeals from '~/component/component/MealCategories/homeMeals';
import MealSearch from '~/component/component/MealSearch/mealsearch';

function Home({ value }) {
    return (
        <>
            <HomeMeals />
            <MealSearch value={value} />
        </>
    );
}

export default memo(Home);
