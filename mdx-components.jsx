// Assume you're using Fumadocs UI
import defaultComponents from "fumadocs-ui/mdx"

import { Card, Cards } from "fumadocs-ui/components/card"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { Accordion, Accordions } from "fumadocs-ui/components/accordion"

import { MDXTableList } from "@/components/mdx/MDXTableList"
import { MDXWeaponGrid } from "@/components/mdx/MDXWeaponGrid"
import { MDXCallout } from "@/components/mdx/MDXCallout"

export function useMDXComponents(components) {
	return {
		...defaultComponents,
		...components,
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
	}
}
