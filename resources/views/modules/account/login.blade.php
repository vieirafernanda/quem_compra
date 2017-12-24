@extends('account::layouts.app')

@section('content')

    <div class="container">
        <div class="text-center mb-6">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, natus.</p>
        </div>

        <div class="row">
            <form class="login-form" method="post" action="{{ route('Account::login') }}">
                {{ csrf_field() }}

                <div class="login-form__title">Acessar meus anuncios</div>

                <div class="input__container">
                    <input type="text"
                           class="input__control"
                           name="email"
                           placeholder="Informe seu email">
                </div>
                <div class="input__container">
                    <input type="password"
                           class="input__control"
                           name="password"
                           placeholder="senha"></div>

                <button type="submit">Entrar</button>
            </form>
            <form method="post" action="{{ route('Account::register') }}" class="register-form__partial">
                {{ csrf_field() }}

                <div class="login-form__title">Ainda não tenho cadastro</div>

                <div class="input__container">
                    <input type="text"
                           class="input__control {{ $errors->has('email') ? 'input__control--wrong' : '' }}"
                           name="email"
                           value="{{ old('email') }}"
                           placeholder="Email">
                    <p class="text-red text-xs italic">{{ $errors->first('email') }}</p>
                </div>
                <div class="input__container">
                    <input type="password"
                           class="input__control {{ $errors->has('password') ? 'input__control--wrong' : '' }}"
                           name="password"
                           placeholder="Senha">
                    <p class="text-red text-xs italic">{{ $errors->first('password') }}</p>
                </div>
                <p class="text-grey-darker text-sm my-2">Mínimo 6 caracteres</p>
                <div class="input__container">
                    <input type="password"
                           class="input__control"
                           name="password_confirmation"
                           placeholder="Confirmar senha"></div>

                <button type="submit">Registrar</button>
                <a href="{{ route('Account::facebook') }}">Registrar com facebook</a>
            </form>
        </div>
    </div>

@endsection
