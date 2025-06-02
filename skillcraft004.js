const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const taskTime = document.getElementById('task-time');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask(taskInput.value, taskTime.value);
  form.reset();
});

function addTask(description, dateTime) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${description} - <small>${new Date(dateTime).toLocaleString()}</small></span>
    <div class="actions">
      <button onclick="toggleComplete(this)">✓</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;
  taskList.appendChild(li);
}

function toggleComplete(btn) {
  const li = btn.parentElement.parentElement;
  li.classList.toggle('completed');
}

function deleteTask(btn) {
  const li = btn.parentElement.parentElement;
  taskList.removeChild(li);
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const text = li.querySelector('span').innerText.split(' - ')[0];
  const newDesc = prompt("Edit task:", text);
  if (newDesc) {
    const time = new Date().toLocaleString();
    li.querySelector('span').innerHTML = `${newDesc} - <small>${time}</small>`;
  }
}