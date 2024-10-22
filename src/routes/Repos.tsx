import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Repos.module.css';
import BackBtn from '../components/BackBtn';
import { RepoProps } from '../types/repo';
import Loader from '../components/Loader';
import Repo from '../components/Repo';

const Repos = () => {
    const { username } = useParams();

    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadRepos = async () => {
            setLoading(true);
            const response = await fetch(
                `https://api.github.com/users/${username}/repos`
            );
            const data = await response.json();
            setRepos(data);
            setLoading(false);
        };
        loadRepos();
    }, [username]);

    if (!repos && loading) {
        return <Loader />;
    }

    console.log(repos);

    return (
        <div>
            <BackBtn />
            <h2>Explore os repositórios do usuário: {username}</h2>

            {repos && repos.length === 0 && (
                <p>Usuário não possui repositórios</p>
            )}

            {repos && repos.length > 0 && (
                <div>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Repos;
