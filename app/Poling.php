<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Poling extends Model
{
    protected $table = 'poling';
    
    public function candidate()
    {
        return $this->hasMany(Candidate::class, 'poling_id', 'id');
    }
}

