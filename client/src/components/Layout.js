import React from 'react';
import '../styles/LayoutStyles.css';
import { SidebarMenu } from '../Data/data';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
        <div className='main'>
            <div className='layout'>
                <div className='sidebar'>
                    <div className='logo'>
                        <h6>DOC APP</h6>
                        <hr />
                    </div>
                    <div className='menu'>
                        {SidebarMenu.map(menu => {
                            return(
                                <>
                                    <div className='menu-item'>
                                        <i className={menu.icon}></i>
                                        <Link to={menu.path}>{menu.name}</Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='content'>
                    <div className='header'>Header</div>
                    <div className='body'>{children}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout