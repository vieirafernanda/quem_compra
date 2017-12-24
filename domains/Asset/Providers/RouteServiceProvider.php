<?php

namespace Domains\Asset\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The root namespace to assume when generating URLs to actions.
     *
     * @var string
     */
    protected $namespace = 'Domains\Asset\Http\Controllers';

    /**
     * @var
     */
    protected $prefix;

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->prefix = snake_case('Asset');

        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->prefix($this->prefix)
            ->namespace($this->namespace)
            ->name("Asset::")
            ->group(__DIR__.'/../routes/web.php');
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api/'.$this->prefix)
            ->middleware('api')
            ->namespace($this->namespace)
            ->name("AssetApi::")
            ->group(__DIR__.'/../routes/api.php');
    }
}
