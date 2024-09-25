<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    /**
     * Especificamos que un proyecto puede tener muchas tareas.
     */
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    /**
     * Especificamos que un proyecto puede estar creado por un usuario
     */
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /***
     * Especificamos que un proyecto puede ser actualizado por un usuario
     */
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
