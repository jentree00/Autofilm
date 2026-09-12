# AutoFilm APK Build Fix

## Fixed issue

The GitHub Actions workflow previously used `actions/setup-node@v4` with `cache: npm`.
GitHub Actions then required a committed dependency lock file (`package-lock.json`,
`npm-shrinkwrap.json`, or `yarn.lock`) before it could continue.

This MVP package does not depend on a lock file yet, so the workflow now:

- uses Node 24;
- removes `cache: npm`;
- runs `npm install --no-audit --no-fund` directly;
- continues with Java 17 and EAS APK build.

## Required GitHub secret

Add this repository secret:

`EXPO_TOKEN`

Do not put the token in the source code or in this ZIP.

## Build

1. Extract this ZIP.
2. Push the contents to the `main` branch of the AutoFilm GitHub repository.
3. Open **Actions → Build Android APK**.
4. Run **Run workflow**, or push to `main`.
5. Wait for the EAS build to finish.
6. Download the generated APK from the completed GitHub Actions run / EAS build page.

## Important

The app can be tested in its current mock/demo flow without OpenAI or WAN credentials.
Provider keys should be added later to the secure backend, never to the APK.
