
const user = {
    name :'João Ferreira',
    imageUrl : 'https://i.imgur.com/6z13lku.jpeg',
    imageSize : 90
  };
  
export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }