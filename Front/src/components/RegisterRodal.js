import { useState } from 'react';
import { Suspense, lazy } from 'react';
import useMatchMedia from '../shared/hooks/useMatchMedia';
import Register from './Register';

import '../css/style.css'
import 'rodal/lib/rodal.css';
import { ResponsiveRodalRegister } from './ResponviseRodal';

export default function Modal() {
    const [isDialogOpen, setIsDialogOpen] = useState(true);

    const showDialog = () => {
        setIsDialogOpen(true);
    };
    const hideDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <button onClick={showDialog} className='PopUp button'>Iniciar sesión</button>
            {isDialogOpen && (
                <Suspense fallback={<span>loading</span>}>
                    <ResponsiveRodalRegister
                        visible={isDialogOpen}
                        onClose={hideDialog}
                        closeOnEsc={true}
                    >
                        <Register></Register>
                    </ResponsiveRodalRegister>
                </Suspense>
            )}
        </>
    )
}