import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { updatePhoto } from '../http/apiSharpView';
import useAuth from '../shared/hooks/useAuth';

import '../css/style.css'

function AddPhoto({ userInfo }) {

    const { handleSubmit, reset } = useForm();

    const [photo, setPhoto] = useState([])

    const updataPhotoData = async () => {
        await updatePhoto(photo);
        reset();
    }

    return (
        <form className='formPerfil' onSubmit={handleSubmit(updataPhotoData)}>
            <div>
                <label htmlFor="photo">Image</label>
                <input name="photo" type="file" id="photo" onSubmit={(e) => setPhoto(e.target.value)} />
            </div>
            <input type="submit" value='Guardar' />
        </form>
    )
}


export default AddPhoto