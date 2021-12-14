import { NavigationProvider, useNavigation } from './components/hooks/context/navigationContext';
import { Header } from './components/header/header';
import { Navigation } from './main/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';
import { HelloPage } from './main/hello/HelloPage';
import './mainPage.scss';

const { HELLO, CONTACTS, ABOUT_AUTHOR, WORKS } = Navigation;

function Content() {
    const { current } = useNavigation();
    switch (current) {
    case HELLO:
        return <HelloPage/>;
    case ABOUT_AUTHOR:
        return <></>;
    case WORKS:
        return <></>;
    case CONTACTS:
        return <></>;
    default:
        throw new Error('');
    }
}

export function MainPage() {
    return (
        <NavigationProvider>
           <div className={'wrapper'}>
               <Header/>
               <SideNavigator/>
               <Content/>
           </div>
        </NavigationProvider>
    );
}