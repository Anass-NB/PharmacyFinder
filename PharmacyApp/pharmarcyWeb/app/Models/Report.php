<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    public function pharmacy()
    {
      return $this->belongsTo(Pharmacy::class,"pharmacy_id");
    }
}
