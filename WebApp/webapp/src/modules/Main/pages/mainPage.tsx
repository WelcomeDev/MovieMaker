import { NavigationProvider, useNavigation } from './components/hooks/context/navigationContext';
import { Header } from './components/header/header';
import { Navigation } from './main/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';
import { HelloPage } from './main/hello/helloPage';
import './mainPage.scss';
import { EventStoreProvider } from '../../Events/hooks/context/eventStoreProvider';
import { WorksPage } from './main/works/worksPage';
import { useEffect } from 'react';

const { HELLO, CONTACTS, ABOUT_AUTHOR, WORKS } = Navigation;

function Content() {
    const { current } = useNavigation();
    useEffect(()=>{
        console.log(current);
    },[current])
    switch (current) {
    case HELLO:
        return <HelloPage/>;
    case ABOUT_AUTHOR:
        return <></>;
    case WORKS:
        return <WorksPage/>;
    case CONTACTS:
        return <></>;
    default:
        throw new Error('');
    }
}

export function MainPage() {
    return (
        <NavigationProvider>
            <EventStoreProvider>
                <div className={'wrapper'}>
                    <Header/>
                    <SideNavigator/>
                    <Content/>
                </div>
            </EventStoreProvider>
        </NavigationProvider>
    );
}