<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Playlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'user_id',
        'title',
    ];

    /**
     * Get the user that owns the playlist.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the tracks for the playlist.
     */
    public function tracks(): BelongsToMany
    {
        return $this->belongsToMany(Track::class)
            ->withPivot('play_count')
            ->withTimestamps();
    }
}
