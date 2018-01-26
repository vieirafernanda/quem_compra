<?php

if (!function_exists('auth_token')) {
    function auth_token()
    {
        return \Tymon\JWTAuth\Facades\JWTAuth::fromUser(auth()->user());
    }
}

if (!function_exists('js_view')) {
    function js_view($view, $data = [], $status = 200, ...$mergeData)
    {
        return content_view('application/javascript', $view, $data, $status, ...$mergeData);

    }
}

if (!function_exists('css_view')) {
    function css_view($view, $data = [], $status = 200, ...$mergeData)
    {
        return content_view('text/css', $view, $data, $status, ...$mergeData);
    }
}

if (!function_exists('content_view')) {
    function content_view($contentType = 'application/javascript', $view, $data, $status, ...$mergeData)
    {
        $contents = view($view, $data, ...$mergeData);
        return response($contents, $status, [
            'Content-Type' => $contentType
        ]);
    }
}