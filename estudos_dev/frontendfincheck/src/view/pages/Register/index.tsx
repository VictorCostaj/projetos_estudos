import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
    return (
        <div>
            <header className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
                    Crie sua conta
                </h1>

                <p className="space-x-2">
                    <span className=" text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span>
                    <Link to="/login" className="tracking-[-0.5px] font-bold text-teal-900">Fazer Login</Link>
                </p>
            </header>

            <form action="" className="mt-[60px] flex flex-col gap-4">
                <Input
                    placeholder="Nome"
                    name="name"
                />



                <Input
                    type="e-mail"
                    placeholder="E-mail"
                    name="e-mail"
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                />



                <Button type="submit" className="mt-2">
                   Criar Conta
                </Button>
            </form>
        </div>
    )
}