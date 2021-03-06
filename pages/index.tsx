import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';
import useSWR from 'swr'

import queryString from 'query-string';

import { conditions } from '../conditions';

/**
 * - [x] ブラウザバックしたときにstateにもとの値がセットされるようにする
 *       replaceStateで検索条件をqueryStringに保持している。もっといいやり方ないか？
 * - [ ] ブラウザで新しいタブを開いたときにテキストボックスをオートフォーカスする
 *       無理？
 * - [ ] サイトごとにsuggestを取得できる
 *       Google Suggest API
 *       CORSのためブラウザからのアクセスは不可。Cloud Functionsをプロキシにする必要がある
 * - [ ] searchConditionsの設定画面、LocalStorageに保存
 *       プラスボタンで追加、歯車ボタンで編集のイメージ
 * - [ ] スタイルをちゃんとする
 * - [ ] GitHub Ribbonをつける
 *       conditions.tsを編集コミット→デプロイ→画面が更新される
 *       これにより設定の持ち運びの必要がなくなる
 *       仕事用、プライベート用みたいに切り替えたい時がある。ローカル設定のほうが良い？
 *       あるいはconditionにgroupの概念を取り入れて、current groupをローカルで保存する感じが良いか
 */

// async function fetcher (){
//   const res = await fetch('http://www.google.com/complete/search?hl=en&q=hello&output=toolbar')
//   console.log(res.body)
// }

const Home: NextPage = () => {
  // ちらつき防止ため、stateを初期化する間はレンダリングしないようにする
  const [isInit, setIsInit] = useState(true);
  const [searchText, setSearchText] = useState<string>('');
  const [searchConditionIndex, setSearchConditionIndex] = useState<number>(0);
  // const { data, error } = useSWR('/api/user/123', fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // ブラウザバックしたときにstateに値を設定する
  useEffect(() => {
    const query = queryString.parse(window.location.search);
    console.log({ query });

    if (typeof query.q === 'string') setSearchText(query.q);
    if (typeof query.i === 'string' && Number(query.i) !== NaN) setSearchConditionIndex(parseInt(query.i));

    setIsInit(false);
  }, [])

  function handleSubmit() {
    const url = conditions[searchConditionIndex].url;
    const searchString = conditions[searchConditionIndex].additionalText ? `${searchText} ${conditions[searchConditionIndex].additionalText}` : searchText
    const currentUrl = `${window.location.origin}${window.location.pathname}`

    console.log({ currentUrl });

    // ブラウザバックしたときにstateを保持するために現在のページにqueryStringを追加する
    window.history.replaceState(null, '', `${currentUrl}?q=${searchText}&i=${searchConditionIndex}`);
    window.location.href = url + searchString;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <input
            className={styles.searchBox}
            type="text"
            autoFocus
            name="searchText"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Enter") handleSubmit() }}
          />
        </div>
        <div className={styles.wrapper}>
          {!isInit && conditions.map((condition, i) =>
            <label key={`label${i}`} style={{ display: 'block' }}>
              <input
                type="radio"
                name="searchConditions"
                value={i}
                defaultChecked={i === (searchConditionIndex || 0)}
                onChange={(event) => setSearchConditionIndex(parseInt(event.target.value))}
              />{condition.label}
            </label>
            // <div>{condition.label}</div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home