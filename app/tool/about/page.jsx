"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

import Link from "next/link"

export default function Page() {
	const stack = ["these", "Next.js", "React", "shadcn/ui", "Tailwind"]
	const social = ["here", "Skreeauk", "skreeauk", "YogGBF", "Github"]
	const [stackIndex, setStackIndex] = useState(0)
	const [socialIndex, setSocialIndex] = useState(0)
	return (
		<main className="relative z-50 flex flex-col items-center justify-center flex-1 w-full max-w-5xl gap-6 mx-auto">
			<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-5 pt-6 md:pt-0">
				<h1 className="text-5xl font-semibold text-center">About</h1>
			</div>
			<Card className="w-[95%] md:w-full max-w-5xl md:mx-auto mb-28">
				<CardContent className="pt-6">
					<LazyMotion features={domAnimation}>
						<AnimatePresence mode="wait" initial={false}>
							<div className="grid items-center w-full h-full grid-cols-2 md:grid-cols-6 *:flex *:items-center *:justify-center *:border">
								<div className="h-40 col-span-2">
									<span className="text-4xl font-semibold basis-[80%]">
										Built with <br />
										<m.span
											key={stack[stackIndex]}
											initial={{ opacity: 0, y: -10, rotateX: 90 }}
											animate={{ opacity: 1, y: 0, rotateX: 0 }}
											exit={{ opacity: 0, y: 10, rotateX: 90 }}
											transition={{ duration: 0.3, ease: "easeOut" }}
											className={cn(
												"relative inline-block text-4xl font-semibold",
												stackIndex == 2 && "text-[#00D8FF]",
												stackIndex == 4 && "text-[#38bdf8]"
											)}
										>
											{stack[stackIndex]}
										</m.span>
									</span>
								</div>
								{/* NextJS */}
								<div
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setStackIndex(1)}
									onMouseOut={() => setStackIndex(0)}
								>
									<svg
										className="size-16"
										viewBox="0 0 256 256"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											className="stroke-2 stroke-black dark:stroke-white fill-black dark:fill-white"
											strokeDasharray="0 1"
											d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
										/>
									</svg>
								</div>
								{/* React */}
								<div
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setStackIndex(2)}
									onMouseOut={() => setStackIndex(0)}
								>
									<svg
										viewBox="0 0 256 228"
										className="size-16 fill-[#00D8FF]"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid"
									>
										<path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" />
									</svg>
								</div>
								{/* Shadcn/ui */}
								<div
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setStackIndex(3)}
									onMouseOut={() => setStackIndex(0)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
										className="size-16"
									>
										<path fill="none" d="M0 0h256v256H0z" />
										<path
											fill="none"
											className="stroke-[5px] stroke-black dark:stroke-white"
											d="M208 128l-80 80M192 40L40 192"
										/>
									</svg>
								</div>
								{/* Tailwind */}
								<div
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setStackIndex(4)}
									onMouseOut={() => setStackIndex(0)}
								>
									<svg
										viewBox="0 0 256 154"
										className="size-16 fill-[#38BDF8]"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid"
									>
										<path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"></path>
									</svg>
								</div>
								{/* Twitter / X */}
								<Link
									href="https://x.com/Skreeauk"
									aria-label="Twitter / X"
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setSocialIndex(1)}
									onMouseOut={() => setSocialIndex(0)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-16 fill-black dark:fill-white"
										fill="none"
										viewBox="0 0 1200 1227"
									>
										<path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
									</svg>
								</Link>
								{/* Discord */}
								<div
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setSocialIndex(2)}
									onMouseOut={() => setSocialIndex(0)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 127.14 96.36"
										className="size-16 fill-[#5865F2]"
									>
										<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
									</svg>
								</div>
								{/* Youtube */}
								<Link
									href="https://www.youtube.com/@YogGBF"
									aria-label="Youtube"
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setSocialIndex(3)}
									onMouseOut={() => setSocialIndex(0)}
								>
									<svg
										viewBox="0 0 256 180"
										className="size-16"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid"
									>
										<path
											d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
											fill="red"
										/>
										<path
											fill="#FFF"
											d="m102.421 128.06 66.328-38.418-66.328-38.418z"
										/>
									</svg>
								</Link>
								{/* Github */}
								<Link
									href="https://github.com/Skreeauk/dark-gbf"
									aria-label="Github"
									className="w-full h-40 transition duration-500 md:h-full grayscale hover:grayscale-0"
									onMouseOver={() => setSocialIndex(4)}
									onMouseOut={() => setSocialIndex(0)}
								>
									<svg
										className="size-16"
										viewBox="0 0 100 100"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											fill="#24292f"
											className="stroke-2 stroke-black dark:stroke-white fill-black dark:fill-white"
											strokeDasharray="0 1"
											d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
										/>
									</svg>
								</Link>
								<div className="h-40 col-span-2 text-right">
									<span className="text-4xl font-semibold basis-[80%]">
										Reach me <br />
										<m.span
											key={social[socialIndex]}
											initial={{ opacity: 0, y: -10, rotateX: 90 }}
											animate={{ opacity: 1, y: 0, rotateX: 0 }}
											exit={{ opacity: 0, y: 10, rotateX: 90 }}
											transition={{ duration: 0.3, ease: "easeOut" }}
											className={cn(
												"relative inline-block text-4xl font-semibold",
												socialIndex == 2 && "text-[#5865F2]",
												socialIndex == 3 && "text-red-600"
											)}
										>
											@{social[socialIndex]}
										</m.span>
									</span>
								</div>
							</div>
						</AnimatePresence>
					</LazyMotion>
				</CardContent>
			</Card>
		</main>
	)
}
