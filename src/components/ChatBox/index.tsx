import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase";
import Message from "../Message";
import SendMessage from "../SendMessage";
import { ChatBoxContainer } from "./styles";

interface MessageType {
  avatar?: string;
  createdAt?: { nt: { seconds: number; nanoseconds: number } };
  id: string;
  name?: string;
  text?: string;
  uid?: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const scroll = useRef<any>();

  const useEffectHandler: () => void = () => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages: MessageType[] = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  };

  useEffect(useEffectHandler, []);

  return (
    <ChatBoxContainer>
      {messages.map((message: MessageType) => (
        <Message key={message.id} message={message} />
      ))}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </ChatBoxContainer>
  );
};

export default ChatBox;
