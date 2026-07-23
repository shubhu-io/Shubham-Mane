export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  bio: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
  homepage: string | null
  size: number
  stargazers_count: number
  watchers_count: number
  language: string | null
  forks_count: number
  open_issues_count: number
  topics: string[]
  visibility: string
  default_branch: string
  owner: {
    login: string
    avatar_url: string
  }
}

export interface GitHubEvent {
  id: string
  type: string
  created_at: string
  repo: {
    name: string
    url: string
  }
  payload: {
    action?: string
    ref?: string
    ref_type?: string
    commits?: Array<{
      message: string
      url: string
    }>
    pull_request?: {
      html_url: string
      title: string
    }
    issue?: {
      html_url: string
      title: string
    }
  }
}

export interface GitHubLanguageStats {
  [language: string]: number
}

export interface GitHubContributions {
  totalContributions: number
  weeks: Array<{
    contributionDays: Array<{
      contributionCount: number
      date: string
    }>
  }>
}

export interface GitHubRepoContent {
  name: string
  path: string
  content: string
  encoding: string
}
