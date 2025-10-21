import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pfpffvknvbqzckrwndme.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcGZmdmtudmJxemNrcnduZG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwODA4NDEsImV4cCI6MjA3MzY1Njg0MX0.Og7Yfpy1D3_pmofUOvbV0_maoJAQ6aCOAKnrskiM3IU";

export const supabase = createClient(supabaseUrl, supabaseKey);

// "CRUD"
