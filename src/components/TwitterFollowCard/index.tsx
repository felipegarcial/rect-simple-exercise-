import "./index.css";

interface TwitterFollowCardProps {
  formatUserName: (userName: string) => string;
  userName: string;
  name: string;
  isFollowing: boolean;
}

export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  isFollowing,
}: TwitterFollowCardProps) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="Avatar"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside >
        <button className="tw-followCard-button">
          {isFollowing ? "Following" : "Follow"}
        </button>
      </aside>
    </article>
  );
}
