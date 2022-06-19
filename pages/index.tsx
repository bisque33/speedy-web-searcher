import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import { useState } from 'react';
import useSWR from 'swr'
import { conditions } from './conditions';

/**
 * - [ ] 戻ったときのstateをちゃんとする
 * - [ ] ブラウザで新しいタブを開いたときにテキストボックスをオートフォーカスする
 *       無理？
 * - [ ] サイトごとにsuggestを取得できる
 *       Google Suggest API
 *       CORSのためブラウザからのアクセスは不可。Cloud Functionsをプロキシにする必要がある
 * - [ ] searchConditionsの設定画面、LocalStorageに保存
 *       プラスボタンで追加、歯車ボタンで編集のイメージ
 * - [ ] スタイルをちゃんとする
 * - [ ] GitHubのconditions.tsへのリンクを貼る
 *       編集コミット→デプロイ→画面が更新される
 *       これにより設定の持ち運びの必要がなくなる
 *       仕事用、プライベート用みたいに切り替えたい時がある。ローカル設定のほうが良い？
 *       あるいはconditionにgroupの概念を取り入れて、current groupをローカルで保存する感じが良いか
 */

// async function fetcher (){
//   const res = await fetch('http://www.google.com/complete/search?hl=en&q=hello&output=toolbar')
//   console.log(res.body)
// }

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchConditionIndex, setSearchConditionIndex] = useState<number>(0);
  const router = useRouter()
  // const { data, error } = useSWR('/api/user/123', fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  function handleSubmit() {
    const url = conditions[searchConditionIndex].url;
    const searchString = conditions[searchConditionIndex].additionalText ? `${searchText} ${conditions[searchConditionIndex].additionalText}` : searchText
    console.log({ url, searchString });
    router.push(url + searchString);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <input
            type="text"
            autoFocus
            name="searchText"
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Enter") handleSubmit() }}
          />
        </div>
        <div>
          {conditions.map((condition, i) =>
            <label key={`label${i}`} style={{ display: 'block' }}>
              <input
                type="radio"
                name="searchConditions"
                value={i}
                defaultChecked={i === 0}
                onChange={(event) => setSearchConditionIndex(parseInt(event.target.value))}
              />{condition.label}
            </label>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home