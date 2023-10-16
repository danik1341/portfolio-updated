import {Project} from '../type/project'
import client from '../../lib/sanity-client'
import {groq} from 'next-sanity'
import {Skill} from '../type/skill'
import {Experience} from '../type/experience'

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            title,
            description,
            tags,
            "images": images[]{
                "url": asset->url,
            },
            "slug": slug.current,
            githubLink,
            demoLink
        }`,
  )
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            title,
            description,
            tags,
            "images": images[]{
                "url": asset->url,
            },
            "slug": slug.current,
            githubLink,
            demoLink
        }`,
    {slug},
  )
}

export async function getSkills(): Promise<Skill[] | null> {
  return client.fetch(
    groq`*[_type == "skills"][0].skills[]->{
            title
          }
          `,
  )
}

export async function getExperience(): Promise<Experience[]> {
  return client.fetch(
    groq`*[_type == "experience"]{
            _id,
            title,
            location,
            description,
            date,
            icon
        }`,
  )
}
