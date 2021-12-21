import classNames from 'classnames';
import './sideNavigatorItem.scss';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItem } from '../../../../../General/model/navigationItem';

export function SideNavigatorItem(item: NavigationItem) {
    const location = useLocation();
    return (
        <section
            id={item.navigation}
            className={'side-navigator__nav-item'}>
            <Link
                className={classNames(
                    'bubble',
                    {
                        'bubble_active': location.pathname === item.navigation,
                    })}
                to={item.navigation}
            >
            </Link>
            <p
                className={'text'}
            >
                {item.title}
            </p>
        </section>
    );
}