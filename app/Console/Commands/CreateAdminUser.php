<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:admin-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new admin user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->ask('Enter the name');
        $lastname = $this->ask('Enter the lastname');
        $username = $this->ask('Enter the username');
        $email = $this->ask('Enter the email');
        $password = $this->secret('Enter the password');

        $user = User::create([
            'name' => $name,
            'lastname' => $lastname,
            'username' => $username,
            'email' => $email,
            'password' => Hash::make($password),
            'role' => 'admin',
        ]);

        $this->info('Admin user created successfully!');
    }
}
