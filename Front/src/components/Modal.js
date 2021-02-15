import { useState } from 'react';
import { Suspense, lazy } from 'react';
import useMatchMedia from '../shared/hooks/useMatchMedia';

import Login from './Login';
import Register from './Register';
import AddJob from './AddJob';
import Valorar from './Valorar';

import 'rodal/lib/rodal.css';


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

function AddJobPopUP(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { matches } = useMatchMedia('(max-width: 600px)');

    const { empresa } = props

    const showDialog = () => {
        setIsDialogOpen(true);
    };
    const hideDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <button onClick={showDialog} className='EmpresaInfoPopUpbutton'>Añadir puesto</button>
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
                        <AddJob empresa={empresa}></AddJob>
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
            <button onClick={showDialog} className='EmpresaInfoPopUpbutton'>Valorar</button>
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