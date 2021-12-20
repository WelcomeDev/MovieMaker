import './loadingFallback.scss';
import Loader from 'react-loader-spinner';

export function LoadingFallback() {
    return (
        <div
            className={'loading-fallback'}
        >
            <p>
                Loading...
            </p>
            <Loader
                type={'MutatingDots'}
            />
        </div>
    );
}