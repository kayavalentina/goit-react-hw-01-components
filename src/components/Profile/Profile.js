import './Profile.css';

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
        <div class="profile">
         <div class="description">
            <img src={avatar} alt={username} class="avatar" width="150" height="150" />
            <p class="name">{username}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
         </div>
         <ul class="stats">
            <li class="stats-list">
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li class="stats-list">
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li class="stats-list">
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
         </ul>
    </div>);
};


