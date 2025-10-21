import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mpadqvqlbomjrndtoffh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYWRxdnFsYm9tanJuZHRvZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5ODUzMDUsImV4cCI6MjA3MjU2MTMwNX0.jca09TyKqHpBekpNk7bpPm8Z9_Zc3qiBxXtL6H02fAk";

export const supabase = createClient(supabaseUrl, supabaseKey);

// "CRUD"
