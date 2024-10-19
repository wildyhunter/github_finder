type SearchProps = {
    loadUser: (username: string) => Promise<void>;
};

import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState('');
    return (
        <div>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div>
                <input type="text" placeholder="Busque por um usuário" onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
            </div>
        </div>
    );
};

export default Search;
