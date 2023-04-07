import { memo } from 'react';
import HomeMeals from '~/component/component/MealCategories/homeMeals';

function Home() {
    return (
        <>
            <HomeMeals />
        </>
    );
}

export default memo(Home);
