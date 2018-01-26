@extends('account::layouts.app')

@section('content')

    <div class="container-fluid p-2 pb-6">
        <div class="row">
            <update-form
                :auth="{{$user }}"></update-form>
        </div>
    </div>

@endsection