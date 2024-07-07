import { notFound } from "next/navigation"

import { getPage, getPages } from "@/app/source"
import { DocsPage, DocsBody } from "fumadocs-ui/page"

import { Callout } from "fumadocs-ui/components/callout"
import { Card, Cards } from "fumadocs-ui/components/card"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { Accordion, Accordions } from "fumadocs-ui/components/accordion"

import { MDXTableList } from "./components/MDXTableList"
import { MDXWeaponGrid } from "./components/MDXWeaponGrid"
import { MDXCallout } from "./components/MDXCallout"

import { openGraph } from "@/utils/meta"

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
		openGraph: {
			url: page.url,
			type: "article",
			publishedTime: "2024-07-06T00:00:00.000Z",
			modifiedTime: "2024-07-06T00:00:00.000Z",
			...openGraph,
		},
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
			<DocsBody className="dark:prose-invert md:min-w-full">
				<div className="flex flex-col gap-3 mb-8">
					<h1 className="p-0 m-0 text-4xl font-semibold">{page.data.title}</h1>
					<span className="opacity-70">{page.data.description}</span>
				</div>
				<div className="prose-h1:pb-1.5 prose-h1:border-b prose-h2:pb-1.5 prose-h2:border-b">
					<MDX
						components={{
							Callout,
							Cards,
							Card,
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
