import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, isOnline, name }) => {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
