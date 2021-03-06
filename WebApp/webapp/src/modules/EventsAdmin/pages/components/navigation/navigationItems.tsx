import './navigationItems.scss';
import { getAdminNavigation } from '../../../hooks/adminNavigationSource';
import { Icon } from '@iconify/react';
import { memo, useState } from 'react';
import classNames from 'classnames';
import { useAuth } from '../../../../Auth/hooks/context/authProvider';
import { ADMIN_NAV } from '../ADMIN_NAV';

export const NavigationItems = memo((props: { update: (nav: ADMIN_NAV) => void }) => {

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
                        <li
                            //@ts-ignore
                            onClick={() => props.update(item.navigation as ADMIN_NAV)}
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
                        </li>
                    ))
            }
        </nav>
    );
});