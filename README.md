This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Favicons

```
real-favicon generate faviconDescription.json faviconData.json public/favicons
```

### Update favicons
```
real-favicon check-for-update --fail-on-update faviconData.json
```


## To do:

- optimizations
  - minify normalize.css
  - minify html
  - load styles above fold
  - Optimize images
  - postCSS
- Documentation
  - Feedback/content
  - Storybook?
  - RSS
