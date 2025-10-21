import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import Login from "./Login";
import AuthGate from "./AuthGate";
import Profile from "./Profile";

function App() {
  //session null undefined или объект
  const [session, setSession] = useState(undefined);

  function handleSession(send) {
    setSession(send);
  }
  return (
    <AuthGate sendSession={handleSession}>
      {session === undefined ? (
        <div>загрузка....</div>
      ) : session ? (
        <Profile session={session} />
      ) : (
        <Login />
      )}
    </AuthGate>
  );
}

export default App;

// Set-ExecutionPolicy Unrestricted (windows powershell от имени админа)
// npm install делается 1 раз для проекта(node_modules)
// npm run dev
// Set-ExecutionPolicy Restricted
// npm install @supabase/supabase-js

//сессия пользователя:
// 1) Пользователь вошел
// 2) сессия пустая, никто не вошел
// //получаем текующую сессию, если до этого вошли
// useEffect(() => {
//   async function getActiveSession() {
//     const { data } = await supabase.auth.getSession();
//   }

//   getActiveSession();
// }, []);

// //стартовое получение данных из БД
// useEffect(() => {
//   async function LoadData() {
//     const { data, error } = await supabase.from("Profile").select("*");
//     console.log(data, error);
//   }
//   LoadData();
// }, []);
