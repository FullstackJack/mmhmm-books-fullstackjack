# Bookshelf

This application is a sample React app built with Next.js.

[Demo](https://mmhmm-books-fullstackjack.vercel.app/)

![screenshot](https://github.com/fullstackjack/mmhmm-books-fullstackjack/blob/main/docs/screenshot.png?raw=true)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About this project

### Frontend Framework

The project was bootstrapped with Next.js which provides structure to frontend React applications. For simplicity sake, the application files laid out under the `src` directory are broken down into the following groupings.

- An `app` directory (the Next.js file-based app routing)
- a UI `components` directory
- a static `constants` directory
- a `data` handling directory
- a reusable `hooks` directory
- and a generic top-level `types.ts` file.

The project files were pre-emptively organized into sub-folders for future development. For example, respective [moduleName].test.ts files might live next to each module implementation file or Storybook [moduleName].stories.ts files might live next to each UI component.

_Special note: For larger productionized apps, I advise breaking the application down into `app`, `common`, and `features` directories within `src` to better co-locate feature `data` and `ui` files into modular work areas that can easily be discovered, moved, renamed, and pruned when no longer needed. If multiple microservice applications are needed, a monorepo architecture such as `nx` would be a suitable foundation. For this simple app, I have exluded these workflows for brevity._

### Data Fetching

[SWR](https://swr.vercel.app/), which stands for `stale-while-revalidate`, was used for remote data fetching for a variety of reasons. Mainly, SWR alleviates applications from storing fetched data in a custom cache which used to be handled with libraries such as Redux. With SWR's deduplication strategy, many lower level components can all request data from the same fetcher function without a hit to performance. Only one request will be made and all of the requesting components will be updated when new data becomes available. Instead of writing hundreds of lines of selectors, actions and dispatchers, we can now bring our API calls as close as we want to the actual render logic.

By default, "stale while revalidate" means that a user will see stale data for a cache key (if we have it) while the application is fetching fresh data. This makes the application feel snappier and even comes with built-in "polling on inverval" and "revalidation on page focus and network recovery" to keep data fresh without a full page reload.

There are many more features of SWR worth exploring and I highly recommend it for modern React apps. [Give it a shot!](https://swr.vercel.app/docs/getting-started)

_Special note: Since the provided API is "protected" by a token, ordinarily we would proxy our requests to the "platform" endpoints through our own web server keeping those credentials stored safely in environment variables or fetched from a cloud managed secrets store during app boot or build, however, due to project time constraints, I skipped this step for brevity of this sample application. In production, always keep your credentials safely behind your public endpoints._

### Forms

[React Hook Form](https://react-hook-form.com/) is a modern React form logic library which is robust and battle-tested. It was used to add additional error handling and validation functionality around the application's "add book" form. Forms are tricky and can quickly become error prone and bloated with conditionals, using a "form framework" is recommended to avoid such pitfalls.

### Tailwind + Custom Functional Components

I decided to use TailwindCSS not because I am a fanboy of it, but because it has quickly become the CSS-library-du-jour and I am curious enough to see if it helps my styling needs. I have to admit, the rendered HTML output looks atrocious and was my initial hesitation, but integrating it into reusable components is dead-simple and simplifies not just the co-location of styles with JSX, but also the speed at which those co-located styles are able to load at runtime (vs. CSS-in-JS solutions which get programmatically added to the page with JS).

Furthermore, I could have used a component library like MUI, Mantine, or NextUI (and I have had success with these libaries on other projects), but I felt that keeping things simple and direct was more beneficial for this project. Building components from scratch is sometimes a lot more efficient than tweaking and shimming styles into an already bloated style component library.

\*_Special Acknowledgement: Yes, it is not pixel perfect to the Figma as I prioritized form handling and data fetching functionality over styling after having created and approximated all the functional components. Unfortunately, there is a learning curve to memorizing all of the appropriate shorthand Tailwind classes._

## Roadmap

- [x] Scaffold screens
- [x] Build basic UI components
- [x] API Integration using [SWR](https://swr.vercel.app/)
- [x] View list of books (/)
- [x] Create a book (/create)
- [x] Delete a book
- [ ] Add unit tests with Jest
- [ ] CI/CD pipeline
- [ ] Custom Font (SF)
- [ ] Migrate API calls to proxied [route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [ ] Migrate dummy creds to .env and update key
- [ ] Add end-to-end tests with Cypress/Playwright
- [ ] Search books (simple client-side version)
- [ ] Edit book screen
- [ ] Custom backend using KV store
- [ ] Image upload to Cloud Store
- [ ] Resize with Cloudinary or similar
- [ ] ePub Reader support?
