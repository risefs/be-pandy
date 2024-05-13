import { redirect } from 'next/navigation';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { createClient } from './lib/supabase/server';

export default async function HomePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
