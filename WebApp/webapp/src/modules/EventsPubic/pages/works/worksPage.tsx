import './worksPage.scss';
import { useEventStore } from '../hooks/context/eventStoreProvider';
import { EventItem } from './eventItem/eventItem';
import { observer } from 'mobx-react';
import Loader from 'react-loader-spinner';
// import cameraMan from 'src/modules/Main/pages/assets/services/service_camera_man.svg';
import director from 'src/modules/EventsPubic/pages/works/assets/service_director.svg';
import motionDesign from 'src/modules/EventsPubic/pages/works/assets/service_motion_design.svg';
// import movieMaker from 'src/modules/Main/pages/assets/services/service_movie_maker.svg';

const images = [
    /*cameraMan,*/ director, /*movieMaker,*/ motionDesign,
];

export const WorksPage = observer(() => {
    const { events, isLoading } = useEventStore();
    return (
        <section
            className={'work-page'}
        >
            <div
                className={'events-bar'}
            >
                {
                    isLoading &&
                    <Loader
                        type={'TailSpin'}
                    />
                }
                {
                    events
                        .filter(item => item.isShown)
                        .map((item, index) =>
                            <EventItem
                                displayType={index % 2 === 0 ? 'light' : 'dark'}
                                key={item.id}
                                event={item}
                                icon={images[index % images.length]}
                            />)
                }
            </div>
        </section>
    );
});