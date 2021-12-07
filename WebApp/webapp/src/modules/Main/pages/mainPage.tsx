import { NavigationProvider, useNavigation } from './components/hooks/context/navigationContext';
import { Header } from './components/header/header';
import { Navigation } from './main/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';

const {HELLO, CONTACTS, ABOUT_AUTHOR, WORKS} = Navigation;

function Content(){
    const {current} = useNavigation();
    switch (current){
    case HELLO:
        break;
    case ABOUT_AUTHOR:
        break;
    case WORKS:
        break;
    case CONTACTS:
        break;

    }
}

export function MainPage(){
    return (
        <NavigationProvider>
            <Header/>
            <SideNavigator/>
        </NavigationProvider>
    )
}