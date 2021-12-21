import './sideNavigator.scss';
import { SideNavigatorItem } from './sideNavigatorItem/sideNavigatorItem';
import { publicNavigationSource } from '../hooks/publicNavigationSource';

export const SideNavigator = () => {
    return (
        <nav
            className={'side-navigator'}
        >
            {
                publicNavigationSource.map(item => <SideNavigatorItem {...item}/>)
            }
        </nav>
    );
};