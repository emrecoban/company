# Company

This project is an **open-source** MIT-licensed full-stack [Next.js](https://github.com/vercel/next.js) application that uses MongoDB and Next-Auth.

Try it: [company.emre.run](https://company.emre.run)

## Why I built

I developed this project by following [LamaDev](https://github.com/safak)'s video to learn the Next.js with MongoDB and NextAuth.js approach. Therefore, <ins>the UI design is not my own, and it's not significant</ins>. The purpose of this project is to fetch data from a local file, retrieve data from a remote database, perform user operations with third-party applications and email, and implement SEO optimizations.

## Features

- User Authentication: Users can register, and login with their email, or GitHub account.
- Post article: Users can post, and delete articles.

## Screenshots

![ss1](/github_assets/ss1.png)
![ss2-dark](/github_assets/ss2.png)
![ss3](/github_assets/ss3.png)
![ss4](/github_assets/ss4.png)

## Directory Structure

```bash
├── public
└── src
    ├── app
    │   ├── about
    │   ├── api
    │   │   ├── auth
    │   │   │   ├── [...nextauth]
    │   │   │   └── register
    │   │   └── posts
    │   │       └── [id]
    │   ├── blog
    │   │   └── [id]
    │   ├── contact
    │   ├── dashboard
    │   │   └── (auth)
    │   │       ├── login
    │   │       └── register
    │   ├── portfolio
    │   │   └── [category]
    │   └── visual
    ├── components
    │   ├── AuthProvider
    │   ├── button
    │   ├── DarkModeToggle
    │   ├── footer
    │   └── navbar
    ├── context
    ├── models
    └── utils
```

![visualizer](/github_assets/visualizer.png)

## Built with

- JavaScript
- Tailwind CSS (Actually not)
- React
- Next.js
- Mongoose (MongoDB)
- NextAuth.js
- SWR

## Installation

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/emrecoban/company.git
```

2. Navigate to the project directory:

```bash
  cd company
```

3. Install the dependencies using `npm`:

```bash
  npm install
```

4. Don't forget to configure `.env` file. Get your [GitHub API Token](https://github.com/settings/developers) and [Create Mongo database](https://cloud.mongodb.com/):

```bash
MONGO="{YOUR MONGO URL}"
GITHUB_ID="{YOUR GITHUB ID}"
GITHUB_SECRET="{YOUR GITHUB SECRET}"
NEXTAUTH_SECRET="{YOUR SECRET}"
NEXTAUTH_URL="{YOUR URL}"
```

5. Start the development server:

```bash
  npm run dev
```

6. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

That's it! You should now have the project running locally on your machine. If you encounter any issues, be sure to check the project's documentation and issue tracker on GitHub.

## Contributing

Bug reports, feature requests, and pull requests are welcome. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Support

- Sponsor to me on GitHub.
- Give a star to this repo.
- Follow me on Twitter [@emreshepherd](https://twitter.com/emreshepherd), or GitHub [@emrecoban](https://github.com/emrecoban).
- Buy me a coffee, or book: https://www.buymeacoffee.com/emrecoban

## References

- [Next.js Full Tutorial for Beginners](https://www.youtube.com/watch?v=VE8BkImUciY)
- [mongoose Getting Started](https://mongoosejs.com/docs/index.html)
- [SWR Getting Started](https://swr.vercel.app/docs/getting-started)
- [Auth.js Getting Started](https://authjs.dev/getting-started/introduction)

## Changelog

- **[v1.0](https://github.com/emrecoban/company/releases/tag/v1.0):** The first version was born!

## License

This project is available as open source under the terms of the [MIT License](https://github.com/emrecoban/company/blob/main/LICENSE).
