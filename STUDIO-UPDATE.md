# Three-studio website update

The approved Russian pages are stored in public/studio-assets. Existing React source and Romanian/English routes are retained. The final build step publishes the approved pages at /ru, /buiucani/ru, /center/ru and /plus/ru. Existing studio links in Instagram continue to work; /centru/ru and /podo-plus/ru are aliases.

Bookings: Buiucani → Altegio company 578109; Centre → Altegio company 1317171; Plus → evpodolux-third.poleakova80.chatgpt.site. The Plus booking application is separate from this marketing repository.

Deployment: preserve the existing Vercel project and domain settings. Use its preview deployment before production. Roll back by reverting the merge commit. Russian descriptions, staff, administrator contact blocks, automatic carousels and EXO prices are included; Romanian/English translations of new sections are a separate pending task.

