import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import UserHelper from '../../helpers/user';

export function LoadApp() {

    const navigation = useNavigation();

    async function loadUser() {
        const currentUser = await UserHelper.getCurrent();
        
        if (!!currentUser) {
            //@ts-ignore
            navigation.navigate('Home');
        } else {
            //@ts-ignore
            navigation.navigate('Select');
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    return <></>;
}