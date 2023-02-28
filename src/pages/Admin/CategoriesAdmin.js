import React, { useState, useEffect } from 'react'
import {Loader} from 'semantic-ui-react'
import { HeaderPage, TableCategoryAdmin, AddEditCategoryForm } from '../../components/Admin'
import {ModalBasic} from '../../components/Common'
import {useCategory} from '../../hooks'

export function CategoriesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setcontentModal] = useState(null)

    const { loading, categories, getCategories } = useCategory();
    
    console.log(categories);
    
    useEffect(() => {
        getCategories()
    }, []);

    const openCloseModal = () => setShowModal(prev => !prev);

    const addCategory = () => {
        setTitleModal("Nuevo categoria");
        setcontentModal(<AddEditCategoryForm />);
        openCloseModal()
    }

    

    return (
        <>
            <HeaderPage
                title="Categorias"
                btnTitle="Nueva categoria"
                btnClick={addCategory}
            />
            {loading ? (
                <Loader active inline="centered">

                </Loader>
            ) : (
                    <TableCategoryAdmin categories={categories} />
            )}

            <ModalBasic
                show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    )
}
