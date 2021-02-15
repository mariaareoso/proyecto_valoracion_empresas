
import { useState } from 'react';
import { Suspense, lazy } from 'react';
import useMatchMedia from '../shared/hooks/useMatchMedia';
import Register from './Register';

import 'rodal/lib/rodal.css';

const ResponsiveRodal = lazy(() => import('./ResponviseRodal'));

export default function Modal() {
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const { matches } = useMatchMedia('(max-width: 600px)');

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
                    <ResponsiveRodal
                        visible={isDialogOpen}
                        onClose={hideDialog}
                        closeOnEsc={true}
                        className="dialogo-reshulon"
                        customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '400px' }}
                        animation="fade"
                    >
                        <Register></Register>
                    </ResponsiveRodal>
                </Suspense>
            )}
        </>
    )
}