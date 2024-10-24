import { BsCodeSlash } from 'react-icons/bs';
import { RepoProps } from '../types/repo';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import classes from './Repo.module.css';

const Repo = ({
    name,
    language,
    html_url,
    stargazers_count,
    forks_count,
}: RepoProps) => {
    return (
        <div className={classes.repo}>
            <h3>{name}</h3>
            <p className={classes.language}>
                <BsCodeSlash /> {language}
                <span>{language}</span>
            </p>
            <div className={classes.stats}>
                <div>
                    <AiOutlineStar /> {stargazers_count}
                </div>
                <div>
                    <AiOutlineFork /> {forks_count}
                </div>
            </div>
            <a href={html_url} target="_blank" className={classes.repo_btn}>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
    );
};

export default Repo;
