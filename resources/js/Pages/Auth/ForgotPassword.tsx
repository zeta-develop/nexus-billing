import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPasswordPage({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
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

                    {/* Forgot Password Form */}
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
                        <h1 className="mb-2 text-2xl font-bold text-white">
                            Reset password
                        </h1>
                        <p className="mb-6 text-zinc-400">
                            Enter your email address and we&apos;ll send you
                            instructions to reset your password.
                        </p>

                        <form className="space-y-4">
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
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="name@example.com"
                                    required
                                    className="border-zinc-700 bg-zinc-800 text-white"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Send reset instructions
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <Link
                                href={route('login')}
                                className="font-medium text-indigo-400 hover:text-indigo-300"
                            >
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
