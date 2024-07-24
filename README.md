# An Interface of Ice and Fire

## Overview
An Interface of Ice and Fire is an application built to help fans of the epic series A Song of Ice and Fire track which characters from the series are alive or dead. The application utilizes the API provided by [An API of Ice and Fire](https://anapioficeandfire.com/) to fetch and display information about various houses and their sworn members.

## Features
- Fetches data from [An API of Ice and Fire](https://anapioficeandfire.com/).
- Displays a list of houses with their sworn members.
- For each sworn member, displays their full name and whether they are alive or dead.
- If a character is dead, displays the information provided by the API about their death.
- If a house has no sworn members, displays the message "This house has no sworn members".

## Tech Stack
- **React**: For building the user interface.
- **Next.js**: For static site generation.
- **TypeScript**: For type safety.
- **Jest**: For testing.

## Project Structure
```plaintext
.next/
.swc/
node_modules/
public/
src/
├── __tests__/
├── app/
│   └── house/
│       ├── layout.tsx
│       ├── not-found.tsx
│       └── page.tsx
├── components/
│   ├── HouseList.tsx
│   ├── SwornMemberItem.tsx
│   └── SwornMemberList.tsx
├── domain/entities/
│   ├── houses.ts
│   └── swornMember.ts
├── hooks/
├── serverActions/
│   ├── fetchHouses.ts
│   ├── getHouse.ts
│   └── getSwornMembers.ts
├── services/
│   └── houses.service.ts
├── styles/
├── utils/
├── .env.local
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── jest.setup.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation
1. Clone the repository:
   ```sh
   git iceAndFire
   ```
2. Navigate to the project directory:
   ```sh
   cd iceAndFire
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application
To run the application in development mode:
```sh
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables
Create a ```.env.local``` file in the root of the application and create a variable as follows: 

```sh
BASE_URL=<URL_anapioficeandfire>
```

### Building the Application
To build the production application:
```sh
npm run build
```
The built files will be in the `.next` directory.

### Running Tests
To run the tests:
```sh
npm test
```

## Usage
Upon launching the application, you will see a list of houses. Clicking on a house will display its sworn members along with their statuses (alive or dead). If a character is dead, additional information about their death will be displayed. If a house has no sworn members, a message will be displayed indicating that.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- [An API of Ice and Fire](https://anapioficeandfire.com/) for providing the data source.
- Inspired by the epic series A Song of Ice and Fire.
