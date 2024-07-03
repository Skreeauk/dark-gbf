import { getPage, getPages } from "@/app/source"
import { DocsPage, DocsBody } from "fumadocs-ui/page"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
	return getPages().map((page) => ({
		slug: page.slugs,
	}))
}

export function generateMetadata({ params }) {
	const page = getPage(params.slugs)

	if (page == null) notFound()

	return {
		title: page.data.title,
		description: page.data.description,
	}
}

export default async function Page({ params }) {
	const page = getPage(params.slugs)

	if (page == null) {
		notFound()
	}

	const MDX = page.data.exports.default

	return (
		<DocsPage toc={page.data.exports.toc} full={page.data.full}>
			<DocsBody>
				<div className="flex flex-col gap-3 mb-8">
					<h1 className="p-0 m-0 text-4xl font-bold tracking-tight scroll-m-20">
						{page.data.title}
					</h1>
					<span className="opacity-70">{page.data.description}</span>
				</div>
				<MDX />
			</DocsBody>
		</DocsPage>
	)
}
