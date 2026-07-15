interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  createdAt: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    content:
      "React is a JavaScript library for building user interfaces. In this post, we'll cover the basics of components, JSX, and state management to help you get started with your first React app.",
    excerpt:
      "A beginner-friendly introduction to React components, JSX, and state.",
    createdAt: "2026-06-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Understanding Next.js App Router",
    slug: "understanding-nextjs-app-router",
    content:
      "Next.js 13 introduced the App Router, a new paradigm for building React applications. Unlike the Pages Router, the App Router uses file-system based routing with support for layouts, server components, and streaming.",
    excerpt:
      "Learn how the App Router works and how it differs from the Pages Router.",
    createdAt: "2026-06-05T14:30:00Z",
  },
  {
    id: "3",
    title: "Mastering React Hooks",
    slug: "mastering-react-hooks",
    content:
      "Hooks are functions that let you use state and other React features without writing a class. This post dives into advanced hooks like useRef, useMemo, and useCallback, with practical examples.",
    excerpt:
      "A deep dive into useRef, useMemo, and useCallback with real-world examples.",
    createdAt: "2026-06-10T09:15:00Z",
  },
  {
    id: "4",
    title: "TypeScript for React Developers",
    slug: "typescript-for-react-developers",
    content:
      "TypeScript adds static typing to JavaScript, catching errors at compile time. This guide covers how to type props, state, and event handlers in React components.",
    excerpt:
      "Learn how to add TypeScript to your React components for better type safety.",
    createdAt: "2026-06-15T16:45:00Z",
  },
  {
    id: "5",
    title: "Building a Blog with Next.js and MongoDB",
    slug: "building-blog-nextjs-mongodb",
    content:
      "In this tutorial, we'll build a full-stack blog using Next.js for the frontend, MongoDB for the database, and Mongoose for data modeling. You'll learn about API routes, server components, and CRUD operations.",
    excerpt:
      "A full-stack tutorial covering Next.js, MongoDB, Mongoose, and CRUD operations.",
    createdAt: "2026-06-20T11:00:00Z",
  },
];

export default posts;
