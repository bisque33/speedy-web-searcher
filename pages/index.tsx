import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import { useState } from 'react';
import useSWR from 'swr'

/**
 * - [ ] サイトごとにsuggestを取得できる
 *       Google Suggest API
 *       CORSのためブラウザからのアクセスは不可。Cloud Functionsをプロキシにする必要がある
 * - [ ] searchConditionsの設定画面、LocalStorageに保存
 */

// async function fetcher (){
//   const res = await fetch('http://www.google.com/complete/search?hl=en&q=hello&output=toolbar')
//   console.log(res.body)
// }

type SearchCondition = {
  label: string;
  favicon?: string; // Not Impl
  url: string;
  additionalText?: string;
  suggest?: 'google'; // Not Impl
}

const searchConditions: SearchCondition[] = [
  {
    label: 'Google',
    url: 'https://www.google.com/search?q=',
    suggest: 'google',
  },
  {
    label: 'Google (Next.js)',
    url: 'https://www.google.com/search?q=',
    additionalText: 'site:nextjs.org',
    suggest: 'google',
  },
  {
    label: 'Google (Ruby)',
    url: 'https://www.google.com/search?q=',
    additionalText: 'site:ruby-lang.org',
    suggest: 'google',
  },
  {
    label: 'Google (MDN)',
    url: 'https://www.google.com/search?q=',
    additionalText: 'site:developer.mozilla.org',
    suggest: 'google',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/search?q=',
  },
  {
    label: 'Zenn',
    url: 'https://zenn.dev/search?q=',
  },
  {
    label: 'Google Cloud',
    url: 'https://cloud.google.com/s/results?q=',
  }
]

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchConditionIndex, setSearchConditionIndex] = useState<number>(0);
  const router = useRouter()
  // const { data, error } = useSWR('/api/user/123', fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  function handleSubmit() {
    const url = searchConditions[searchConditionIndex].url;
    const searchString = searchConditions[searchConditionIndex].additionalText ? `${searchText} ${searchConditions[searchConditionIndex].additionalText}` : searchText
    console.log({ url, searchString });
    router.push(url + searchString);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <input
            type="text"
            name="searchText"
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Enter") handleSubmit() }}
          />
        </div>
        <div>
          {searchConditions.map((sc, i) =>
            <label key={`label${i}`} style={{ display: 'block' }}>
              <input
                type="radio"
                name="searchConditions"
                value={i}
                defaultChecked={i === 0}
                onChange={(event) => setSearchConditionIndex(parseInt(event.target.value))}
              />{sc.label}
            </label>
          )}
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home