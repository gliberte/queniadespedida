import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dsyxiowlipttwjuhoqio.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzeXhpb3dsaXB0dHdqdWhvcWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwODIxMTIsImV4cCI6MjA5NTY1ODExMn0.3nEAsh_QMmLr_RRD-FOErC-nNOSwaJxMJb_ENjJDaPI";

export const supabase = createClient(supabaseUrl, supabaseKey);
