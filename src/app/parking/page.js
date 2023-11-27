// import {Link} from "react-router-dom";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
// import Chatbot from "react-chatbot-kit";
// import config, { MessageParser, ActionProvider } from "./ChatConfig";
// import 'react-chatbot-kit/build/main.css';

const HomePage = () => {
  return (
    <div className='container'>
      <Header />

      <div className='slide'>
        <aside id='mainimg'>
          <Image src='/images/interior1.jpeg' height={500} width={500} alt='猫は最高に可愛い' />
        </aside>
        {/*<!--スライドショー-->*/}
      </div>
      <Navigation />

      <div id='contents'>
        <section>
          <h2>
            TOPICS<span>トピックス</span>
          </h2>

          <div className='list-column-container'>
            <div className='list-column'>
              <Image src='/images/menu.jpg' height={500} width={500} alt='猫は最高に可愛い' />
              <div className='text'>
                <h4>
                  Today&apos;s menu<span>本日のメニュー</span>
                </h4>
                <p>人気な商品は売り切れる可能性がございます。ご承知の程お願いします。</p>
              </div>
              {/* <p className="btn1"><Link to ="/TodayMenuFirebase" >もっと見る</Link></p> */}
              <button className='btn1'>
                <a href='/TodayMenuFirebase'>もっと見る</a>
              </button>
            </div>

            <div className='list-column'>
              <Image src='/images/view.jpg' height={500} width={500} alt='猫は最高に可愛い' />

              <div className='text'>
                <h4>
                  Next open<span>次回のオープン</span>
                </h4>
                <p>
                  店主のモチベーションや材料の在庫に応じて不定期にお店を開けます。詳細は下記のInstagramよりご確認ください
                </p>
              </div>
              <p className='btn1'>
                <a id='icon' href='https://www.instagram.com/atelier_chervilcoju/'>
                  <Image src='/images/icon_instagram.png' height={500} width={500} alt='insta' />
                </a>
              </p>
            </div>

            <div className='list-column'>
              <Image src='/images/parking.jpg' height={500} width={500} alt='猫は最高に可愛い' />
              <div className='text'>
                <h4>
                  About parking lot<span>駐車場について</span>
                </h4>
                <p>
                  駐車場は2つ用意がございます。3台まで駐車可能です。イベントの際や、混雑が予想される場合は有料駐車場をご利用ください。
                </p>
              </div>
              {/* <p className="btn1"><Link to="/Parking">もっと見る</Link> </p> */}
              <button className='btn1'>
                <a href='/Parking'>もっと見る</a>
              </button>
            </div>
          </div>
        </section>

        <section id='new'>
          <h2>
            News<span>お知らせ</span>
          </h2>
          <dl style={{ textAlign: 'left' }}>
            <dt>2023/07/29</dt>
            <dd>
              ログイン機能を実装しました。パスワードが暗号化された後、JWTトークンによる一定期間の自動ログインが許可されます。
              <span className='newicon'>NEW</span>
            </dd>
            <dt>2023/07/15</dt>
            <dd>
              Today&apos;s menuページより本日の商品を確認できるようになりました。
              <span className='newicon'>NEW</span>
            </dd>
            <dt>2023/04/07</dt>
            <dd>
              アトリエchervil
              cojuのホームページを作成しました。イベントの情報などを発信していきます。
            </dd>
            <dt>2023/03/22</dt>
            <dd>アマムダコタンさんとのコラボを実施。</dd>
            <dt>2023/3/22</dt>
            <dd>キャッシュレス決済の導入を予定しています。</dd>
          </dl>
        </section>
      </div>
    </div>
  )
}

export default HomePage
