var Actives = {
	EURUSD: 1,
	AUDUSD: 99,
	EURUSD_OTC: 76,
	EURAUD: 108,
	APPLE: 32
}

function buyActive() {
	var active = localStorage.getItem("active")
	var option = localStorage.getItem("option")
	var current_lot = localStorage.getItem("current_lot")
	var direction = localStorage.getItem("direction")

	console.warn("Comprar...")
	console.warn("Activo: " + active)
	console.warn("Opción: " + option)
	console.warn("Velocidad: " + current_lot)
	console.warn("Tipo: " + direction)

	chrome.notifications.create("", {
		type: "list",
		iconUrl: "img/logo_w.png",
		title: "IQ Option bot",
		message: "Comprar...",
		items: [
			{ title: "Bienes", message: active },
			{ title: "Opción", message: option },
			{ title: "Velocidad", message: current_lot },
			{ title: "Tipo", message: direction }
		]
	})

	console.info("expirationtimestamp: " + expirationtimestamp)
	console.info("servertimestamp: " + servertimestamp)

	socket.send(
		JSON.stringify({
			"name": "buyV2",
			"msg": {
				"price": current_lot,
				"exp": expirationtimestamp,
				"act": Actives[active],
				"type": option,
				"time": servertimestamp,
				"direction": direction
			}
		})
	)
}
