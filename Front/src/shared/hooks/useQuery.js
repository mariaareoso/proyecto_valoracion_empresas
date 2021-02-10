import { useLocation } from 'react-router-dom';

function useQuerySearch() {
    return new URLSearchParams(useLocation().search);
}

function useQueryEmpresaInfo() {
    return new URLSearchParams(useLocation().getEmpresaInfo);
}

export { useQuerySearch, useQueryEmpresaInfo }