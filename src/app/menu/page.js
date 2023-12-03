'use client'

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TodayMenuAd from './components/TodayMenuAd'
import TodayMenuUser from './components/TodayMenuUser'

//グーグルボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    //firebaseを使ってGoogleでログインする
    //Googleの認証プロバイダーを作成
    signInWithPopup(auth, provider)
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <Button
        onClick={signInWithGoogle}
        variant='contained'
        style={{ height: '40px' }}
        endIcon={<AdminPanelSettingsIcon />}
      >
        login
      </Button>
    </div>
  )
}

//グーグルボタンでサインアウト
function SignOutButton() {
  return (
    <Button style={{ border: 'solid black' }} onClick={() => auth.signOut()}>
      <p style={{ color: 'gray' }}>Sign out</p>
    </Button>
  )
}

function UserInfo() {
  // const [user] = useAuthState(auth)

  return (
    <div className='userInfo'>
      {/* <h2>ユーザー名：{user.displayName}</h2>
          <h2>メールアドレス：{user.email}</h2>
          <img src={auth.currentUser.photoURL} alt="user photo" /> */}
      <div>
        <SignOutButton />
      </div>
    </div>
  )
}

const Menu = () => {
  // firebase
  // const [user] = useAuthState(auth)
  const user = {
    email: 'purplepiku4040@gmail.com',
  }

  return (
    <div id='contents'>
      {user && user.email === 'purplepiku4040@gmail.com' ? (
        <div style={{ margin: '3%' }}>
          <TodayMenuAd />
          <UserInfo />
        </div>
      ) : user ? (
        <div style={{ margin: '3%' }}>
          <TodayMenuUser />
          <UserInfo />
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  )
}

export default Menu
