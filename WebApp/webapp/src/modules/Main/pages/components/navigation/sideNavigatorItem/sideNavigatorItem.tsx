import classNames from 'classnames';
import { NavigationItem } from '../../navigationSource';
import { useNavigation } from '../../hooks/context/navigationContext';
import './sideNavigatorItem.scss';

export function SideNavigatorItem(item: NavigationItem) {
    const { current, setNavigation } = useNavigation();
    return (
        <section
            id={item.navigation}
            className={'side-navigator__nav-item'}>
            <div
                className={classNames(
                    'bubble',
                    {
                        'bubble_active': current === item.navigation,
                    })}
                onClick={() => setNavigation(item.navigation)}
            >
            </div>
            <p
                className={'text'}
            >
                {item.title}
            </p>
        </section>
    );
}