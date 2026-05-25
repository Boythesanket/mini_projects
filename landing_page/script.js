import { projects } from "./assets/assets.js";

const projectGrid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");

const projectLabel = projects.length === 1 ? "project" : "projects";
projectCount.textContent = `${projects.length} ${projectLabel}`;

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <a class="project-cover" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.name} live demo">
          <img src="${project.cover}" alt="${project.name} preview" loading="lazy">
        </a>

        <div class="project-body">
          <div>
            <p class="project-kicker">Featured project</p>
            <h3>${project.name}</h3>
          </div>

          <div class="project-actions" aria-label="${project.name} links">
            <a class="button primary" href="${project.url}" target="_blank" rel="noreferrer">Live Demo</a>
            <a class="button secondary" href="${project.source_code}" target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>
      </article>
    `
  )
  .join("");
