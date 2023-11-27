'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TodayMenuUser from './components/TodayMenuUser'
import TodayMenuAd from './components/TodayMenuAd'
import Button from '@mui/material/Button';

//グーグルボタンでサインアウト
function SignOutButton() {

  return(
      <Button style={{border: 'solid black'}} onClick = {() => auth.signOut()}> 
          <p style={{color: 'gray'}}>Sign out</p>
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
    email: "purplepiku4040@gmail.com"
  }

  return (
    <div id ="contents">

      {user && user.email === "purplepiku4040@gmail.com" ? (
          <div style={{margin: '3%'}}>
              <TodayMenuAd />
              <UserInfo/>
          </div>

      ) : user ? (
          <div style={{margin: '3%'}}>
              <TodayMenuUser />
              <UserInfo/>
          </div>
      ) : (
          <SignInButton />
      )}
    </div>
  )
}

export default Menu
