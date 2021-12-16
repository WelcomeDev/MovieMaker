import './worksPage.scss';
import { useEventStore } from './hooks/eventStoreProvider';
import { EventItem } from './eventItem/eventItem';
import { observer } from 'mobx-react';
// import cameraMan from 'src/modules/Main/pages/assets/services/service_camera_man.svg';
import director from 'src/modules/EventsPubic/pages/works/assets/service_director.svg';
import motionDesign from 'src/modules/EventsPubic/pages/works/assets/service_motion_design.svg';
// import movieMaker from 'src/modules/Main/pages/assets/services/service_movie_maker.svg';

const images = [
    /*cameraMan,*/ director, /*movieMaker,*/ motionDesign,
];

export const WorksPage = observer(() => {
    const { events } = useEventStore();
    // todo: remove!
    // let n;
    // for (let i = 0; i < 1e8; i++) {
    //     n = i * i;
    // }
    return (
        <section
            className={'work-page'}
        >
            <div
                className={'events-bar'}
            >
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