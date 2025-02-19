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

  // Simulate timetable generation
  const timetable = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h4 class="text-xl font-bold mb-2">Your Timetable</h4>
      <p><strong>Activities:</strong> ${activity}</p>
      <p><strong>Study Goal:</strong> ${studyGoal}</p>
      <p class="mt-4">Here’s your personalized timetable and resources:</p>
      <ul class="list-disc list-inside">
        <li>Resource 1</li>
        <li>Resource 2</li>
        <li>Health Tip: Take breaks every 50 minutes.</li>
      </ul>
    </div>
  `;

  timetableOutput.innerHTML = timetable;
});