import { TwitterFollowCard } from "./components";

export function App() {
  const formatUserName = (userName: string) => `@${userName}`;

  return (
    <div className="App">
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Midudev" isFollowing={false} />
      <TwitterFollowCard formatUserName={formatUserName} userName="pipegarcial" name="Pige García" isFollowing={false} />
      <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk" name="Elon Musk" isFollowing={true} />
    </div>
  )
}
