import { ReactNode } from 'react';
import Head from "next/head"

type Props = {
  children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>sws</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width" />
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>{children}</main>
    </>
  )
}