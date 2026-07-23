import { motion } from 'framer-motion'
import { useGitHubUser, useGitHubPinnedRepos, useGitHubLanguages, useGitHubOrgs } from '../../hooks/useGithub'
import { siteConfig } from '../../config/site'
import { getStatsCardUrl, getTopLanguagesUrl, getSnakeUrl } from '../../services/github'
import { CardSkeleton, StatSkeleton } from '../ui/LoadingSkeleton'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function GitHubDashboard() {
  const username = siteConfig.github.username
  const { data: user, loading: userLoading, error: userError } = useGitHubUser(username)
  const { data: repos, loading: reposLoading } = useGitHubPinnedRepos(username)
  const { data: languages, loading: langsLoading } = useGitHubLanguages(username)
  const { data: orgs } = useGitHubOrgs(username)

  if (userError) {
    return (
      <section id="github" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-400">Failed to load GitHub data. Please check your username and token.</p>
        </div>
      </section>
    )
  }

  const totalStars = repos?.reduce((acc, r) => acc + r.stargazers_count, 0) ?? 0
  const totalForks = repos?.reduce((acc, r) => acc + r.forks_count, 0) ?? 0

  return (
    <section id="github" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            GitHub <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="section-subtitle">My GitHub activity and stats</p>
        </motion.div>

        {userLoading ? (
          <StatSkeleton />
        ) : user ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="card-glow text-center p-4">
              <div className="text-2xl font-bold gradient-text">
                <AnimatedCounter end={user.public_repos} />
              </div>
              <div className="text-xs text-gray-500">Repositories</div>
            </div>
            <div className="card-glow text-center p-4">
              <div className="text-2xl font-bold gradient-text">
                <AnimatedCounter end={totalStars} />
              </div>
              <div className="text-xs text-gray-500">Stars</div>
            </div>
            <div className="card-glow text-center p-4">
              <div className="text-2xl font-bold gradient-text">
                <AnimatedCounter end={totalForks} />
              </div>
              <div className="text-xs text-gray-500">Forks</div>
            </div>
            <div className="card-glow text-center p-4">
              <div className="text-2xl font-bold gradient-text">
                <AnimatedCounter end={user.followers} />
              </div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
          </motion.div>
        ) : null}

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="card-glow p-4">
            <h3 className="text-sm font-semibold mb-3">GitHub Stats</h3>
            <img
              src={getStatsCardUrl(username)}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
          <div className="card-glow p-4">
            <h3 className="text-sm font-semibold mb-3">Top Languages</h3>
            <img
              src={getTopLanguagesUrl(username)}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        </div>

        {langsLoading ? null : languages && Object.keys(languages).length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="card-glow mb-8 p-6"
          >
            <h3 className="text-sm font-semibold mb-4">Language Breakdown</h3>
            <div className="space-y-2">
              {Object.entries(languages)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 8)
                .map(([lang, bytes]) => {
                  const total = Object.values(languages).reduce((a, b) => a + b, 0)
                  const percent = ((bytes / total) * 100).toFixed(1)
                  return (
                    <div key={lang} className="flex items-center gap-3">
                      <span className="text-sm w-28 text-gray-700 dark:text-gray-300 truncate">
                        {lang}
                      </span>
                      <div className="flex-1 h-2 bg-gray-200 dark:bg-[#30363d] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-12 text-right">
                        {percent}%
                      </span>
                    </div>
                  )
                })}
            </div>
          </motion.div>
        ) : null}

        <div className="card-glow mb-8 p-4">
          <h3 className="text-sm font-semibold mb-3">Contribution Graph</h3>
          <img
            src={getSnakeUrl(username)}
            alt="GitHub Snake"
            className="w-full"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>

        {reposLoading ? (
          <CardSkeleton count={3} />
        ) : repos && repos.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Pinned Repositories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.slice(0, 6).map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="card-glow block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <h4 className="text-sm font-semibold truncate">{repo.name}</h4>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                    {repo.description || 'No description'}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}

        {orgs && orgs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold mb-4">Organizations</h3>
            <div className="flex gap-3">
              {orgs.map((org) => (
                <img
                  key={org.login}
                  src={org.avatar_url}
                  alt={org.login}
                  className="w-10 h-10 rounded-lg"
                  title={org.login}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
