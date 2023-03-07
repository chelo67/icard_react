import React, {useState, useEffect, useCallback} from 'react'
import { Form, Image, Button, Dropdown, Checkbox } from 'semantic-ui-react'
import { useCategory } from '../../../../hooks'
import {useDropzone} from 'react-dropzone'
import './AddEditProductForm.scss'
import {map} from  'lodash'

export function AddEditProductForm() {
    const [categoriesFormat, setcategoriesFormat] = useState([])
    const { categories, getCategories } = useCategory();
    const [previewImage, setPreviewImage] = useState(null)
    
    useEffect(() => getCategories(), []);
    useEffect(() => {
        setcategoriesFormat(formatDropdownData(categories))
    }, [categories])

    const onDrop = useCallback((acceptedFile) => {
        const file = acceptedFile[0];
        setPreviewImage(URL.createObjectURL(file));
    }, [])

    const {getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop,
    })
    

    return (
        <Form className='add-edit-product-form'>
            <Form.Input name="title"  placeholder="Nombre de la producto" />
            <Form.Input type="number" name="price" placeholder="Precio" />
            <Dropdown placeholder='Categoria' fluid selection search options={categoriesFormat} />

            <div className='add-edit-product-form__active'>
                <Checkbox toggle/> Producto activo
            </div>

            <Button type='button' fluid {...getRootProps()} >
                Subir imagen
            </Button>
            <input {...getInputProps()} />
            <Image src={previewImage} />
            
            <Button type='"submit' primary fluid content='Crear' />
        </Form>
    )
}

function formatDropdownData(data) {
    return map(data, (item) => ({
        key: item.id,
        text: item.title,
        value: item.id,
    }))
}