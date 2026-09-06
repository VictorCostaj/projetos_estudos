import { Outlet, Navigate } from 'react-router-dom';

interface AuthGuardProps {
    isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const signedIn = false; //usuário não auth

    if (!signedIn && isPrivate) {
        //Redirecionar para /login
        return <Navigate to="/login" replace />; {/* replace, sobrescreve o histórico */ }
    }

    if (signedIn && !isPrivate) {
        {/* vai estar acessando uma rota privada, mando para o dashboard */ }
        //Redirecionar para / (dashboard)
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
