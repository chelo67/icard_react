import React, {useEffect} from 'react'
import {HeaderPage, TablePayments} from '../../components/Admin'
import {Loader} from 'semantic-ui-react'
import {usePayment} from '../../hooks'

export function PaymentsHistory() {
    const { loading, payments, getPayments } = usePayment();
    
    useEffect(() => {
        getPayments()
        
    }, [])

    return (
        <>
            <HeaderPage title="Historial de pagos" />

            {loading ? (
                <Loader active inline="centered">
                    Cargendo...
                </Loader>
            ) : (
                    <TablePayments payments={payments} />
            )}
        </>
    )
}
