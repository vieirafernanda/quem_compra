@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <form class="card card--md complete-form w-full sm:w-full lg:w-1/2">
                <header class="card__header complete-form__header">
                    Adicionar Outras Informações Pessoais
                </header>
                <main class="card__content complete-form__fields">
                    <div class="input__container">
                        <label for="phone" class="input__label">Cpf / Cnpj</label>
                        <input type="text"
                               class="input__control"
                               name="phone"
                               placeholder="Digite seu cpf ou cnpj">
                    </div>
                    <div class="input__container">
                        <label for="phone" class="input__label">Telefone</label>
                        <input type="text"
                               class="input__control"
                               name="phone"
                               placeholder="Digite seu telefone">
                    </div>
                    <div class="input__container">
                        <label for="phone" class="input__label">Estado</label>
                        <input type="text"
                               class="input__control"
                               name="phone"
                               placeholder="Digite seu estado">
                    </div>
                    <div class="input__container">
                        <label for="phone" class="input__label">Cidade</label>
                        <input type="text"
                               class="input__control"
                               name="phone"
                               placeholder="Digite sua cidade">
                    </div>
                    <div class="input__container">
                        <label for="phone" class="input__label">Bairro</label>
                        <input type="text"
                               class="input__control"
                               name="phone"
                               placeholder="Digite seu bairro">
                    </div>

                    <button class="btn btn--primary">Salvar</button>
                </main>
            </form>
        </div>
    </div>

@endsection