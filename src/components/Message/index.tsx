import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MessageContainer } from "./styles";

interface Props {
  message: { avatar?: string; name?: string; text?: string };
}

const Message = (props: Props) => {
  const [user] = useAuthState(auth);
  return (
    <MessageContainer selfMessage={props.message.name === user?.displayName}>
      <img src={props.message.avatar} alt="user avatar" />
      <p>{props.message.name}</p>
      <p>{props.message.text}</p>
    </MessageContainer>
  );
};

export default Message;
