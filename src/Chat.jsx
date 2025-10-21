import { useEffect, useState } from "react";

import { supabase } from "./supabase";
import { useParams } from "react-router-dom";

export default function Chat() {
  //приняли id человека на которого нажали в Users
  const { friend: friendId } = useParams();
  //текущий пользователь {user }
  const [me, setMe] = useState({});
  //собеседник
  const [friend, setFriend] = useState();
  //Список всех сообщений в диалоге
  const [messages, setMessages] = useState();
  //Текущее набираемое сообщение
  const [text, setText] = useState();

  //подгрузка для текущего пользователя
  useEffect(() => {
    async function loadMe() {
      const { data } = await supabase.auth.getSession();
      setMe(data?.session.user);
    }
    loadMe();
  }, []);

  return <div>Чат пользователей</div>;
}
