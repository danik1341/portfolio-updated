export type Project = {
  _id: string
  title: string
  description: string
  tags: string[]
  images: {
    url: string
  }[]
  slug: string
  githubLink: string
  demoLink: string
}
