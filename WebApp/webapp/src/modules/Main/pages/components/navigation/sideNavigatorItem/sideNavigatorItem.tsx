import classNames from 'classnames';
import { NavigationItem } from '../../hooks/navigationSource';
import { useEventsNavigation } from '../../hooks/context/eventsNavigationContext';
import './sideNavigatorItem.scss';
import { Link } from 'react-router-dom';

export function SideNavigatorItem(item: NavigationItem) {
    const { location } = useEventsNavigation();
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