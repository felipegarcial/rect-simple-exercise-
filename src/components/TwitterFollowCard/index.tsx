import { useState } from "react";
import "./style.css";

interface TwitterFollowCardProps {
  formatUserName: (userName: string) => string;
  userName: string;
  name: string;
}

export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
}: TwitterFollowCardProps) {

  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'


  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img
        className='tw-followCard-avatar'
        alt='El avatar de midudev'
        src={`https://unavatar.io/${userName}`}
      />
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName} onClick={handleFollow}>
        <span className='tw-followCard-text'>{text}</span>
        <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
      </button>
    </aside>
  </article>
  );
}
