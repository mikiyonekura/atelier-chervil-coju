import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="footermenu" className="inner">
          <ul>
            <li><Link href = "/" >HOME</Link></li>
            <li><Link href ="/Signin" >SIGN UP</Link></li>
            <li><Link href ="/Sat" >SAT</Link></li>
            <li>
              <Link href ="http://chervil.php.xdomain.jp/form.php" >
                CONTACT
              </Link>
            </li>
          </ul>

      </div>
    </footer>
  )
}

export default Footer
