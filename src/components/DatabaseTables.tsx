import React from "react";

export const EngineersTable = () => (
  <div className="w-full overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>role</th>
          <th>location</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Ibrahim Muhammad</td>
          <td>Software Engineer</td>
          <td>Gujrat, PK</td>
          <td>Available</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const ProjectsTable = () => (
  <div className="w-full overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>project_name</th>
          <th>stack</th>
          <th>description</th>
          <th>repository</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>planora</td>
          <td>Next.js, PostgreSQL, Prisma</td>
          <td>AI-powered project management platform</td>
          <td><a href="#" className="underline hover:text-ink-muted">Link</a></td>
        </tr>
        <tr>
          <td>form_factor</td>
          <td>React, Express</td>
          <td>Gym management system</td>
          <td><a href="#" className="underline hover:text-ink-muted">Link</a></td>
        </tr>
        <tr>
          <td>inkwell</td>
          <td>Next.js, PostgreSQL</td>
          <td>Long-form writing platform</td>
          <td><a href="#" className="underline hover:text-ink-muted">Link</a></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const ExperienceTable = () => (
  <div className="w-full overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>role</th>
          <th>organization</th>
          <th>duration</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>BSSE Student</td>
          <td>University of Gujrat</td>
          <td>2022 - 2026</td>
          <td>Software Engineering fundamentals, full-stack projects, FYP</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const StackTable = () => (
  <div className="w-full overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>category</th>
          <th>technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frontend</td>
          <td>React, Next.js, HTML, CSS, Tailwind CSS</td>
        </tr>
        <tr>
          <td>Backend</td>
          <td>Node.js, Express.js</td>
        </tr>
        <tr>
          <td>Database</td>
          <td>PostgreSQL, MongoDB, Prisma, Mongoose</td>
        </tr>
        <tr>
          <td>Languages</td>
          <td>JavaScript, TypeScript, SQL</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const ContactTable = () => (
  <div className="w-full overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>platform</th>
          <th>handle</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Email</td>
          <td>im.7249000@gmail.com</td>
          <td><a href="mailto:im.7249000@gmail.com" className="underline hover:text-ink-muted">Send</a></td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td>Ibrahim-116</td>
          <td><a href="https://github.com/Ibrahim-116" target="_blank" rel="noreferrer" className="underline hover:text-ink-muted">View</a></td>
        </tr>
        <tr>
          <td>LinkedIn</td>
          <td>Ibrahim-Muhammad</td>
          <td><a href="https://linkedin.com/in/Ibrahim-Muhammad" target="_blank" rel="noreferrer" className="underline hover:text-ink-muted">View</a></td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>0310-7754767</td>
          <td><a href="tel:03107754767" className="underline hover:text-ink-muted">Call</a></td>
        </tr>
      </tbody>
    </table>
  </div>
);
