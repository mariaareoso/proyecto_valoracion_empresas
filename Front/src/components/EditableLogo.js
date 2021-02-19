import { useRef, useState } from 'react'
import tempAvatar from '../image/bag-on-head.png'

export default function EditableLogo({ empresa }) {

    const [tempLogo, setTempLogo] = useState(empresa.photo_empresa);
    const [tempLogoHash, setTempLogoHash] = useState(Date.now());

    const imageField = useRef();

    const token = localStorage.getItem('token');

    const onFileChange = async (e) => {
        const file = imageField.current.files[0];

        const payload = new FormData();
        payload.append('attachment', file);

        const response = await fetch('http://localhost:8000/users/logo', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: payload
        });

        if (response.ok) {
            setTempLogoHash(Date.now());
        }

    }
    return (
        <>
            <form className='formPhoto'>
                <label htmlFor="photo">
                    <img
                        className='logoPerfil'
                        src={`${process.env.REACT_APP_UPLOADS_URL}logos/${tempLogo}?${tempLogoHash}`}
                        alt={empresa.nombre_empresa}
                    />
                </label>
                <input
                    name="photo"
                    type="file"
                    id="photo"
                    style={{ display: 'none' }}
                    accept="image/*"
                    ref={imageField}
                    onChange={onFileChange}
                />

            </form>
        </>
    )
}
