# ASG2-PlayPal

First of all, please ignore the repo name. The project idea was changed after the repo was created, and so it was not changed due to potential errors stemming from changing it.

PlayPal is a web service to allow players of the video game Valorant to pay for teammates to play with them. Essentially, we're linking up players that might not otherwise meet in-game due to a variety of reasons, including and not limited to: difference in rank, playstyle, or even the sheer number of players in the game.

## Design Process

As we've said, PlayPal is a web service to allow players of the video game Valorant to pay for teammates to play with them. The following use cases were devised.

- As a gamer who's looking for teammates to play with, I would like to find teammates that are competent, are people I can get along with, rank-up with, and might become friends with.
- As a gamer who's looking to earn money by playing the game, I would like to find teammates that are willing to pay for either: people that they interact well with, or people that carry (help someone rank up) them though their games.

A wireframe can be found in the 'wireframesAndIdeation' folder. It contains rather different headings than the one in the current implimentation, due to us discovering the redundancy of some of the tabs shown there.

## Features

Some things might work, many things just straight-up do not. May the gods of coding save our souls.

### Existing Features

- View Pals: allow users to see browse through a list of Pals that are currently available.
- Account system: partially working. Frontend appears to somewhat work.
- Review system: customers can rate the website, and also their Pal.
- Contact the company: partially working. Frontend works, but unsure how to impliment backend.

### Planned Features

- View Pals: draw from the DB rather than hardcoding it into the website.
  - Book a Pal session: use a user's name to book a Pal according to their listed rate.
    - Payment system: impliment some form of (simulated, not real) page where users can pay.
- Login: allow users to log in and out of PlayPal. Will involve changes to the DB, somewhere.
  - Prevent additional active sessions: only allow one login of the user to PlayPal. If the user is already logged in elsewhere, prevent the user from logging in again from another location. This might be a bad idea for the user's convenience, though.
  - Local storage for login session: store the username in localStorage, allowing for users to quickly resume a session without logging in again.
- Review system: draw from the DB rather than hardcoding it into the website.
  - User reviews: allow users to submit reviews on each Pal, and also allow users to submit longer reviews rather than just rating PlayPal from 1-5 stars.
    - Restrict user reviews: only allow users to review Pals that they have already had a session with.

## Technology

For this project, fairly few external technologies were used.

- [jQuery](https://jquery.com/)
  - This was used to simplify DOM navigation and AJAX calls to the RestDB API (mentioned below).
- [RestDB](https://restdb.io/)
  - This was used to provide a NoSQL DB for use to store information PlayPal relies on, like user and transaction data. It's accessed externally though a RESTful API.

## Testing

As far as we know, no testing has been conducted on this website... yet. Check back later, maybe?

## Credits

Pal profiles are taken from real ones at epal.gg; details are randomised, however.

Review profiles are also taken from epal.gg; details, however, are also randomised.

Video was adapted from the Valorant Cinematic Pack by Dark Zone on YouTube.

About Us photo was taken from G4mingAnimations on DeviantArt.
