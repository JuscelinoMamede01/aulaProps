interface PostagemProps {
  userName: string;
  place: string;
  profileImgUrl: string;
  imageUrl: string;
}

function Postagem(props: PostagemProps) {
  return (
    <div className="card-post">
      <div className="post-edit">
        <img className="profile" src={props.profileImgUrl} alt="" />
        <div className="block-name">
          <p>{props.userName}</p>
          <p>{props.place}</p>
        </div>
      </div>
      <img className="post-img" src={props.imageUrl} alt="" />
    </div>
  );
}

export default Postagem;
