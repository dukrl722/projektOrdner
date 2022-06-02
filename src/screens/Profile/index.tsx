import { useEffect, useState } from 'react';

import { ProfessorProfile } from '../ProfessorProfile';
import { StudentProfile } from '../StudentProfile';

import UserHelper from '../../helpers/user';

export function Profile() {

    const [ user, setUser ] = useState<any>();

    async function loadUser(){
        const userDoc = await UserHelper.getCurrent();
        setUser(userDoc);
    };

    useEffect(() => {
        loadUser();

        return () => {};
    }, []);

    return !user ? null : (
        user.type == 'professor' ? (
            <ProfessorProfile user={user} />
        ) : (
            <StudentProfile user={user} />
        )
    );
}