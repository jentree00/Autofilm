# AutoFilm APK Build Fix — v3

## Fixed in this build

### 1. Missing npm lock file
The GitHub Actions workflow no longer uses `cache: npm`, so a missing `package-lock.json` does not stop `actions/setup-node`.

### 2. EAS authentication blocker
The previous workflow ran:

`eas build --platform android --profile preview --non-interactive`

That requires an Expo account plus `EXPO_TOKEN` in GitHub Actions. The new default workflow does not call EAS.

### 3. Direct Android APK build
The workflow now:

1. Installs Node 24.
2. Installs Java 17.
3. Installs Expo dependencies.
4. Runs `expo prebuild --platform android`.
5. Runs Gradle `assembleRelease`.
6. Uploads the generated APK as a GitHub Actions artifact.

## GitHub

No `EXPO_TOKEN` secret is required for this MVP APK workflow.

If you later want EAS cloud builds, add `EXPO_TOKEN` and use the EAS workflow separately.
