import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useTable } from '../../../hooks'
import { useNavigate } from 'react-router-dom'
import {size} from 'lodash'
import './SelectTable.scss'

export function SelectTable() {
    const navigate = useNavigate();

    const [tableNum, setTableNum] = useState(null);
    const [error, setError] = useState(null);
    const { isExistTable } = useTable();
    
    

    const onSubmit = async () => {
        setError(null);
        if (!tableNum) {
        setError("No has introducido ninguna mesa");
        } else {
        const exist = await isExistTable(tableNum);
        if(exist) navigate(`/client/${tableNum}`);
        else setError("El numero de la mesa no existe");
        }
    };

    return (
        <div className='select-table'>
            <div className='select-table__content'>
                <h1>Bienvenidos a iCard</h1>
                <h2>Introduce tu numero de mesa</h2>

                <Form onSubmit={onSubmit}>
                    <Form.Input
                        placeholder="Ejemplo: 135, 873, 904, 337"
                        type="number"
                        onChange={(_, data) => setTableNum(data.value)}
                    />

                    <Button primary fluid>
                        Entrar
                    </Button>
                </Form>

                <p className="select-table__content-error">{error}</p>
            </div>
        </div>
    )
}
