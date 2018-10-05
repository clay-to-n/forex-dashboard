# Simple Forex Tracker

## Notes:
- API Keys are being stored in plaintext, in each file, for ease of testing. This should be fixed, keep the API key
  as an environment variable.
- There is no separation of presentational vs container components. If this were to expand, we should move the API calls
  to container components, and keep the presentational components purely focused on display.
- The styling is all inherited from Create-React-App. If we were to style this, we would break out component styles into
  their own css files. I put a bit of styling into App.css, purely for speed of development.
- There's no real handling for failed API calls. Right now it won't display anything to the user if the internet is out,
  or 1Forge is down, or the API key fails.
