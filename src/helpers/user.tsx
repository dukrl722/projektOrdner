import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


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

function parseUser(userDoc: any): User {
    return {
        avatar: userDoc.avatar,
        name: userDoc.name,
        city: userDoc.city,
        campus: userDoc.campus,
        course: userDoc.course,
        workedAreas: userDoc.workedAreas,
        projects: userDoc.projects,
        descr: userDoc.descr
    };
}

async function getCurrent(): Promise<User | undefined> {
    const authUser = auth().currentUser;
    
    if (!!authUser) {
        return firestore()
            .collection('user')
            .where('id', '==', 'F5REVDq')
            .limit(1)
            .get()
            .then(snapshot => {
                const userDoc = { ...snapshot.docs[0].data() };
                return parseUser(userDoc);
            });
    }

    return;
}

async function get(uid: String): Promise<User> {
    return firestore()
        .collection('user')
        .where('id', '==', uid)
        .limit(1)
        .get()
        .then(snapshot => {
            const userDoc = { ...snapshot.docs[0].data() };
            return parseUser(userDoc);
        });
}

const UserHelper = {
    get,
    getCurrent
}

export default UserHelper;