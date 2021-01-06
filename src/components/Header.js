import React from 'react';
import {
    Link,
    useRouteMatch
  } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header-title'><a href='/'>aavondet</a></h1>
        <nav>
            <ul className='header-nav-list'>
                <li><NavItem label='home' to='/' active={true}/></li>
                <li><NavItem label='work' to='/work'/></li>
                <li><NavItem label='resume' to='/redsume'/></li>
            </ul>
        </nav>
    </div>
  );
};

const NavItem = ({label, to, active}) => {
    let match = useRouteMatch({
        path: to,
        exact: active
    });

    return (
        <Link to={to} className={match ? "active" : ""}>{label}</Link>
    )
}

export default Header;
