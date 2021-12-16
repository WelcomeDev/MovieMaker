import './sideNavigator.scss';
import { navigationSource } from '../hooks/navigationSource';
import { SideNavigatorItem } from './sideNavigatorItem/sideNavigatorItem';

export const SideNavigator = () => {
    console.log('Side navigator rerendered')
    return (
        <section
            className={'side-navigator'}
        >
            {
                navigationSource.map(item => <SideNavigatorItem {...item}/>)
            }
        </section>
    );
};