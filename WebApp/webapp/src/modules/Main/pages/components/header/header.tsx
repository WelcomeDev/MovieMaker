import './header.scss';
import { navigationSource } from '../hooks/navigationSource';
import appIcon from '../../assets/icon-movie-maker.png';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Header = memo(() => {
    console.log('Header rerendered');
    return (
        <header
            className={'header'}
        >
            <div
                className={'container'}
            >
                <nav
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
                            navigationSource.map(item => <Link
                                key={item.navigation}
                                to={item.navigation.toString()}
                                className={'header__navigation__item'}
                            >
                                {item.title}
                            </Link>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
});