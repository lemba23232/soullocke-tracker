const app = document.getElementById("app")

const routes = [
  {
    route: "Route 201",
    pokemon1: "Shinx",
    pokemon2: "Starly",
    status: "alive"
  }
]

function render() {
  app.innerHTML = ""

  routes.forEach(r => {
    const div = document.createElement("div")

    div.className = `card ${r.status}`

    div.innerHTML = `
      <h2>${r.route}</h2>

      <p>${r.pokemon1} ↔ ${r.pokemon2}</p>

      <select>
        <option>alive</option>
        <option>dead</option>
        <option>reroll</option>
      </select>
    `

    app.appendChild(div)
  })
}

render()

import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://supabase.com/dashboard/project/asshnecosyjrgpvxbhww/settings/api-keys/legacy',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzc2huZWNvc3lqcmdwdnhiaHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzMxODksImV4cCI6MjA5NTQ0OTE4OX0.3K6XQlBxYNv2bH2yQTQG_34y2TB5grkBSr5mZ75lvdo'
)