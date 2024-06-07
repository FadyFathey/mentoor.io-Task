<h1>Mentoor.io Task Manager</h1>

<p>A simple task manager application built with Vite, React, Redux Toolkit, and TypeScript. This application allows users to add, edit, delete, and mark tasks as completed. The tasks are stored in the browser's localStorage to persist data between sessions.</p>

<h2>Features</h2>
<ul>
  <li>Add new tasks</li>
  <li>Edit existing tasks</li>
  <li>Delete tasks</li>
  <li>Mark tasks as completed</li>
  <li>Tasks are persisted in localStorage</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>Vite</li>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>TypeScript</li>
  <li>Tailwind CSS</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/your-username/mentoor.io-Task.git
cd mentoor.io-Task</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Open your browser and navigate to:
    <pre><code>http://localhost:3000</code></pre>
  </li>
</ol>

<h2>Project Structure</h2>
<pre><code>src/
│
├── App.tsx                    # Root component
├── index.tsx                  # Entry point
├── layouts/
│   └── MainLayout.tsx         # Main layout component
├── components/
│   ├── addTodo/
│   │   └── AddTodo.tsx        # Component to add new tasks
│   ├── header/
│   │   └── Header.tsx         # Header component
│   ├── tasks/
│   │   └── Task.tsx           # Individual task component
│   │   └── Tasks.tsx          # Container for all tasks
│   └── util/
│       └── CreatedTask.tsx    # Component displaying created and completed tasks
├── RTK/
│   ├── store.ts               # Redux store configuration
│   └── taskSlice.ts           # Redux slice for tasks
└── assets/                    # Static assets (images, icons, etc.)
</code></pre>

<h2>Usage</h2>
<ol>
  <li><strong>Add a Task</strong>: Enter a task in the input field and click the "Create" button. The task will be added to the list of tasks.</li>
  <li><strong>Edit a Task</strong>: Click on the task text you want to edit. The task text will be loaded into the input field, and the "Create" button will change to "Update". Edit the text and click "Update" to save the changes.</li>
  <li><strong>Delete a Task</strong>: Click on the delete icon next to the task you want to delete. The task will be removed from the list.</li>
  <li><strong>Mark a Task as Completed</strong>: Click on the "undone" icon next to the task. The task will be marked as completed, and the icon will change to "done".</li>
</ol>

<h2>Screenshots</h2>
![Screenshot 2024-06-07 192600](https://github.com/FadyFathey/mentoor.io-Task/assets/117510974/b4ee83d8-ccaa-4ab5-84a2-8ebe76998dbe)

<h2>Contributing</h2>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
  <li>Make your changes and commit them (<code>git commit -am 'Add new feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
  <li>Create a new Pull Request.</li>
</ol>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Acknowledgements</h2>
<ul>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://vitejs.dev/">Vite</a></li>
</ul>

<hr />

<p>Made with ❤️ by <a href="https://github.com/FadyFathey">fady fathey</a></p>
