import './sideNavigator.scss';
import { navigationSource } from '../header/navigationSource';
import { SideNavigatorItem } from './sideNavigatorItem/sideNavigatorItem';

export function SideNavigator() {
    return (
        <section
            className={'side-navigator'}
        >
            {
                navigationSource.map(item => <SideNavigatorItem {...item}/>)
            }
        </section>
    );
}