import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
} from "@/components/ui/card"

export default function Skills() {
	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="items-center">
				<CardTitle>Skills</CardTitle>
			</CardHeader>
			<CardContent className="flex-1"></CardContent>
		</Card>
	)
}
