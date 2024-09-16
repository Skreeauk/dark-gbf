import { notFound } from "next/navigation"

import { source } from "@/app/source"
import { DocsPage, DocsBody } from "fumadocs-ui/page"

import defaultMdxComponents from "fumadocs-ui/mdx"

import { Step, Steps } from "fumadocs-ui/components/steps"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { Accordion, Accordions } from "fumadocs-ui/components/accordion"

import { MDXTableList } from "@/components/mdx/MDXTableList"
import { MDXWeaponGrid } from "@/components/mdx/MDXWeaponGrid"
import { MDXCallout } from "@/components/mdx/MDXCallout"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import { SquareArrowOutUpRightIcon } from "lucide-react"

function getImageMeta(baseUrl, slugs = []) {
	return {
		alt: "Dark GBF",
		url: `/${[...baseUrl.split("/"), ...slugs, "og.png"]
			.filter((v) => v.length > 0)
			.join("/")}`,
		width: 1200,
		height: 630,
	}
}

export function generateStaticParams() {
	return source.generateParams("slugs")
}

// openGraph: {
// 	url: page.url,
// 	type: "article",
// 	publishedTime: "2024-07-06T00:00:00.000Z",
// 	modifiedTime: "2024-07-06T00:00:00.000Z",
// 	...openGraph,
// },

export function generateMetadata({ params }) {
	const page = source.getPage(params.slugs)

	if (page == null) notFound()

	const ogImage = getImageMeta("og", page.slugs)

	return {
		title: page.data.title,
		description: page.data.description,
		openGraph: {
			url: page.url,
			type: "article",
			publishedTime: "2024-07-06T00:00:00.000Z",
			modifiedTime: "2024-07-06T00:00:00.000Z",
			images: ogImage,
			siteName: "Dark GBF",
		},
		twitter: {
			card: "summary_large_image",
			images: ogImage,
			creator: "@Skreeauk",
		},
	}
}

export default async function Page({ params }) {
	const page = source.getPage(params.slugs)

	if (page == null) {
		notFound()
	}

	const MDX = page.data.body

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			tableOfContent={{ style: "clerk", single: false }}
		>
			<DocsBody className="prose-zinc dark:prose-invert md:min-w-full">
				<div className="flex flex-col gap-3 mb-8">
					<h1 className="p-0 m-0 text-4xl font-semibold">{page.data.title}</h1>
					<span className="opacity-70">{page.data.description}</span>
					<div className="flex gap-3">
						{page.data.wikiURL && (
							<Button
								asChild
								className="items-center justify-center h-auto px-3 py-1 w-fit"
							>
								<Link
									href={page.data.wikiURL}
									aria-label="gbf.wiki url"
									target="_blank"
									className="no-underline"
								>
									<span className="text-sm">GBF Wiki</span>
									<SquareArrowOutUpRightIcon className="ml-2 size-3" />
								</Link>
							</Button>
						)}

						{page.data.gbfguide && (
							<Button
								asChild
								className="items-center justify-center h-auto px-3 py-1 w-fit"
							>
								<Link
									href={page.data.gbfguide}
									aria-label="gbfguide url"
									target="_blank"
									className="no-underline"
								>
									<span className="text-sm">GBF Guide</span>
									<SquareArrowOutUpRightIcon className="ml-2 size-3" />
								</Link>
							</Button>
						)}
					</div>
				</div>
				<div className="prose-h1:pb-1.5 prose-h1:border-b prose-h2:pb-1.5 prose-h2:border-b">
					<MDX
						components={{
							...defaultMdxComponents,
							Steps,
							Step,
							Tabs,
							Tab,
							Accordions,
							Accordion,
							MDXTableList,
							MDXWeaponGrid,
							MDXCallout,
						}}
					/>
				</div>
			</DocsBody>
		</DocsPage>
	)
}
