const { data, error } = await supabase.auth.signUp({
  email,
  password
});
