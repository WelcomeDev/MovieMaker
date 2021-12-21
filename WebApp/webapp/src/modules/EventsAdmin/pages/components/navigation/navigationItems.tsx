import './navigationItems.scss';
import { adminNavigation } from '../hooks/adminNavigationSource';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { memo, useState } from 'react';
import classNames from 'classnames';

export const NavigationItems = memo(() => {

    const [expand, setExpand] = useState(true);

    return (
        <nav
            className={'side-navigation-items'}
            onClick={() => setExpand(!expand)}
        >
            {
                adminNavigation.map(item => (
                    <Link
                        to={item.navigation}
                        title={item.title}
                        key={item.navigation}
                        className={classNames(
                            'nav-item',
                            expand ? 'expanded' : '')}>
                        <Icon
                            icon={item.icon}
                            className={'nav-item__icon'}
                        />
                        <p>
                            {item.title}
                        </p>
                    </Link>
                ))
            }
        </nav>
    );
});