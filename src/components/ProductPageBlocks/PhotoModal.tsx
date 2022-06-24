import React, {FC, useState} from 'react'


// интерфейс для пропсов
interface ModalProps {
    visible: boolean
    onClose: () => void
    children?: React.ReactNode;
}

const CustomModal: FC<ModalProps> = ({
                                         visible = false,
                                         onClose,
                                         children
                                     }: ModalProps) => {


    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!visible) return null

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog bg-white' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-close hover:scale-110' onClick={onClose}>
                        <i className="bi bi-x-lg"></i>
                    </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomModal;