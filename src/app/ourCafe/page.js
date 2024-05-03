import Cafeher from '@/components/cafeapp/cafeher';
import Serve from '@/components/cafeapp/Serve';
import Popular from '@/components/cafeapp/Popular';
import Contact from '@/components/Home/Contact/Contact'

export default function Home() {
    return (
      <>
        <Cafeher/>
        <Popular/>
        <Serve/>
        <Contact/>
      </>
    );
  }
  