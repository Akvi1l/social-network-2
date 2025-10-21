import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import AuthGate from "./AuthGate";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Users from "./Users";
import Profile from "./Profile";
import Chat from "./Chat";


export default function App() {
  // undefined — грузимся, null — не залогинен, object — есть сессия
  const [session, setSession] = useState(undefined);

  function handleSession(s) {
    setSession(s);
  }

  // Общий макет для залогиненного состояния: Header + место под страницы
  function Shell() {
    return (
      <>
        <Header session={session} />
        <main style={{ padding: 24 }}>
          <Outlet />
        </main>
      </>
    );
  }

  return (
    <AuthGate sendSession={handleSession}>
      <BrowserRouter>
        {session === undefined ? (
          <div>загрузка....</div>
        ) : (
          <Routes>
            {session ? (
              // ----- ЗАЛОГИНЕН -----
              <Route element={<Shell />}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route
                  path="/profile"
                  element={<Profile session={session} />}
                />
                <Route path="/chat/:friend" element={<Chat />}/>
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Route>
            ) : (
              // ----- НЕ ЗАЛОГИНЕН -----
              <>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        )}
      </BrowserRouter>
    </AuthGate>
  );
}




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
