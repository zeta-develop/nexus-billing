import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function LoginPage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
                <div className="w-full max-w-md">
                    <div className="mb-8 flex items-center justify-center">
                        <a href="/" className="flex items-center space-x-2">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 10V3L4 14H11V21L20 10H13Z"
                                    fill="#FF7A00"
                                    stroke="#FF7A00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-2xl font-bold text-white">
                                Nexus
                            </span>
                        </a>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
                        <h1 className="mb-6 text-2xl font-bold text-white">
                            Welcome back
                        </h1>

                        <form onSubmit={submit} className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-zinc-300"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    placeholder="name@example.com"
                                    required
                                    autoComplete="email"
                                    className="border-zinc-700 bg-zinc-800 text-white"
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="password"
                                        className="text-zinc-300"
                                    >
                                        Password
                                    </Label>
                                    <a
                                        href="/forgot-password"
                                        className="text-sm text-indigo-400 hover:text-indigo-300"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    className="border-zinc-700 bg-zinc-800 text-white"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Sign in
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <span className="text-zinc-400">
                                Don&apos;t have an account?
                            </span>{' '}
                            <a
                                href="/register"
                                className="font-medium text-indigo-400 hover:text-indigo-300"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
