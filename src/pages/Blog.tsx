import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'devops-with-terraform-and-aws',
    title: 'DevOps with Terraform & AWS: IaC Best Practices',
    description: 'A comprehensive guide to Infrastructure as Code using Terraform on AWS — from project structure to remote state management.',
    date: '2024-07-15',
    tags: ['DevOps', 'Terraform', 'AWS', 'IaC'],
    readingTime: 10,
    content: `Infrastructure as Code (IaC) transforms how we manage cloud resources. Here's how to build a production-ready Terraform workflow on AWS.

## Project Structure

Organize Terraform code into modular, reusable components. Each module encapsulates a logical resource group like networking, compute, or storage.

## Remote State Management

Store state files in S3 with DynamoDB locking to enable team collaboration and prevent state corruption.

## Best Practices

Use variables for configuration, outputs for exposing resource attributes, and workspaces for managing multiple environments like dev, staging, and production. Always pin provider versions and use terraform plan in CI/CD pipelines.`,
  },
  {
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications',
    description: 'Best practices for structuring large-scale React applications with TypeScript.',
    date: '2024-03-15',
    tags: ['React', 'TypeScript', 'Architecture'],
    readingTime: 8,
    content: `When building React applications that need to scale, architecture decisions matter more than ever. In this post, we'll explore proven patterns and practices that help maintain code quality as your application grows.

## Component Architecture

Start with a clear component hierarchy. Separate concerns between container and presentational components, and use custom hooks to encapsulate business logic.

## State Management

Choose the right tool for the job. Sometimes React's built-in useState and useReducer are enough. For complex state, consider Zustand or Jotai over Redux for simpler APIs.

## TypeScript Integration

Leverage TypeScript to catch errors early. Use generics for reusable components and strict typing for your state management.`,
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS Tips & Tricks',
    description: 'Advanced Tailwind CSS patterns to improve your workflow and build better UIs.',
    date: '2024-02-20',
    tags: ['CSS', 'Tailwind', 'Design'],
    readingTime: 6,
    content: `Tailwind CSS has revolutionized how we write styles for the web. Here are some advanced tips to level up your Tailwind game.

## Custom Configurations

Extend the default theme in tailwind.config.js to match your design system. Create consistent spacing, colors, and typography scales.

## Component Patterns

Use the @apply directive sparingly. Instead, create reusable component classes or use a design system approach with your framework of choice.

## Responsive Design

Master Tailwind's responsive prefixes. Start with mobile-first designs and progressively enhance for larger screens using sm:, md:, lg: breakpoints.`,
  },
  {
    slug: 'github-actions-ci-cd',
    title: 'GitHub Actions for CI/CD',
    description: 'Setting up automated deployment pipelines with GitHub Actions.',
    date: '2024-01-10',
    tags: ['DevOps', 'GitHub', 'CI/CD'],
    readingTime: 10,
    content: `GitHub Actions provides powerful CI/CD capabilities right inside your repository. Here's how to set up a robust pipeline.

## Workflow Structure

Define your workflows in .github/workflows/. Each workflow can have multiple jobs that run sequentially or in parallel.

## Key Components

Understand actions, runners, and events. Use matrix builds to test across multiple versions, and cache dependencies to speed up builds.

## Best Practices

Use secrets for sensitive data, pin action versions, and always test your workflows locally with act before pushing.`,
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns',
    description: 'Deep dive into advanced TypeScript patterns for better type safety.',
    date: '2023-12-05',
    tags: ['TypeScript', 'JavaScript', 'Patterns'],
    readingTime: 12,
    content: `TypeScript offers powerful type system features that go far beyond basic annotations. Let's explore some advanced patterns.

## Conditional Types

Use conditional types to create type relationships that depend on other types. They're perfect for creating flexible API types.

## Template Literal Types

Combine string literal types with template literals to create precise type definitions for string-based APIs and event systems.

## Mapped Types

Transform existing types into new ones using mapped types. They're essential for creating utility types like Partial<T> and Readonly<T>.`,
  },
]

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Thoughts, tutorials, and insights on web development.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="card-glow block group"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
