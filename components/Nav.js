import ActiveLink from './ActiveLink'
import { AppBar } from '@material-ui/core'

const Nav = () => (
  <AppBar position='static' elevation='0'>
    <nav>
      <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active {
        text-decoration: underline;
      }
    `}
    </style>
      <ul className='nav'>
        <li>
          <ActiveLink activeClassName='active' href='/'>
            <a className='nav-link'>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='active' href='/about'>
            <a className='nav-link'>About</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  </AppBar>
)

export default Nav
