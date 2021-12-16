import './header.scss';
import { navigationSource } from '../hooks/navigationSource';
import appIcon from '../../assets/icon-movie-maker.png';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Header = memo(() => {
    console.log('Header rerendered');
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
                            navigationSource.map(item => <Link
                                key={item.navigation}
                                to={item.navigation}
                            >
                                {item.title}
                            </Link>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
});