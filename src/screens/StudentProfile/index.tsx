//@ts-nocheck
import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import IconProject from '../../assets/picapau.png';

import {HeaderProfile} from '../../components/HeaderProfile';
import {Background} from '../../components/Background';
import {BodyStudentProfile} from '../../components/BodyStudentProfile';

interface User {
    avatar: string,
    name: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string],
    projects: [string],
    descr: string
}

interface props {
    userId: String
}


export function StudentProfile({ userId }: props) {
    const [ user, setUser ] = useState<User>();

    const navigation = useNavigation();

    async function loadUser() {
        const userDoc = await UserHelper.get(userId);
        setUser(userDoc);
    };

    useEffect(() => {
        loadUser();
    }, []);

    if( !user ) return <></>;

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <HeaderProfile
                        name= {user.name}
                        campus={user.course +" - "+ user.campus +" - "+ user.city}
                        image={IconProject}
                        cloakProfessor
                    />
                </View>
                <View style={styles.container3}>
                    <BodyStudentProfile
                        area='Areas de interesse?'
                        interest={data}
                    ></BodyStudentProfile>
                </View>
            </View>
        </ Background>
    );
}
