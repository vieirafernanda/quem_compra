<nav class="bg-brand h-12 shadow mb-8">
    <div class="container mx-auto h-full">
        <div class="flex items-center justify-center h-12">
            <div class="mr-6">
                <a href="{{ url('/') }}" class="no-underline font-semibold text-white">
                    {{ config('app.name', 'Quem Compra') }}
                </a>
            </div>
            <div class="flex-1 text-right font-semibold ">
                @guest
                    <a class="no-underline hover:underline text-grey-darker pr-3 text-sm text-white"
                       href="{{ route('Account::login') }}">Login</a>
                    <a class="no-underline hover:underline text-grey-darker text-sm text-white" href="{{ route('Account::register') }}">Register</a>
                @else
                    <span class="text-grey-darker text-sm pr-4 text-white">{{ auth()->user()->name }}</span>

                    <a href="{{ route('logout') }}"
                       class="no-underline hover:underline text-grey-darker text-sm"
                       onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">Logout</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                @endguest
            </div>
        </div>
    </div>
</nav>