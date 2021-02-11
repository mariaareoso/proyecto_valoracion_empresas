import Rodal from 'rodal';
import useMatchMedia from '../../shared/hooks/useMatchMedia';

export default function ResponsiveRodal({ children, visible, onClose }) {
    const { matches } = useMatchMedia('(max-width: 600px)');
    return (
        <Rodal
            visible={visible}
            onClose={onClose}
            closeOnEsc={true}
            className="dialogo-reshulon"
            customStyles={{ width: matches ? '100%' : '400px', height: matches ? '100%' : '525px' }}
            animation={matches ? 'zoom' : 'fade'}
        >
            {children}
        </Rodal>
    );
}