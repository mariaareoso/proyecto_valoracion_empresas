import { useState } from 'react';
import { Suspense, lazy } from 'react';
import useMatchMedia from '../shared/hooks/useMatchMedia';

import Login from './Login';
import Register from './Register';
import AddJob from './AddJob';


import 'rodal/lib/rodal.css';
import '../css/Modal.css';
import Valorar from './Valorar';

const ResponsiveRodal = lazy(() => import('./ResponviseRodal'));

function LoginPopUP() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
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
                        <Login></Login>
                    </ResponsiveRodal>
                </Suspense>
            )}
        </>
    )
}

function RegisterPopUP() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
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

function AddJobPopUP() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { matches } = useMatchMedia('(max-width: 600px)');

    const showDialog = () => {
        setIsDialogOpen(true);
    };
    const hideDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <button onClick={showDialog} className='PopUp button'>Añadir puesto</button>
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
                        <AddJob></AddJob>
                    </ResponsiveRodal>
                </Suspense>
            )}
        </>
    )
}

function ValorarPopUP() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { matches } = useMatchMedia('(max-width: 600px)');

    const showDialog = () => {
        setIsDialogOpen(true);
    };
    const hideDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <button onClick={showDialog} className='PopUp button'>Valorar</button>
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
                        <Valorar></Valorar>
                    </ResponsiveRodal>
                </Suspense>
            )}
        </>
    )
}

export { LoginPopUP, RegisterPopUP, AddJobPopUP, ValorarPopUP }