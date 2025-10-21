import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useParams } from "react-router-dom";


export default function Chat(){

    // принял айди типа на которого нажали Users
    const {friend: friendId} = useParams()
    //текущий пользователь {user......}
    const[me, setMe] = useState()
    //собеседник
    const[friend, setFriend] = useState()
    //Список всех сообщ в диалоге
    const [messages, setMessages] = useState()
    // текущее набираемое сообщение
    const[text, setText] = useState()

    // подгрузка для текущ пользователя
    useEffect(() => {
    async function loadMe() {
      const { data } = await supabase.auth.getSession();
      setMe(data?.session.user);
    }
    loadMe();
  }, []);
  
  useEffect(() => {
    console.log(me);
  }, [me]);




    return <div>Чат пользователей</div>;
}

