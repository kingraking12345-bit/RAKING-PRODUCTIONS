/* RP backend switch.
   "supabase"    = no Supabase. Everything (accounts, publishing, community, ...) runs inside this browser, stored in localStorage. For building and testing.
   "supabase" = the real shared database. Switch to this only when the whole website is approved and the SQL files have been run.
   (Open any page with ?backend=local or ?backend=supabase to try the other one in this browser.) */
window.RP_BACKEND = "supabase";
