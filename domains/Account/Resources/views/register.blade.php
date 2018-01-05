@extends('account::layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <form class="register-form" action="{{ route('Account::register') }}" method="post">
                {{ csrf_field() }}
                <h1 class="register-form__title">Registre-se! É fácil e rápido</h1>

                @if(session('name'))
                    <input type="hidden" name="name" value="{{ session('name') }}">
                @endif
                <div class="input__container">
                    <label for="email" class="input__label">Email</label>
                    <input type="text"
                           class="input__control"
                           name="email"
                           value="{{ session('email', old('email')) }}"
                           placeholder="Informe seu email">
                </div>
                <div class="input__container">
                    <label for="password" class="input__label">Senha</label>
                    <input type="password"
                           class="input__control"
                           name="password"
                           placeholder="senha"></div>
                <div class="input__container">
                    <label for="password" class="input__label">Confirmar Senha</label>
                    <input type="password"
                           class="input__control"
                           name="password_confirmation"
                           placeholder="repetir senha"></div>

                <button class="btn btn-primary">Registrar</button>
            </form>
        </div>
    </div>

@endsection
