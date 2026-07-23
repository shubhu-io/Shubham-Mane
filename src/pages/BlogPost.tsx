import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const posts: Record<string, { title: string; date: string; tags: string[]; readingTime: number; content: string }> = {
  'devops-with-terraform-and-aws': {
    title: 'DevOps with Terraform & AWS: IaC Best Practices',
    date: '2024-07-15',
    tags: ['DevOps', 'Terraform', 'AWS', 'IaC'],
    readingTime: 10,
    content: `Infrastructure as Code (IaC) transforms how we manage cloud resources. Here's how to build a production-ready Terraform workflow on AWS.

## Project Structure

Organize Terraform code into modular, reusable components. Each module encapsulates a logical resource group like networking, compute, or storage.

\`\`\`
modules/
├── networking/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── compute/
├── storage/
└── database/
\`\`\`

## Remote State Management

Store state files in S3 with DynamoDB locking to enable team collaboration and prevent state corruption.

\`\`\`hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
\`\`\`

## Best Practices

Use variables for configuration, outputs for exposing resource attributes, and workspaces for managing multiple environments like dev, staging, and production. Always pin provider versions and use terraform plan in CI/CD pipelines.`,
  },
  'building-scalable-react-apps': {
    title: 'Building Scalable React Applications',
    date: '2024-03-15',
    tags: ['React', 'TypeScript', 'Architecture'],
    readingTime: 8,
    content: `When building React applications that need to scale, architecture decisions matter more than ever. In this post, we'll explore proven patterns and practices that help maintain code quality as your application grows.

## Component Architecture

Start with a clear component hierarchy. Separate concerns between container and presentational components, and use custom hooks to encapsulate business logic.

\`\`\`tsx
// Custom hook for data fetching
function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser(userId).then((data) => {
      setUser(data)
      setLoading(false)
    })
  }, [userId])

  return { user, loading }
}
\`\`\`

## State Management

Choose the right tool for the job. Sometimes React's built-in useState and useReducer are enough.

## TypeScript Integration

Leverage TypeScript to catch errors early. Use generics for reusable components and strict typing for your state management.

## Performance Optimization

Implement code splitting with React.lazy and Suspense. Use React.memo for expensive components and virtualization for long lists.`,
  },
  'tailwind-css-tips': {
    title: 'Tailwind CSS Tips & Tricks',
    date: '2024-02-20',
    tags: ['CSS', 'Tailwind', 'Design'],
    readingTime: 6,
    content: `Tailwind CSS has revolutionized how we write styles for the web. Here are some advanced tips to level up your Tailwind game.

## Custom Configurations

Extend the default theme in tailwind.config.js to match your design system. Create consistent spacing, colors, and typography scales.

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#3b82f6',
        },
      },
    },
  },
}
\`\`\`

## Component Patterns

Use the @apply directive sparingly. Instead, create reusable component classes.

## Responsive Design

Master Tailwind's responsive prefixes. Start with mobile-first designs and progressively enhance for larger screens.`,
  },
  'github-actions-ci-cd': {
    title: 'GitHub Actions for CI/CD',
    date: '2024-01-10',
    tags: ['DevOps', 'GitHub', 'CI/CD'],
    readingTime: 10,
    content: `GitHub Actions provides powerful CI/CD capabilities right inside your repository.

## Workflow Structure

Define your workflows in .github/workflows/. Each workflow can have multiple jobs.

## Key Components

Understand actions, runners, and events. Use matrix builds and cache dependencies.

## Best Practices

Use secrets for sensitive data, pin action versions, and always test your workflows locally.`,
  },
  'typescript-advanced-patterns': {
    title: 'Advanced TypeScript Patterns',
    date: '2023-12-05',
    tags: ['TypeScript', 'JavaScript', 'Patterns'],
    readingTime: 12,
    content: `TypeScript offers powerful type system features.

## Conditional Types

Use conditional types to create type relationships.

\`\`\`ts
type IsString<T> = T extends string ? true : false
\`\`\`

## Template Literal Types

Create precise type definitions for string-based APIs.

## Mapped Types

Transform existing types into new ones using mapped types.`,
  },
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? posts[slug] : null

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <article className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-gray dark:prose-invert max-w-none"
        >
          {post.content.split('\n').map((line, idx) => {
            if (line.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-xl font-semibold mt-8 mb-3">
                  {line.replace('## ', '')}
                </h2>
              )
            }
            if (line.startsWith('```')) {
              return null
            }
            if (line.trim() === '') {
              return <br key={idx} />
            }
            if (line.startsWith('```') === false) {
              // Rough handling for inline code
              const withCode = line.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 dark:bg-[#21262d] rounded text-sm font-mono">$1</code>')
              if (withCode !== line) {
                return (
                  <p
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: withCode }}
                  />
                )
              }
              return (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {line}
                </p>
              )
            }
            return null
          })}
        </motion.div>
      </article>
    </motion.div>
  )
}
