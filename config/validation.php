<?php

return [
    'name' => 'Validation',

    'rules' =>  [
        'unique'    =>  \Domains\Validation\Validators\UniqueValidator::class,
    ]
];
