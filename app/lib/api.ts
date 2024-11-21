interface GithubStats {
  repositories: number
  stars: number
  contributions: number
  topLanguages: { language: string; percentage: number }[]
}

interface LinkedInProfile {
  recommendations: string[]
  endorsements: { skill: string; count: number }[]
  connections: number
} 