import { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';

import Login from './Login';
import Register from './Register';
import AddJob from './AddJob';
import Valorar from './Valorar';

import AddEmpresa from './AddEmpresa';
import { getEmpresa } from '../http/apiSharpView';
import { ResponsiveRodalEmpresa, ResponsiveRodalJob, ResponsiveRodalLogin, ResponsiveRodalRegister, ResponsiveRodalValorar } from './ResponviseRodal';
import 'rodal/lib/rodal.css';


const { } = lazy(() => import('./ResponviseRodal'));

function LoginPopUP() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                    <ResponsiveRodalLogin
                        visible={isDialogOpen}
                        onClose={hideDialog}
                    >
                        <Login></Login>
                    </ResponsiveRodalLogin>
                </Suspense>
            )}
        </>
    )
}

function RegisterPopUP() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                    >
                        <Register></Register>
                    </ResponsiveRodalRegister>
                </Suspense>
            )}
        </>
    )
}

function AddJobPopUP(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                    <ResponsiveRodalJob
                        visible={isDialogOpen}
                        onClose={hideDialog}
                        closeOnEsc={true}>
                        <AddJob empresa={empresa}></AddJob>
                    </ResponsiveRodalJob>
                </Suspense>
            )}
        </>
    )
}

function AddEmpresaPopUP(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { empresa } = props

    const [empresaData, setEmpresaData] = useState()

    useEffect(() => {
        const infoEmpresa = async () => {
            setEmpresaData(await getEmpresa(empresa.idusuario))
        }
        infoEmpresa();
    }, [empresa.idusuario])


    const showDialog = () => {
        setIsDialogOpen(true);
    };
    const hideDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <button onClick={showDialog} className='EmpresaInfoPopUpbutton'>Añadir empresa</button>
            {isDialogOpen && (
                <Suspense fallback={<span>loading</span>}>
                    <ResponsiveRodalEmpresa
                        visible={isDialogOpen}
                        onClose={hideDialog}
                        closeOnEsc={true}
                    >
                        <AddEmpresa empresa={empresaData}></AddEmpresa>
                    </ResponsiveRodalEmpresa>
                </Suspense>
            )}
        </>
    )
}

function ValorarPopUP(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const showDialog = () => {
        setIsDialogOpen(true);
    };
    const hideDialog = () => {
        setIsDialogOpen(false);
    };

    const { empresa } = props

    return (
        <>
            <button onClick={showDialog} className='EmpresaInfoPopUpbutton'>Valorar</button>
            {isDialogOpen && (
                <Suspense fallback={<span>loading</span>}>
                    <ResponsiveRodalValorar
                        visible={isDialogOpen}
                        onClose={hideDialog}
                    >
                        <Valorar empresa={empresa}></Valorar>
                    </ResponsiveRodalValorar>
                </Suspense>
            )}
        </>
    )
}

export { LoginPopUP, RegisterPopUP, AddJobPopUP, AddEmpresaPopUP, ValorarPopUP }