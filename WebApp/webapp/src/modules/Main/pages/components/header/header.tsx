import './header.scss';
import { navigationSource } from '../navigationSource';
import { useNavigation } from '../hooks/context/navigationContext';
import appIcon from '../../assets/icon-movie-maker.png';
import { memo } from 'react';

export const Header = memo(() => {
    console.log('Header rerendered');
    const { setNavigation } = useNavigation();
    return (
        <nav
            className={'header'}
        >
            <div
                className={'container'}
            >
                <div
                    className={'header-outer-wrapper'}
                >
                    <img
                        src={appIcon}
                        alt=""
                        className={'icon'}
                    />
                    <ul
                        className={'header__navigation'}
                    >
                        {
                            navigationSource.map(item => <li
                                onClick={() => setNavigation(item.navigation)}
                            >
                                {item.title}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
});