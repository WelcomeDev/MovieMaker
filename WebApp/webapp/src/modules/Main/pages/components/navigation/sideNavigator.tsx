import './sideNavigator.scss';
import { navigationSource } from '../header/navigationSource';
import { useNavigation } from '../hooks/context/navigationContext';
import classNames from 'classnames';

export function SideNavigator() {
    const { current, setNavigation } = useNavigation();
    return (
        <section
            className={'side-navigator'}
        >
            {
                navigationSource.map(item => <div
                    className={classNames(
                        'side-navigator__nav-item',
                        {
                            'side-navigator__nav-item_active': current === item.navigation,
                        })}
                    title={item.title}
                    onClick={() => setNavigation(item.navigation)}
                >
                </div>)
            }
        </section>
    );
}