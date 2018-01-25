<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    @yield('styles')
</head>
<body class="bg-brand-background h-screen">

<script>
  window.fbAsyncInit = function () {
    FB.init({
      appId: '{{ env('FACEBOOK_CLIENT_ID') }}',
      cookie: true,
      xfbml: true,
      version: 'v2.11'
    });

    FB.AppEvents.logPageView();

  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>
<div id="app">
    @include('partials._nav')

    @yield('content')
</div>

<!-- Scripts -->
@routes
@auth
<script src="{{ route('Asset::auth') }}"></script>
@endauth
@yield('scripts')
</body>
</html>
