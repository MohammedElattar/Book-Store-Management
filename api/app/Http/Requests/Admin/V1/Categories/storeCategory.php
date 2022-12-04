<?php

namespace App\Http\Requests\Admin\V1\Categories;
use App\Http\Traits\HttpResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class storeCategory extends FormRequest
{
    use HttpResponse;
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "name" => "required|string|unique:categories,name|regex:/^[\p{Arabic}\p{Hebrew}a-z]+$/iu" ,
            "status" => "required|between:0,1"
        ];
    }
    public function messages()
    {
        return [
            "name.required" => "Name field is required" ,
            "name.string"   => "Name must be a string" ,
            "name.unique"   => "Name is already in use" ,
            "name.regex"    => "Name must have arabic or english characters only",
            "status.required" => "Status can't be empty",
            "status"          => "Status must be between 0 , 1"
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        throw new \Illuminate\Validation\ValidationException($validator , $this->error("validation errors" , 422 , [
            "errors" => $validator->errors()
        ]));
    }
}