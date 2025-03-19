const jobSelect = document.getElementById('jobSelect');
    const skillSelect = document.getElementById('skillSelect');
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    jobs.forEach(job => {
      const option = document.createElement('option');
      option.value = job.id;
      option.textContent = `${job.title} - ${job.company}`;
      jobSelect.appendChild(option);
    });

    // Update skill dropdown based on selected job
    jobSelect.addEventListener('change', function () {
      const selectedJobId = this.value;
      const selectedJob = jobs.find(job => job.id == selectedJobId);

      // Clear previous skills
      skillSelect.innerHTML = '<option value="" disabled selected>Select a skill</option>';

      if (selectedJob && selectedJob.skills) {
        // Enable skill dropdown
        skillSelect.disabled = false;

        // Populate skills
        selectedJob.skills.forEach(skill => {
          const option = document.createElement('option');
          option.value = skill;
          option.textContent = skill;
          skillSelect.appendChild(option);
        });
      } else {
        // Disable skill dropdown if no job is selected or no skills are available
        skillSelect.disabled = true;
        skillSelect.innerHTML = '<option value="" disabled selected>No skills available for this job</option>';
      }
    });

    // Handle form submission
    document.getElementById('applyJobForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const candidateName = document.getElementById('candidateName').value;
      const candidateEmail = document.getElementById('candidateEmail').value;
      const jobId = document.getElementById('jobSelect').value;
      const skillRequirement = document.getElementById('skillSelect').value;
      const resumeFile = document.getElementById('resumeUpload').files[0];

      // Validate form
      if (!candidateName || !candidateEmail || !jobId || !skillRequirement || !resumeFile) {
        alert('Please fill out all fields and upload your resume.');
        return;
      }

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Show success message
        document.getElementById('applySuccessMessage').classList.add('visible');

        // Reset form
        document.getElementById('applyJobForm').reset();
        skillSelect.disabled = true;
        skillSelect.innerHTML = '<option value="" disabled selected>Select a job first</option>';
      }, 1000);
    });