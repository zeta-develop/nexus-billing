import InputError from '@/Components/InputError';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Switch } from '@/Components/ui/switch';
import { DashboardLayout } from '@/Layouts/DashboardLayout';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function SecuritySettingsPage() {
    const [twoFactor, setTwoFactor] = useState(false);

    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            username: user.username,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data: passwordData,
        setData: setPasswordData,
        errors: passwordErrors,
        put,
        reset,
        processing: passwordProcessing,
        recentlySuccessful: passwordRecentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <Card className="border-zinc-700 bg-zinc-800">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Personal Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
                            <div className="flex-1 space-y-2">
                                <Label
                                    htmlFor="username"
                                    className="text-zinc-300"
                                >
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    name="username"
                                    value={data.username}
                                    onChange={(e) =>
                                        setData('username', e.target.value)
                                    }
                                    className="border-zinc-600 bg-zinc-700 text-white"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1 space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-zinc-300"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        disabled
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        className="border-zinc-600 bg-zinc-700 text-white"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <Label
                                        htmlFor="lastname"
                                        className="text-zinc-300"
                                    >
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        disabled
                                        value={data.lastname}
                                        onChange={(e) =>
                                            setData('lastname', e.target.value)
                                        }
                                        className="border-zinc-600 bg-zinc-700 text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-zinc-300"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    disabled
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className="border-zinc-600 bg-zinc-700 text-white"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Save Changes
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <Card className="border-zinc-700 bg-zinc-800">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Change Password
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={updatePassword} className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="current_password"
                                    className="text-zinc-300"
                                >
                                    Current Password
                                </Label>
                                <Input
                                    id="current_password"
                                    ref={currentPasswordInput}
                                    value={passwordData.current_password}
                                    onChange={(e) =>
                                        setPasswordData(
                                            'current_password',
                                            e.target.value,
                                        )
                                    }
                                    type="password"
                                    className="border-zinc-600 bg-zinc-700 text-white"
                                    autoComplete="current-password"
                                />
                                <InputError
                                    message={passwordErrors.current_password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-zinc-300"
                                >
                                    New Password
                                </Label>
                                <Input
                                    id="password"
                                    ref={passwordInput}
                                    value={passwordData.password}
                                    onChange={(e) =>
                                        setPasswordData(
                                            'password',
                                            e.target.value,
                                        )
                                    }
                                    type="password"
                                    className="border-zinc-600 bg-zinc-700 text-white"
                                    autoComplete="new-password"
                                />
                                <InputError
                                    message={passwordErrors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password_confirmation"
                                    className="text-zinc-300"
                                >
                                    Confirm New Password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    value={passwordData.password_confirmation}
                                    onChange={(e) =>
                                        setPasswordData(
                                            'password_confirmation',
                                            e.target.value,
                                        )
                                    }
                                    type="password"
                                    className="border-zinc-600 bg-zinc-700 text-white"
                                    autoComplete="new-password"
                                />
                                <InputError
                                    message={
                                        passwordErrors.password_confirmation
                                    }
                                    className="mt-2"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="bg-indigo-600 text-white hover:bg-indigo-700"
                                disabled={passwordProcessing}
                            >
                                Change Password
                            </Button>
                            <Transition
                                show={passwordRecentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Saved.
                                </p>
                            </Transition>
                        </form>
                    </CardContent>
                </Card>

                <Card className="border-zinc-700 bg-zinc-800">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Two-Factor Authentication
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <Label
                                htmlFor="two-factor"
                                className="text-zinc-300"
                            >
                                Enable Two-Factor Authentication
                            </Label>
                            <Switch
                                id="two-factor"
                                checked={twoFactor}
                                onCheckedChange={setTwoFactor}
                            />
                        </div>
                        {twoFactor && (
                            <p className="mt-2 text-sm text-zinc-400">
                                Two-factor authentication is enabled. You'll be
                                asked for a verification code when you sign in.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
