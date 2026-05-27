let data = []

function addEntry() {
  const route = document.getElementById("route").value
  const p1 = document.getElementById("p1").value
  const p2 = document.getElementById("p2").value

  data.push({
    route,
    p1,
    p2,
    status: "alive"
  })

  render()
}

function render() {
  const list = document.getElementById("list")
  list.innerHTML = ""

  data.forEach((d, i) => {
    const div = document.createElement("div")
    div.className = "card"

    div.innerHTML = `
      <h3>${d.route}</h3>
      <p>${d.p1} ↔ ${d.p2}</p>

      <select onchange="changeStatus(${i}, this.value)">
        <option value="alive">Lebendig</option>
        <option value="dead">Besiegt</option>
        <option value="reroll">Reroll</option>
      </select>
    `

    list.appendChild(div)
  })
}

function changeStatus(i, status) {
  data[i].status = status
  render()
}

import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://asshnecosyjrgpvxbhww.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzc2huZWNvc3lqcmdwdnhiaHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzMxODksImV4cCI6MjA5NTQ0OTE4OX0.3K6XQlBxYNv2bH2yQTQG_34y2TB5grkBSr5mZ75lvdo'
)