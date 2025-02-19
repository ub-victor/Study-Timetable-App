// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '🌞' : '🌓';
});

// Timetable Form Submission
const timetableForm = document.getElementById('timetable-form');
const timetableOutput = document.getElementById('timetable-output');

timetableForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = document.getElementById('activity').value;
  const studyGoal = document.getElementById('study-goal').value;

  // Generate Timetable
  const timetable = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h4 class="text-xl font-bold mb-2">Your Timetable</h4>
      <table class="w-full">
        <thead>
          <tr>
            <th class="border p-2">Day</th>
            <th class="border p-2">Time</th>
            <th class="border p-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">Monday</td>
            <td class="border p-2">1pm - 3pm</td>
            <td class="border p-2">${activity}</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-4">Advice: Take breaks every 50 minutes and revise on Friday.</p>
    </div>
  `;

  timetableOutput.innerHTML = timetable;
});

// Save Notes to Local Storage
const notebook = document.getElementById('notebook');
const saveNotesBtn = document.getElementById('save-notes');

saveNotesBtn.addEventListener('click', () => {
  localStorage.setItem('notes', notebook.value);
  alert('Notes saved!');
});

// Load Notes from Local Storage
window.addEventListener('load', () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notebook.value = savedNotes;
  }
});

// Download Timetable as Image
const downloadTimetableBtn = document.getElementById('download-timetable');

downloadTimetableBtn.addEventListener('click', () => {
  html2canvas(timetableOutput).then(canvas => {
    const link = document.createElement('a');
    link.download = 'timetable.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});