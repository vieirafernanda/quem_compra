<?php

namespace Domains\Account\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompleteAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|string|max:50|unique:users',
            'state' => 'required|integer|exists:states,id',
            'city' => 'required|integer|exists:cities,id',
            'neighborhood' => 'required|string',
            'cpf' => 'nullable|string',
            'phone' => 'required|string'
        ];
    }
}
