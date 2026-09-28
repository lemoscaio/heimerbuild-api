# Heimerbuild API (archived)

This was the Express + Prisma API of the original Heimerbuild (2022–2023). It is no longer used and the repository is archived.

Heimerbuild now lives in [lemoscaio/heimerbuild](https://github.com/lemoscaio/heimerbuild) and runs at https://heimerbuild.caio-lemos94.workers.dev. Game data is generated at build time from Riot's Data Dragon and CommunityDragon and served as static files, so no API is needed. Accounts and saved builds will come back later with a new backend (Hono, Drizzle and Postgres on Neon), tracked in that repository's issues.

Known issues in this code (sign-up response echoing the password, production data routes returning empty bodies, JWT without expiry) will not be fixed.
