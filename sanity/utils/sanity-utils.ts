import {groq} from 'next-sanity'

import client from '../../lib/sanity-client'
import {Experience} from '../type/experience'
import {Project} from '../type/project'
import {Skill} from '../type/skill'

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"][0].projectsArray[]{
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
// export async function getProjects(): Promise<Project[]> {
//   return client.fetch(
//     groq`*[_type == "project"]{
//             _id,
//             title,
//             description,
//             tags,
//             "images": images[]{
//                 "url": asset->url,
//             },
//             "slug": slug.current,
//             githubLink,
//             demoLink
//         }`,
//   )
// }

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project"][0].projectsArray[slug.current == $slug][0]{
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

// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//             _id,
//             title,
//             description,
//             tags,
//             "images": images[]{
//                 "url": asset->url,
//             },
//             "slug": slug.current,
//             githubLink,
//             demoLink
//         }`,
//     {slug},
//   )
// }

export async function getSkills(): Promise<Skill[] | null> {
  return client.fetch(
    groq`*[_type == "skills"][0].skills[]->{
            title
          }`,
  )
}

export async function getExperience(): Promise<Experience[]> {
  return client.fetch(
    groq`*[_type == "experience"][0].expArrayField[]{
      title,
      location,
      description,
      date,
      icon
    }`,
  )
}
