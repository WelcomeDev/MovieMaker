import classNames from 'classnames';
import { NavigationItem } from '../../hooks/navigationSource';
import './sideNavigatorItem.scss';
import { Link, useLocation } from 'react-router-dom';

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