import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from '../view/pages/Dashboard';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { AuthGuard } from './AuthGuard';
import { AuthLayout } from '../view/layouts/AuthLayout';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AuthGuard isPrivate={false} />}> {/*Layout */}
                    <Route element={<AuthLayout />}> {/* ← adicione esta linha */}
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>
                </Route>

                <Route element={<AuthGuard isPrivate />}>
                    <Route path='/' element={<Dashboard />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}