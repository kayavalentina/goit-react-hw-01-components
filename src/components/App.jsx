 const jacques = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
          <div>
              <div>
                  <img src={jacques.avatar} alt={jacques.username} width="120" height="120" />
               <p class="name">{jacques.username}</p>
               <p class="tag">@{jacques.tag}</p>
                  <p class="location">{jacques.location}</p>
              </div>
                <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{jacques.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{jacques.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{jacques.likes}</span>
    </li>
  </ul>
          </div>
      </div>
      
  );
};
