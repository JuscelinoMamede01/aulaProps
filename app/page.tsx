import { Avatar } from "./components/Avatar";
import { Card } from "./components/Card";
import Postagem from "./components/Postagem";

export default function Home() {
  return (
    <main>
      <Avatar size={100} title="Este é meu titulo01" />
      <Avatar size={100} title="Este é meu titulo02" />
      <Card>
        <Avatar size={100} title="Este é meu titulo03" />
      </Card>

      <Postagem
        userName="Juscelino Mamede"
        place="Paulista"
        profileImgUrl="https://i.imgur.com/1bX5QH6.jpg"
        imageUrl="https://i.imgur.com/1bX5QH6.jpg"
      />
      <Postagem
        userName="Kayla"
        place="Recife"
        profileImgUrl="/images/Kayla.jpg"
        imageUrl="/images/Kayla.jpg"
      />
      <Postagem
        userName="Floyd"
        place="New york"
        profileImgUrl="/images/floyd.jpg"
        imageUrl="/images/floyd.jpg"
      />
    </main>
  );
}
