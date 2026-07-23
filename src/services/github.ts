import type { GitHubUser, GitHubRepo, GitHubEvent, GitHubLanguageStats } from '../types/github'

const BASE_URL = 'https://api.github.com'
const PER_PAGE = 30

const headers: Record<string, string> = {
  Accept: 'application/vnd.github.v3+json',
}

const token = import.meta.env.VITE_GITHUB_TOKEN
if (token) {
  headers.Authorization = `Bearer ${token}`
}

async function fetchGithub<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers })
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function getUser(username: string): Promise<GitHubUser> {
  return fetchGithub<GitHubUser>(`${BASE_URL}/users/${username}`)
}

export async function getRepos(username: string, page = 1): Promise<GitHubRepo[]> {
  return fetchGithub<GitHubRepo[]>(
    `${BASE_URL}/users/${username}/repos?sort=updated&per_page=${PER_PAGE}&page=${page}`,
  )
}

export async function getPinnedRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const repos = await getRepos(username, 1)
    return repos
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
  } catch {
    return []
  }
}

export async function getRepoLanguages(owner: string, repo: string): Promise<GitHubLanguageStats> {
  return fetchGithub<GitHubLanguageStats>(
    `${BASE_URL}/repos/${owner}/${repo}/languages`,
  )
}

export async function getAggregatedLanguages(username: string): Promise<GitHubLanguageStats> {
  const repos = await getRepos(username)
  const languagePromises = repos
    .filter((r) => !r.fork && r.language)
    .map((r) => getRepoLanguages(username, r.name).catch(() => ({})))

  const allLanguages = await Promise.all(languagePromises)
  const aggregated: GitHubLanguageStats = {}

  for (const lang of allLanguages) {
    for (const [key, value] of Object.entries(lang)) {
      aggregated[key] = (aggregated[key] || 0) + value
    }
  }

  return aggregated
}

export async function getUserEvents(username: string): Promise<GitHubEvent[]> {
  return fetchGithub<GitHubEvent[]>(
    `${BASE_URL}/users/${username}/events?per_page=10`,
  )
}

export async function getRepoReadme(
  owner: string,
  repo: string,
): Promise<string | null> {
  try {
    const data = await fetchGithub<{ content: string; encoding: string }>(
      `${BASE_URL}/repos/${owner}/${repo}/readme`,
    )
    if (data.encoding === 'base64') {
      return atob(data.content)
    }
    return data.content
  } catch {
    return null
  }
}

export function getContributionGraphUrl(username: string): string {
  return `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`
}

export function getStatsCardUrl(username: string): string {
  return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&count_private=true`
}

export function getTopLanguagesUrl(username: string): string {
  return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true`
}

export function getSnakeUrl(username: string): string {
  return `https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg`
}

export async function getUserOrganizations(username: string) {
  return fetchGithub<Array<{ login: string; avatar_url: string }>>(
    `${BASE_URL}/users/${username}/orgs`,
  )
}
