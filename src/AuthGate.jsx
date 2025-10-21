import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function AuthGate({ sendSession, children }) {
  const [session, setSession] = useState();
  // сразу при запуске сайта
  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session); // session - или null или объект
    }

    getSession();

    //подписка на вход.выход.обн токена
    const { data: sub } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );
  }, []);

  //авто отправка в приложение инфы о сессии
  //сессию отправляем только когда она изменилась

  useEffect(() => {
    //при изм сессии создается или обновляется запись в талице profiles
    async function createProfileNote() {
      const { error } = await supabase.from("profiles").upsert([
        {
          id: session.user.id,
          email: session.user.email,
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error(error);
      }
    }
    if (session?.user) {
      createProfileNote();
    }

    sendSession(session);
  }, [session]);

  return <div>{children}</div>;
}

//  async function subSession() {
//       const { data: sub } = await supabase.auth.onAuthStateChange(
//         (_event, newSession) => {
//           setSession(newSession);
//         }
//       );
//       let unsub = () => {};
//       // сохраняет в п-ю unsub ф-ю, кот. при вызове отпишет нас от событий onAuthStateChange
//       unsub = () => sub.subscription.unsubscribe();
//       return () => unsub();
//     }
