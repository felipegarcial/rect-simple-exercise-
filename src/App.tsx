import { TwitterFollowCard } from "./components";

export function App() {
  const formatUserName = (userName: string) => `@${userName}`;

  return (
    <div className="App">
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Midudev" />
      <TwitterFollowCard formatUserName={formatUserName} userName="pipegarcial" name="Pige García" />
      <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk" name="Elon Musk" />
    </div>
  )
}
