import { Avatar } from "./components/Avatar";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main>
      <Avatar size={100} title="Este é meu titulo01" />
      <Avatar size={100} title="Este é meu titulo02" />
      <Card>
        <Avatar size={100} title="Este é meu titulo03" />
      </Card>
    </main>
  );
}
