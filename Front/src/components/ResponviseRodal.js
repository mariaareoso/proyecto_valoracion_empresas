import Rodal from 'rodal';
import useMatchMedia from '../shared/hooks/useMatchMedia';

function ResponsiveRodal({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '500px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}
function ResponsiveRodalLogin({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '500px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}
function ResponsiveRodalRegister({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '650px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}
function ResponsiveRodalJob({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '500px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}
function ResponsiveRodalEmpresa({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '500px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}
function ResponsiveRodalValorar({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '750px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}

export {
    ResponsiveRodalValorar,
    ResponsiveRodalEmpresa,
    ResponsiveRodalJob,
    ResponsiveRodalRegister,
    ResponsiveRodalLogin,
    ResponsiveRodal
}