<?php

namespace App\Http\Resources\Api\clients\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class booksResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'writter' => $this->writter,
            'publisher' => $this->publisher,
            'vendor' => $this->vendor,
            'quantity' => $this->quantity,
            'price' => $this->price,
            'category_id' => $this->category_id,
            'category_name' => $this->category_name,
            'img' => filter_var($this->img, FILTER_VALIDATE_URL) ? $this->img : ($this->img ? env('APP_URL', 'http://localhost:8000').("/api/storage/books/{$this->img}") : null),
        ];
    }
}
