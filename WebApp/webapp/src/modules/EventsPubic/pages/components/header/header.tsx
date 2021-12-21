import './header.scss';
import appIcon from '../../../../Main/pages/assets/icon-movie-maker.png';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { publicNavigationSource } from '../../hooks/publicNavigationSource';

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
                            publicNavigationSource.map(item => <Link
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