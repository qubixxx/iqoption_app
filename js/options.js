var element_save_options = document.getElementById("save_options")
var element_save_message = document.getElementById("save_message")

var strategy = document.getElementById("strategy")
var active = document.getElementById("active")
var option = document.getElementById("option")
var start_lot = document.getElementById("start_lot")

element_save_options.addEventListener("click", save)

function save() {
	localStorage.setItem("strategy", strategy.value)
	localStorage.setItem("active", active.value)
	localStorage.setItem("option", option.value)
	localStorage.setItem("start_lot", start_lot.value)
	localStorage.setItem("configured", true)

	element_save_message.className = "alert alert-success"
	element_save_message.innerHTML = "Configuración guardada correctamente"
}

function load() {
	strategy.value = localStorage.getItem("strategy")
	active.value = localStorage.getItem("active")
	option.value = localStorage.getItem("option")
	start_lot.value = localStorage.getItem("start_lot")
}

window.onload = load()
