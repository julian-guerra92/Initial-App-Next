import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

type Props = {
   children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: Props) => {
   return (
      <div className={styles.container}>

         <Head>
            <title>Home - Julián</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <main className={styles.main}>
            {children}
         </main>

      </div>
   )
}
