@extends('account::layouts.app')

@section('content')

    <div class="container-fluid p-2 pb-6">
        <div class="row">
            <complete-form
                :auth="{{ auth()->user() }}"></complete-form>
        </div>
    </div>

@endsection