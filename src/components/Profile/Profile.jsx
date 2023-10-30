import css from '../Profile/Profile.module.css'

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
        <div className={css.profile}>
         <div className={css.description}>
            <img src={avatar} alt={username} className={css.avatar} width="250" height="250" />
            <p className={css.name}>{username}</p>
            <p  className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
         </div>
         <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
         </ul>
        </div>
    );
};


