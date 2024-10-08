export function getOpusKey(pendulum, opusType) {
	// opusType
	// 0 - Magna
	// 1 - Primal
	switch (pendulum) {
		case "none":
			return 225
		case "stamina":
			return [83, 108][opusType]
		case "enmity":
			return [68, 96][opusType]
		case "trium":
			return [86, 54][opusType]
		case "prog":
			return [79, 107][opusType]
		case "celere":
			return [66, 41][opusType]
		case "majesty":
			return [72, 48][opusType]
		case "glory":
			return [70, 99][opusType]
		case "freyr":
			return 217
		case "apple":
			return 218
		case "plain":
			return 219
		case "echo":
			return 220
		case "extremity":
			return 221
		case "sagacity":
			return 222
		case "supremacy":
			return 223
		default:
			return null
	}
}

export function getUltimaKey(key, weaponType) {
	// Axe, Bow, Dagger, Gun, Harp, Katana, Melee, Sabre, Spear, Staff
	const weapon_types = [
		"Axe",
		"Bow",
		"Dagger",
		"Gun",
		"Harp",
		"Katana",
		"Melee",
		"Sabre",
		"Spear",
		"Staff",
	]

	const typeIndex = weapon_types.indexOf(weaponType)

	switch (key) {
		case "none":
			return [228, 228, 228, 228, 228, 228, 228, 228, 228, 228][typeIndex]
		case "ma":
			return [171, 172, 175, 176, 177, 173, 174, 180, 178, 179][typeIndex]
		case "stamina":
			return [161, 162, 165, 166, 167, 163, 164, 170, 168, 169][typeIndex]
		default:
			return null
	}
}
