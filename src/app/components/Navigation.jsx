import Link from 'next/link'
import React from 'react'

//<li><Link to="/Form">CONTACT<span>お問い合わせ</span></Link></li>
const Navigation = () => {
  return (
    <nav id='menubar'>
      <ul>
        <li>
          <Link href='/'>
            HOME<span>ホーム</span>
          </Link>
        </li>
        <li>
          <Link href='/Signup'>
            SIGN UP<span>サインアップ</span>
          </Link>
        </li>
        <li>
          {/* <Link href='/Sat'> */}
          {/* TODO: 場当たり的に作ったページなので、後で消す */}
          <Link href='https://chervil-hp-release-122f7761f275.herokuapp.com/Sat'>
            SAT<span>セット販売の組み合わせ</span>
          </Link>
        </li>
        <li>
          <Link href='http://chervil.php.xdomain.jp/form.php'>
            CONTACT<span>お問い合わせ</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
