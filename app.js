let data = []

function getImage(name) {
  return `https://img.pokemondb.net/sprites/home/normal/${name.toLowerCase()}.png`
}

function addEntry() {
  const route = document.getElementById("route").value
  const p1 = document.getElementById("p1").value
  const p2 = document.getElementById("p2").value

  if (!route || !p1 || !p2) return

  data.push({
    route,
    p1,
    p2,
    status: "alive"
  })

  render()
}

function changeStatus(i, val) {
  data[i].status = val
  render()
}

function render() {
  const list = document.getElementById("list")
  list.innerHTML = ""

  data.forEach((d, i) => {

    const div = document.createElement("div")
    div.className = "card"

    div.innerHTML = `
      <div>
        <h3>${d.route}</h3>

        <div class="poke">
          <img src="${getImage(d.p1)}" />
          <span>${d.p1}</span>
        </div>

        <div class="poke">
          <img src="${getImage(d.p2)}" />
          <span>${d.p2}</span>
        </div>
      </div>

      <div>
        <select onchange="changeStatus(${i}, this.value)" class="status ${d.status}">
          <option value="alive">Lebendig</option>
          <option value="dead">Besiegt</option>
          <option value="reroll">Reroll</option>
        </select>
      </div>
    `

    list.appendChild(div)
  })
}

import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://asshnecosyjrgpvxbhww.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzc2huZWNvc3lqcmdwdnhiaHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzMxODksImV4cCI6MjA5NTQ0OTE4OX0.3K6XQlBxYNv2bH2yQTQG_34y2TB5grkBSr5mZ75lvdo'
)