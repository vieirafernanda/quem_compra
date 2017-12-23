<?php

namespace Domains\Model\Repositories;

use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Pagination\AbstractPaginator as Paginator;
use Illuminate\Support\Collection;

/**
 * Class BaseRepository
 * @package Domains\Model\Repositories
 */
abstract class BaseRepository
{
    /**
     * @var QueryBuilder|EloquentBuilder
     */
    private $query;

    /**
     * @return string
     */
    abstract public function getModel(): string;

    abstract public function getDefaults(): array;

    /**
     * @return mixed
     */
    public function getModelInstance(): Model
    {
        return resolve($this->getModel());
    }

    /**
     * @return EloquentBuilder|QueryBuilder
     */
    protected function newQuery()
    {
        return $this->getModelInstance()->newQuery();
    }

    /**
     * @param string $attribute
     * @return string
     */
    public function getDefault($attribute)
    {
        return $this->getDefaults()[$attribute] ?? null;
    }

    /**
     * @return EloquentBuilder|QueryBuilder
     */
    public function getQuery()
    {
        return $this->query ?: $this->setQuery($this->newQuery())->getQuery();
    }

    /**
     * @param EloquentBuilder|QueryBuilder|callable $query
     * @return BaseRepository
     */
    public function setQuery($query)
    {
        $this->query = is_callable($query) ? $query($this->getQuery()) : $query;

        return $this;
    }

    /**
     * @return Collection
     */
    public function getFillable()
    {
        return collect($this->getModelInstance()->getFillable());
    }

    /**
     * @param callable $action
     */
    public function loopThroughFillable(callable $action)
    {
        $this->getFillable()
            ->each($action);
    }

    /**
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes)
    {
        $model = $this->getModelInstance();
        $attributes = collect($attributes);

        $this->loopThroughFillable(function ($fillable) use ($model, $attributes) {
            $model->setAttribute($fillable, $attributes->get($fillable, $this->getDefault($fillable)));
        });

        $model->save();

        return $model;
    }

    /**
     * @param Model $model
     * @param array $attributes
     * @param array $options
     * @return bool
     */
    public function updateModel(Model $model, array $attributes = [], array $options = [])
    {
        return $model->update($attributes, $options);
    }
}