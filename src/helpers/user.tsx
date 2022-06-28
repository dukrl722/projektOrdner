import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export interface User {
    id: string,
    uid: string,
    avatar: string,
    name: string,
    type: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string],
    projects: [string],
    descr: string
}

function parseUser(id: string, userDoc: any): User {
    return {
        id,
        uid: userDoc.uid,
        avatar: userDoc.avatar,
        name: userDoc.name,
        type: userDoc.type,
        city: userDoc.city || '',
        campus: userDoc.campus || '',
        course: userDoc.course,
        workedAreas: userDoc.workedAreas || [],
        projects: userDoc.projects || [],
        descr: userDoc.descr
    };
}

async function getCurrent(): Promise<User | undefined> {
    try {
        const authUser = auth().currentUser;
        if (!authUser) throw 'Usuário não encontrado';
    
        let users = await firestore().collection('user').where('uid', '==', authUser.uid).get();
        let user = users.docs[0].data();
        let parsedUser = parseUser(users.docs[0].id, user);
        return parsedUser;
    } catch (error) {
        console.log(error);        
    }
}

async function get(id: string): Promise<User> {
    return firestore()
        .collection('user')
        .doc(id)
        .get()
        .then(snapshot => {
            const userDoc = { ...snapshot.data() };
            return parseUser(snapshot.id , userDoc);
        });
}

const UserHelper = {
    get,
    getCurrent
}

export default UserHelper;
