<h1>Click no botão abaixo para confirmar seu email</h1>

@component('vendor.mail.html.button')
    @slot('url', route('Account::verify', $email_token))
    Clique aqui
@endcomponent