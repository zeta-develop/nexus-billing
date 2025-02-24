import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function RegisterPage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="mb-8 flex items-center justify-center">
                        <Link href="/" className="flex items-center space-x-2">
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
                        </Link>
                    </div>

                    {/* Register Form */}
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
                        <h1 className="mb-6 text-2xl font-bold text-white">
                            Create an account
                        </h1>
                        <form onSubmit={submit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="firstName"
                                        className="text-zinc-300"
                                    >
                                        First name
                                    </Label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="border-zinc-700 bg-zinc-800 text-white"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="lastName"
                                        className="text-zinc-300"
                                    >
                                        Last name
                                    </Label>
                                    <Input
                                        value={data.lastname}
                                        onChange={(e) =>
                                            setData('lastname', e.target.value)
                                        }
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="border-zinc-700 bg-zinc-800 text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-zinc-300"
                                >
                                    Username
                                </Label>
                                <Input
                                    value={data.username}
                                    onChange={(e) =>
                                        setData('username', e.target.value)
                                    }
                                    id="username"
                                    name="username"
                                    required
                                    className="border-zinc-700 bg-zinc-800 text-white"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-zinc-300"
                                >
                                    Email
                                </Label>
                                <Input
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="border-zinc-700 bg-zinc-800 text-white"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-zinc-300"
                                    >
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                        required
                                        className="border-zinc-700 bg-zinc-800 text-white"
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="confirmPassword"
                                        className="text-zinc-300"
                                    >
                                        Confirm password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        value={data.password_confirmation}
                                        required
                                        onChange={(e) =>
                                            setData(
                                                'password_confirmation',
                                                e.target.value,
                                            )
                                        }
                                        className="border-zinc-700 bg-zinc-800 text-white"
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" required />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm text-zinc-400"
                                >
                                    I agree to the{' '}
                                    <Link
                                        href="/terms"
                                        className="text-indigo-400 hover:text-indigo-300"
                                    >
                                        terms and conditions
                                    </Link>
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Create account
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <span className="text-zinc-400">
                                Already have an account?
                            </span>{' '}
                            <Link
                                href={route('login')}
                                className="font-medium text-indigo-400 hover:text-indigo-300"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
