import { useRef, useState } from 'react'

export default function EditableAvatar({ usuario }) {
    const [avatar, setAvatar] = useState(usuario.photo);
    const [avatarHash, setAvatarHash] = useState(Date.now());

    const imageField = useRef();

    const token = localStorage.getItem('token');

    const onFileChange = async (e) => {
        const file = imageField.current.files[0];

        const payload = new FormData();
        payload.append('attachment', file);

        const response = await fetch('http://localhost:8000/users/photo', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: payload
        });

        if (response.ok) {
            setAvatarHash(Date.now());
        }

    }
    return (
        <>
            <form className='formPhoto'>
                <label htmlFor="photo">
                    <img
                        className='imagnePerfil'
                        src={`${process.env.REACT_APP_UPLOADS_URL}avatars/${avatar}?${avatarHash}`}
                        alt={usuario.nombre}
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
