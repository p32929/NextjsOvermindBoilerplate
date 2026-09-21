# NextjsOvermindBoilerplate

A simple Next.js starter with Overmind and Material-UI, in plain JavaScript — the small utils I reach for on every project, already in place.

## What's included

- **Next.js** with Material-UI and a shared theme file
- **Overmind** state, provided in `_app`
- **next-seo** for per-page meta tags
- **A fetch helper** (`NodeFetchHelper`) so API calls aren't boilerplate either
- **SSR-safe `_document`** that injects MUI's server-side styles

## Project layout

```
pages/_app.js            Overmind provider + MUI theme
pages/_document.js       MUI server-side style injection
pages/index.js           your first page
src/Utils/OvermindHelper.js   state + actions
src/Utils/Theme.js            MUI theme
src/Utils/NodeFetchHelper.js  fetch wrapper
```

## Getting started

```bash
git clone https://github.com/p32929/NextjsOvermindBoilerplate.git
cd NextjsOvermindBoilerplate
npm install
npm run dev        # http://localhost:3000

npm run build
npm start
```

Want TypeScript? Use [nextjs-typescript-materialui-overmind-boilerplate](https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate) instead.

## Related boilerplates

- [nextjs-typescript-materialui-overmind-boilerplate](https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate) — the TypeScript version of this
- [MyReactBoilerplate](https://github.com/p32929/MyReactBoilerplate) — the same stack without Next.js

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/NextjsOvermindBoilerplate/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/NextjsOvermindBoilerplate/)
