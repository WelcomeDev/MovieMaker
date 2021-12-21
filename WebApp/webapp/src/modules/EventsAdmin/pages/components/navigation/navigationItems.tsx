import './navigationItems.scss';
import { getAdminNavigation } from '../../../hooks/adminNavigationSource';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { memo, useState } from 'react';
import classNames from 'classnames';
import { useAuth } from '../../../../Auth/hooks/context/authProvider';

export const NavigationItems = memo(() => {

    const [expand, setExpand] = useState(true);
    const { user } = useAuth();

    return (
        <nav
            className={'side-navigation-items'}
            onClick={() => setExpand(!expand)}
        >
            {
                getAdminNavigation(user?.authority)
                    .map(item => (
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