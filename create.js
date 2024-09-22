const form = document.getElementById("create-form")

function getAssignments() {
	try {
		return JSON.parse(localStorage.getItem("assignments")) ?? []
	} catch (error) {
		return []
	}
}

function addAssignment({ title, date }) {
	try {
		if (!title || !date) throw new Error("Título ou data não informados")
		const assignments = getAssignments()
		assignments.push({ title, date })
		localStorage.setItem("assignments", JSON.stringify(assignments))
	} catch (error) {
		console.error(error)
		alert("Erro ao adicionar tarefa.")
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const formData = new FormData(form)

	addAssignment(Object.fromEntries(formData))

	location.href = "/"
})
