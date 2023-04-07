import { memo } from 'react';
import { dataResult } from '~/component/LayOuts/DefaultLayout/Header/header';

function ApiContent() {
    console.log(dataResult);

    // return (
    //     <div className={cx('content')} ref={mainRef}>
    //         <h3>Your Search Results:</h3>
    //         <div className={cx('meal')}>
    //             {dataResult.length !== 0 &&
    //                 dataResult.map((item) => {
    //                     return (
    //                         <div
    //                             key={item.idMeal}
    //                             className={cx('meal-item')}
    //                             data-index={item.idMeal}
    //                         >
    //                             <div className={cx('meal-img')}>
    //                                 <img
    //                                     src={item.strMealThumb}
    //                                     alt="food"
    //                                     className={cx('img-food')}
    //                                 />
    //                             </div>
    //                             <div className={cx('meal-name')}>
    //                                 <h3>{item.strMeal}</h3>
    //                                 <a className={cx('recipe-btn')}>
    //                                     Get Recipe
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     );
    //                 })}
    //         </div>
    //     </div>
    // );
}

export default memo(ApiContent);
