import './sideNavigator.scss';
import { navigationSource } from '../navigationSource';
import { SideNavigatorItem } from './sideNavigatorItem/sideNavigatorItem';
import { memo } from 'react';

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