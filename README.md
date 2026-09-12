# AutoFilm — MVP APK Build

Netflix-inspired dark cinematic Filipino AI short-film creator.

## Included in this build
- No login
- No user-facing credits
- Home / Projects / Characters / Templates / Profile
- New Project → Genre → 5 concepts → Story Bible → Storyboard
- 15-scene structure (5 episodes × 3 scenes)
- Character MasterRef + wardrobe continuity data model
- Mandatory Review & Edit workflow
- Speaker-tagged dialogue + dialogue QA gate
- WAN image-to-video integration stub (backend)
- Mock mode for APK testing without API keys
- EAS Android APK profile

## Run locally
1. Install Node.js 20+.
2. `npm install`
3. `npx expo start`
4. Test on Expo Go or Android emulator.

## Build APK
1. `npm install -g eas-cli`
2. `eas login`
3. `eas build --platform android --profile preview`

## Backend
`cd server && npm install && cp .env.example .env && npm run dev`

The mobile app can run entirely in mock mode while backend/provider keys are being prepared.

## Security
OpenAI and Alibaba/Wan keys belong only on the backend. Never ship provider keys inside the APK.

## APK Build Fix (September 2026)

The included GitHub Actions workflow no longer uses npm dependency caching, so the
first MVP build does not fail when `package-lock.json` is not present. It uses Node 24
and installs dependencies with `npm install --no-audit --no-fund` before running EAS.
See `BUILD_FIX.md` for the exact build steps.
