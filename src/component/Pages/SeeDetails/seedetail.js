import classNames from 'classnames/bind';
import Categorie from '~/component/component/Apis/ApiCategories/categorie';
import styles from './seedetail.module.scss';

const cx = classNames.bind(styles);

function SeeDetails() {
    return (
        <div className={cx('see-detail')}>
            <Categorie quantity={40} />
        </div>
    );
}

export default SeeDetails;
