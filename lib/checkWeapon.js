export function checkWeapon(weaponID, order) {
	const weapon = isOpus(weaponID, order)
		? "opus"
		: isDraco(weaponID, order)
		? "draconic"
		: isUltima(weaponID, order)
		? "ultima"
		: "none"

	return weapon
}

export function whichOpus(weaponID) {
	if (weaponID == 1040911100) {
		return 0
	} else if (weaponID == 1040911000) {
		return 1
	}

	return null
}

function isOpus(weaponID, order) {
	const opusId = [1040911100, 1040911000]

	if (opusId.includes(weaponID) && order > 0) {
		return true
	} else {
		return false
	}
}

function isDraco(weaponID, order) {
	if (weaponID == 1040516500 && order > 0) {
		return true
	} else {
		return false
	}
}

function isUltima(weaponID, order) {
	const ultimaID = [
		1040308300, 1040908000, 1040707400, 1040608600, 1040110200, 1040507900,
		1040807500, 1040209300, 1040411300, 1040012400,
	]

	if (ultimaID.includes(weaponID)) {
		return true
	} else {
		return false
	}
}
