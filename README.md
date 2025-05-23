# Twitter Follow Card Component

A responsive Twitter-like follow card component built with React and TypeScript. This project demonstrates component composition, props, state management, and styling in React.

## Features

- Reusable Twitter follow card component
- Follow/Unfollow functionality
- Responsive design
- Type-safe with TypeScript
- Avatar loading from unavatar.io

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS Modules
- Unavatar.io for profile pictures

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/twitter-follow-card.git
   cd twitter-follow-card
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

Import and use the `TwitterFollowCard` component in your React application:

```tsx
import { TwitterFollowCard } from './components';

function App() {
  const formatUserName = (userName: string) => `@${userName}`;
  
  return (
    <div className="App">
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Midudev" 
        isFollowing={false} 
      />
    </div>
  );
}
```

## Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `formatUserName` | `(userName: string) => string` | Yes | Function to format the username with @ prefix |
| `userName` | `string` | Yes | The username to display and use for avatar |
| `name` | `string` | Yes | The display name to show |
| `isFollowing` | `boolean` | No | Initial follow state (default: false) |

## Styling

Styles are written in CSS and scoped to the component using CSS Modules. The main styles are located in the component's directory.
```
