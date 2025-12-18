<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Track extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'artist',
        'image',
        'audio',
        'is_visible',
        'play_count',
    ];

    /**
     * Get the playlists that contain this track.
     */
    public function playlists(): BelongsToMany
    {
        return $this->belongsToMany(Playlist::class)
            ->withPivot('play_count')
            ->withTimestamps();
    }
}

