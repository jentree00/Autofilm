# AutoFilm MVP

Netflix-inspired Filipino cinematic AI short-film/series creator.

## Current MVP

- No login
- No user-facing credits
- Dark cinematic UI
- New Project flow
- Genre selection
- AI story concept flow (mock-ready)
- Story Bible / Character MasterRef model
- 5 episodes × 3 scenes = 15 scenes
- Mandatory Review & Edit flow
- Dialogue speaker QA
- Scene-level regeneration hooks
- WAN 2.7 image-to-video adapter architecture
- Mock mode for APK testing without provider credentials
- Android APK build through GitHub Actions

## APK build — no Expo token required

This version builds the native Android project directly on the GitHub runner. You do **not** need `EXPO_TOKEN` just to produce the MVP APK.

1. Upload/push the `autofilm-build` folder to your GitHub repository.
2. Open **Actions**.
3. Select **Build Android APK**.
4. Select **Run workflow**.
5. Wait for the workflow to finish.
6. Open the completed workflow run and download the artifact named **AutoFilm-debug-release-apk**.

The workflow runs:

`npm install → expo prebuild → Gradle assembleRelease → upload APK`

## Why EAS was removed from the default APK workflow

EAS Build requires an Expo account and authentication token in CI. That was the blocker shown by GitHub Actions. The MVP now uses a direct Android/Gradle build so APK testing can proceed without an Expo account.

`eas.json` is retained for a future EAS/cloud-build option.

## Provider credentials

Do not put OpenAI, Alibaba/WAN, or other provider API keys inside the APK. They belong on a secure backend/server and should be stored as GitHub/backend secrets.

See `.env.example` and `server/.env.example` for placeholders.

## WAN 2.7

The video architecture targets Wan 2.7 image-to-video. A 30-second AutoFilm scene is designed to be assembled from multiple WAN clips because individual WAN generations are shorter than the full 30-second scene.

## Package

Android package: `com.autofilm.app`


### v4 build fix
The GitHub Actions workflow does not enable Gradle caching during setup-java. Gradle cache setup requires an existing Gradle project, but Expo prebuild creates the Android/Gradle project later in the job. This prevents the `No file ... *.gradle*` cache-path failure.
