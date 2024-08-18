import MACalculator from "./components/MACalculator"

export default function Page() {
	const frameworks = [
		{
			value: "Seox",
			label: "Seox",
		},
		{
			value: "Ilsa",
			label: "Ilsa",
		},
		{
			value: "Bowman",
			label: "Bowman",
		},
	]

	const primals = [
		{
			value: "Hades 250",
			label: "Hades 250",
		},
		{
			value: "Celeste 250",
			label: "Celeste 250",
		},
	]
	return (
		<>
			<MACalculator frameworks={frameworks} primals={primals} />
		</>
	)
}
