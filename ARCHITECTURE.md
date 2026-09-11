# AutoFilm MVP Architecture

## Vertical slice
New Project → Genre → 5 Concepts → Story Bible → Characters → Storyboard → Review/Edit → QA → Approve.

## Production pipeline
1. OpenAI Responses API creates structured Filipino concepts/story bible/dialogue.
2. Image provider creates still frames from prompts containing MasterRef identity continuity.
3. WAN image-to-video turns each still into short clips.
4. A 30-second scene is compiled from multiple WAN clips because WAN clip duration is shorter than 30 seconds.
5. Dialogue QA checks speaker IDs, order, missing lines and edit state.
6. Review gate blocks episode compilation until scenes are approved.
7. Final episode export uses persistent storage; provider URLs must not be treated as permanent storage.

## Data model
Project → Story Bible → Characters/MasterRefs → Episodes → Scenes → Dialogue → Images → WAN Jobs → QA → Compiled Videos.

## Security
Provider keys only on backend. APK receives short-lived app/session tokens and job status, never raw provider credentials.
