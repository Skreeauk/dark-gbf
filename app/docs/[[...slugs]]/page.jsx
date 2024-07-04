import { getPage, getPages } from "@/app/source"
import { DocsPage, DocsBody } from "fumadocs-ui/page"
import { notFound } from "next/navigation"

import { Callout } from "fumadocs-ui/components/callout"
import { Card, Cards } from "fumadocs-ui/components/card"
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock"

import { ColorCallout } from "./components/ColorCallout"

import { cn } from "@/lib/utils"

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
			<DocsBody className="dark:prose-invert">
				<div className="flex flex-col gap-3 mb-8">
					<h1 className="p-0 m-0 text-4xl font-extrabold">{page.data.title}</h1>
					<span className="opacity-70">{page.data.description}</span>
				</div>
				<div className="prose-h1:pb-1.5 prose-h1:border-b prose-h2:pb-1.5 prose-h2:border-b">
					<MDX
						components={{
							Callout: (props) => <Callout {...props} />,
							Card: (props) => <Card {...props} />,
							Cards: (props) => <Cards {...props} />,
							pre: ({ ref, title, ...props }) => (
								<CodeBlock title={title}>
									<Pre {...props} />
								</CodeBlock>
							),
							ColorCallout,
						}}
					/>
				</div>
			</DocsBody>
		</DocsPage>
	)
}
