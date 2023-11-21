import { z } from 'zod';

const projectSchema = z.object({
	repo: z.string(),
	link: z.string(),
	description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
	return [
		{
			repo: 'Instagram-Clone',
			link: 'https://github.com/ani-0/instagram-clone',
			description: 'A fullstack Instagram clone made with Next.js, Tailwind CSS, and the t3 stack',
		},
		{
			repo: 'anikethchenjeri.com',
			link: 'https://github.com/ani-0/me',
			description: 'Boring personal site built with Astro',
		},
		{
			repo: 'CCHS Open Curriculum',
			link: 'https://github.com/ani-0/cchs-open-curriculum',
			description: 'Open Curriculum for Cherry Creek High School',
		},
		{
			repo: 'CCHS CLUBS',
			link: 'https://cchs-clubs.vercel.app/',
			description: 'An all in one website for Cherry Creek High School Clubs',
		},
		{
			repo: 'Twitter Clone',
			link: 'https://github.com/ani-0/twitter',
			description: 'A all in one twitter clone made with Next.js, Tailwind CSS and ShadcnUI',
		},
		{
			repo: 'dots',
			link: 'https://github.com/ani-0/dots',
			description: 'My dotfiles',
		},
	];
}
