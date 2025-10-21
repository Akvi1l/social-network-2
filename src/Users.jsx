import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Link } from "react-router-dom";

export default function Users() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("profiles").select("id, email");
      setProfiles(data);
    }
    load();
  }, []);
  return (
    <div>
      <h2>Пользователи</h2>
      <ul>
        {profiles.map((element) => (
          <li key={element.id}>
            <Link to={`/chat/${element.id}`}>{element.email}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}