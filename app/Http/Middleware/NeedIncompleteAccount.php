<?php

namespace App\Http\Middleware;

use Closure;

class NeedIncompleteAccount
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!auth()->check()) {
            return redirect(route('Account::login'));
        }

        $user = auth()->user();
        $fields = collect([
            $user->name,
            $user->username,
            $user->cpf,
            $user->cep,
            $user->phone
        ]);
        $complete = $fields->reduce(function($carry, $item) { return !!$carry && !!$item; }, true);
        if ($complete) {
            return redirect(route('Account::index'));
        }
        return $next($request);
    }
}
