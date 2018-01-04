@extends('account::layouts.app')

@section('content')

    <div class="container">
        <div class="text-center mb-6">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, natus.</p>
        </div>

        <div class="row xs:flex-col lg:flex-row">
            <login-form inline-template
                        method="post"
                        redirect-url="{{ route('Account::complete') }}"
                        route="{{ route('Account::login') }}">
                <form class="login-form xs:mb-8"
                      @submit.prevent="login"
                      v-cloak>
                    <div class="login-form__title">Acessar meus anuncios</div>

                    <div class="input__container">
                        <input type="text"
                               class="input__control"
                               name="email"
                               placeholder="Informe seu email"
                               v-model="user.email"
                               v-validate="validation.email">
                        <p class="text-red text-xs italic" v-show="errors.has('email')">
                            <span v-for="error in errors.collect('email')">@{{ error }}<br></span>
                        </p>
                    </div>
                    <div class="input__container">
                        <input type="password"
                               class="input__control"
                               name="password"
                               placeholder="senha"
                               v-model="user.password"
                               v-validate="validation.password">
                        <p class="text-red text-xs italic" v-show="errors.has('password')">
                            <span v-for="error in errors.collect('password')">@{{ error }}<br></span>
                        </p>
                    </div>
                    <div class="flex mb-4">
                        <label class="w-3/4">
                            <input type="checkbox"
                                   name="remember"
                                   v-model="user.remember"> <span
                                    class="text-sm text-grey-dark"> Lembrar de mim</span>
                        </label>
                    </div>

                    <button type="submit" class="btn btn--primary">Entrar</button>
                </form>
            </login-form>
            <fast-register-form
                    inline-template
                    method="post"
                    redirect-url="{{ route('Account::complete') }}"
                    route="{{ route('Account::register') }}">
                <form class="register-form__partial"
                      @submit.prevent="register"
                      v-cloak>

                    <div class="login-form__title">Ainda não tenho cadastro</div>

                    <div class="input__container">
                        <input type="text"
                               class="input__control {{ $errors->has('email') ? 'input__control--wrong' : '' }}"
                               name="email"
                               v-validate="validation.email"
                               placeholder="Email"
                               v-model="user.email">
                        <p class="text-red text-xs italic" v-show="errors.has('email')">
                            <span v-for="error in errors.collect('email')">@{{ error }}<br></span>
                        </p>
                    </div>
                    <div class="input__container">
                        <input type="password"
                               class="input__control {{ $errors->has('password') ? 'input__control--wrong' : '' }}"
                               name="password"
                               v-validate="validation.password"
                               placeholder="Senha"
                               v-model="user.password">
                        <p class="text-red text-xs italic" v-show="errors.has('password')">
                            <span v-for="error in errors.collect('password')">@{{ error }}<br></span>
                        </p>
                    </div>
                    <p class="text-grey-darker text-sm my-2">Mínimo 6 caracteres</p>
                    <div class="input__container">
                        <input type="password"
                               class="input__control"
                               name="password_confirmation"
                               v-validate="validation.password_confirmation"
                               placeholder="Confirmar senha"
                               ref="password_confirmation"
                               v-model="user.password_confirmation">
                        <p class="text-red text-xs italic" v-show="errors.has('password_confirmation')">
                            <span v-for="error in errors.collect('password_confirmation')">@{{ error }}<br></span>
                        </p>
                    </div>

                    <button type="submit" class="btn bg-green">Registrar</button>
                    <a href="{{ route('Account::facebook') }}">Registrar com facebook</a>
                </form>
            </fast-register-form>
        </div>
    </div>

@endsection
