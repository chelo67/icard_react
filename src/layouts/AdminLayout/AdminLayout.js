import React from 'react'
import {LoginAdmin} from '../../pages/Admin'
import {useAuth} from '../../hooks'
import {TopMenu, LateralMenu} from '../../components/Admin'
import './AdminLayout.scss'

export function AdminLayout(props) {
    const { children } = props;
    const {auth} = useAuth()

    if(!auth) return <LoginAdmin />;

    return (
        <div className='admin-layout'>
            
            <div className='admin-layout__menu'>
                <TopMenu />
            </div>

            <div className='admin-layout__main-content'>
                <LateralMenu>{children}</LateralMenu>
            </div>
            
        </div>
    )
}
