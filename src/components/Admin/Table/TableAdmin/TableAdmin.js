import React, {useState, useEffect} from 'react'
import { getOrdersByTableApi } from '../../../../api/orders'
import {ORDER_STATUS} from '../../../../utils/constants'
import { Label, Button, Icon, Checkbox } from 'semantic-ui-react'
import {ReactComponent as IcTable} from '../../../../assets/table.svg'
import './TableAdmin.scss'

export function TableAdmin(props) {
    const { table } = props;
    
    useEffect(() => {
        (async () => {
            const response = await getOrdersByTableApi(table.id, ORDER_STATUS.PENDING);
            console.log(table.number);
            console.log(response);
        })()
    }, [])
    
    return (
        <div className='table-admin'>
            <IcTable />
            <p>Mesa {table.number}</p>
        </div>
    )
}
