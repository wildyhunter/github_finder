import Search from '../components/Search';
import { useState } from 'react';
import { UserProps } from '../types/user';

const home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (username: string) => {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUser(data);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
        </div>
    );
};

export default home;
