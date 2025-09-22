# Audio Assets

This directory contains audio files for the rhythm codes.

## Adding New Audio Files

1. Place your audio files (.mp3, .wav, .ogg, .m4a) in this directory
2. Use descriptive filenames (e.g., `mende-guadeloupe.mp3`)
3. Update the database to reference the new audio file paths

## URL Format

Audio files should be referenced in the database as:
```
/assets/audio/filename.mp3
```

The webpack configuration will automatically serve these files from the client build.