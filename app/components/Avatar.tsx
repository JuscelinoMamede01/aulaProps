interface AvatarProps {
  size: number;
  title: string;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={props.size}
        height={props.size}
      />
    </div>
  );
};
