const assignmentsList = document.getElementById("assignments-list")

function getAssignments() {
	try {
		return JSON.parse(localStorage.getItem("assignments")) ?? []
	} catch (error) {
		return []
	}
}

function renderAssignments() {
	const assignments = getAssignments()
	const { format: formatDate } = new Intl.DateTimeFormat("pt-BR", {
		dateStyle: "medium",
	})

	if (!assignments.length) return
	assignmentsList.innerHTML = null
	assignments.forEach((assignment) => {
		assignmentsList.innerHTML += `
        <div
            class="border border-black rounded-md px-4 py-4 gap-2 flex flex-col sm:items-center sm:flex-row transition-colors cursor-pointer hover:bg-gray-100"
        >
            <div class="flex-1">
                <h2 class="font-bold">${assignment.title}</h2>
                <p class="text-sm">Conclusão: ${formatDate(new Date(assignment.date))}</p>
            </div>
            <div class="flex gap-x-1">
                <img class="h-8" src="./assets/user.svg" alt="User" />
                <img class="h-8" src="./assets/user.svg" alt="User" />
                <img class="h-8" src="./assets/user.svg" alt="User" />
            </div>
            <span class="text-2xl leading-none hidden sm:block">></span>
        </div>
        `
	})
}

renderAssignments()
