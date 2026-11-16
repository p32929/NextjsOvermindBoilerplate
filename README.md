# NextjsOvermindBoilerplate

A Next.js starter in plain JavaScript with [Overmind](https://overmindjs.org) for state and Material-UI for the look. Instead of setting up the same theme, state, SEO tags and fetch helper on every new project, you start with them already wired together.

> Built in 2020 with Next.js 10 and Material-UI 4. It is kept as a starting point and is not updated to the latest versions.

## What's included

1. **Next.js** with Material-UI and a shared theme file
2. **Overmind** state, provided in `_app`
3. **next-seo** for per-page meta tags
4. **A fetch helper** (`NodeFetchHelper`) so API calls aren't boilerplate either
5. **SSR-safe `_document`** that injects MUI's server-side styles

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

1. [nextjs-typescript-materialui-overmind-boilerplate](https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate): the TypeScript version of this
2. [MyReactBoilerplate](https://github.com/p32929/MyReactBoilerplate): the same stack without Next.js

## License

MIT License. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make this boilerplate better.

## Share

<a href="https://p32929.github.io/share/?repo=NextjsOvermindBoilerplate"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
