import { createClient } from "@supabase/supabase-js";

// To be more secure: use .env file
const supabaseURL = "https://ukzmvxeyrmbjljeptbnn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrem12eGV5cm1iamxqZXB0Ym5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMjc5MzQsImV4cCI6MjAwNjkwMzkzNH0._ds2GcCbLemzFoiL3qsm-it4tCrtBNkbKu2FCEfF2SQ";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
