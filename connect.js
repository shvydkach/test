const getData = async () => {
  const response = await fetch("./data.json")
  const data = await response.json()
  return data
}

const test = getData()
.then((data) => {
  data.forEach(dataObject => {
    const task = document.createElement("div")
    task.classList.add("task")
    dataObject.completed 
      ? task.classList.add("task-done")
      : task.classList.add("task-failed")
    task.innerHTML = `
      <div class="task-text">
        <p class="task-title">${dataObject.task || "?"}</p>
        <p class="task-responsible">${dataObject.responsible || "-"}</p>
      </div>
    `
    document.querySelector(".container").appendChild(task)
  })
})

