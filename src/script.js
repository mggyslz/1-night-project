// Toggle sidebar
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-collapsed');
    mainContent.classList.toggle('main-content-collapsed');
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.sidebar a');
    
    // Add click event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section from the nav-text
            const target = this.querySelector('.nav-text').textContent.toLowerCase();
            
            // Handle different sections
            switch(target) {
                case 'dashboard':
                    showDashboard();
                    break;
                case 'elections':
                    showElections();
                    break;
                case 'voters':
                    showVoters();
                    break;
                case 'results':
                    showResults();
                    break;
                case 'settings':
                    showSettings();
                    break;
                case 'help':
                    showHelp();
                    break;
            }
        });
    });
    
    // Initialize with dashboard
    showDashboard();
});

// Section display functions
function showDashboard() {
    // This is the default view, no need to change anything
    document.getElementById('mainContent').innerHTML = document.querySelector('.container-fluid').outerHTML;
    initializeCharts();
}

function showElections() {
    const content = `
        <div class="container-fluid p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0" style="font-weight: 700; color: var(--dark);">Elections Management</h2>
                <button class="btn btn-primary">
                    <i class="bi bi-plus-circle"></i> Create Election
                </button>
            </div>
            
            <div class="card p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 style="font-weight: 600;">Active Elections</h5>
                    <div class="input-group" style="width: 250px;">
                        <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
                        <input type="text" class="form-control" placeholder="Search elections...">
                    </div>
                </div>
                
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Election Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Student Council 2023</td>
                                <td>May 1, 2023</td>
                                <td>May 5, 2023</td>
                                <td><span class="badge bg-success">Active</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Class Representatives</td>
                                <td>May 10, 2023</td>
                                <td>May 15, 2023</td>
                                <td><span class="badge bg-warning">Upcoming</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Sports Committee</td>
                                <td>Apr 20, 2023</td>
                                <td>Apr 25, 2023</td>
                                <td><span class="badge bg-secondary">Completed</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="card p-4 mt-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 style="font-weight: 600;">Create New Election</h5>
                </div>
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Election Name</label>
                            <input type="text" class="form-control" placeholder="Enter election name">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Election Type</label>
                            <select class="form-select">
                                <option selected>Select election type</option>
                                <option>Student Council</option>
                                <option>Class Representatives</option>
                                <option>Committee Elections</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Start Date & Time</label>
                            <input type="datetime-local" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">End Date & Time</label>
                            <input type="datetime-local" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" rows="3" placeholder="Enter election description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Create Election</button>
                </form>
            </div>
        </div>
    `;
    document.getElementById('mainContent').innerHTML = content;
}

function showVoters() {
    const content = `
        <div class="container-fluid p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0" style="font-weight: 700; color: var(--dark);">Voter Management</h2>
                <div class="d-flex">
                    <div class="input-group" style="width: 250px;">
                        <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
                        <input type="text" class="form-control" placeholder="Search voters...">
                    </div>
                    <button class="btn btn-primary ms-3">
                        <i class="bi bi-plus-circle"></i> Add Voter
                    </button>
                </div>
            </div>
            
            <div class="card p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 style="font-weight: 600;">Registered Voters</h5>
                    <div class="dropdown">
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown">
                            All Voters
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">All Voters</a></li>
                            <li><a class="dropdown-item" href="#">Verified</a></li>
                            <li><a class="dropdown-item" href="#">Pending</a></li>
                            <li><a class="dropdown-item" href="#">Voted</a></li>
                            <li><a class="dropdown-item" href="#">Not Voted</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Voted</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023001</td>
                                <td>Miggy Cea</td>
                                <td>miggy.cea@example.com</td>
                                <td><span class="badge bg-success">Verified</span></td>
                                <td><span class="badge bg-success">Yes</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2023002</td>
                                <td>Lance Gomez</td>
                                <td>lance.gomez@example.com</td>
                                <td><span class="badge bg-success">Verified</span></td>
                                <td><span class="badge bg-success">Yes</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2023003</td>
                                <td>Jam Santos</td>
                                <td>jam.santos@example.com</td>
                                <td><span class="badge bg-warning">Pending</span></td>
                                <td><span class="badge bg-secondary">No</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2023004</td>
                                <td>Rina Velasco</td>
                                <td>rina.velasco@example.com</td>
                                <td><span class="badge bg-success">Verified</span></td>
                                <td><span class="badge bg-success">Yes</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2023005</td>
                                <td>Mark Tan</td>
                                <td>mark.tan@example.com</td>
                                <td><span class="badge bg-danger">Rejected</span></td>
                                <td><span class="badge bg-secondary">No</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-eye"></i></button>
                                    <button class="btn btn-sm btn-outline-secondary me-1"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <nav class="mt-4">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    `;
    document.getElementById('mainContent').innerHTML = content;
}

function showResults() {
    const content = `
        <div class="container-fluid p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0" style="font-weight: 700; color: var(--dark);">Election Results</h2>
                <div class="d-flex">
                    <div class="dropdown me-3">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="electionDropdown" data-bs-toggle="dropdown">
                            Student Council 2023
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Student Council 2023</a></li>
                            <li><a class="dropdown-item" href="#">Class Representatives</a></li>
                            <li><a class="dropdown-item" href="#">Sports Committee</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-primary">
                        <i class="bi bi-download"></i> Export Results
                    </button>
                </div>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 style="font-weight: 600;" class="mb-4">President</h5>
                        <div class="chart-container">
                            <canvas id="presidentResultsChart"></canvas>
                        </div>
                        <div class="mt-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <div style="width: 12px; height: 12px; background-color: #4361ee; border-radius: 2px; margin-right: 8px;"></div>
                                    <span>Anna Cruz</span>
                                </div>
                                <span class="badge-vote">52% (650 votes)</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <div style="width: 12px; height: 12px; background-color: #7209b7; border-radius: 2px; margin-right: 8px;"></div>
                                    <span>David Li</span>
                                </div>
                                <span class="badge-vote">32% (400 votes)</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <div style="width: 12px; height: 12px; background-color: #f72585; border-radius: 2px; margin-right: 8px;"></div>
                                    <span>Sarah Tan</span>
                                </div>
                                <span class="badge-vote">16% (200 votes)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="card p-4">
                        <h5 style="font-weight: 600;" class="mb-4">Vice President</h5>
                        <div class="chart-container">
                            <canvas id="vpResultsChart"></canvas>
                        </div>
                        <div class="mt-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <div style="width: 12px; height: 12px; background-color: #4cc9f0; border-radius: 2px; margin-right: 8px;"></div>
                                    <span>Kyle Dela Rosa</span>
                                </div>
                                <span class="badge-vote">42% (525 votes)</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <div style="width: 12px; height: 12px; background-color: #4895ef; border-radius: 2px; margin-right: 8px;"></div>
                                    <span>Gab Tengco</span>
                                </div>
                                <span class="badge-vote">35% (438 votes)</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <div style="width: 12px; height: 12px; background-color: #3f37c9; border-radius: 2px; margin-right: 8px;"></div>
                                    <span>Luis Chua</span>
                                </div>
                                <span class="badge-vote">23% (288 votes)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-12">
                    <div class="card p-4">
                        <h5 style="font-weight: 600;" class="mb-4">Detailed Results</h5>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Candidate</th>
                                        <th>Votes</th>
                                        <th>Percentage</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>President</td>
                                        <td>Anna Cruz</td>
                                        <td>650</td>
                                        <td>52%</td>
                                        <td><span class="badge bg-success">Winner</span></td>
                                    </tr>
                                    <tr>
                                        <td>President</td>
                                        <td>David Li</td>
                                        <td>400</td>
                                        <td>32%</td>
                                        <td><span class="badge bg-secondary">Runner-up</span></td>
                                    </tr>
                                    <tr>
                                        <td>President</td>
                                        <td>Sarah Tan</td>
                                        <td>200</td>
                                        <td>16%</td>
                                        <td><span class="badge bg-secondary">Runner-up</span></td>
                                    </tr>
                                    <tr>
                                        <td>Vice President</td>
                                        <td>Kyle Dela Rosa</td>
                                        <td>525</td>
                                        <td>42%</td>
                                        <td><span class="badge bg-success">Winner</span></td>
                                    </tr>
                                    <tr>
                                        <td>Vice President</td>
                                        <td>Gab Tengco</td>
                                        <td>438</td>
                                        <td>35%</td>
                                        <td><span class="badge bg-secondary">Runner-up</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('mainContent').innerHTML = content;
    
    // Initialize results charts
    setTimeout(() => {
        const presidentResultsCtx = document.getElementById('presidentResultsChart').getContext('2d');
        new Chart(presidentResultsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Anna Cruz', 'David Li', 'Sarah Tan'],
                datasets: [{
                    data: [650, 400, 200],
                    backgroundColor: ['#4361ee', '#7209b7', '#f72585'],
                    borderWidth: 0,
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
        
        const vpResultsCtx = document.getElementById('vpResultsChart').getContext('2d');
        new Chart(vpResultsCtx, {
            type: 'bar',
            data: {
                labels: ['Kyle Dela Rosa', 'Gab Tengco', 'Luis Chua'],
                datasets: [{
                    label: 'Votes',
                    data: [525, 438, 288],
                    backgroundColor: ['#4cc9f0', '#4895ef', '#3f37c9'],
                    borderRadius: 6,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawBorder: false
                        },
                        ticks: {
                            stepSize: 100
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }, 100);
}

function showSettings() {
    const content = `
        <div class="container-fluid p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0" style="font-weight: 700; color: var(--dark);">Settings</h2>
            </div>
            
            <div class="card p-4">
                <div class="alert alert-info">
                    <i class="bi bi-info-circle"></i> Settings section is under development.
                </div>
            </div>
        </div>
    `;
    document.getElementById('mainContent').innerHTML = content;
}

function showHelp() {
    const content = `
        <div class="container-fluid p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0" style="font-weight: 700; color: var(--dark);">Help Center</h2>
            </div>
            
            <div class="card p-4">
                <div class="alert alert-info">
                    <i class="bi bi-info-circle"></i> Help section is under development.
                </div>
            </div>
        </div>
    `;
    document.getElementById('mainContent').innerHTML = content;
}

// Export button functionality
document.addEventListener('DOMContentLoaded', function() {
    const exportBtn = document.querySelector('.btn-primary[aria-label="Export"]');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Export functionality will be implemented soon.');
        });
    }
});

// Initialize charts on dashboard
function initializeCharts() {
    // President Chart
    const presidentCtx = document.getElementById('presidentChart').getContext('2d');
    new Chart(presidentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Anna Cruz', 'David Li', 'Sarah Tan'],
            datasets: [{
                data: [650, 400, 200],
                backgroundColor: ['#4361ee', '#7209b7', '#f72585'],
                borderWidth: 0,
            }]
        },
        options: {
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} votes (${Math.round(context.parsed)}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // VP Chart
    const vpCtx = document.getElementById('vpChart').getContext('2d');
    new Chart(vpCtx, {
        type: 'bar',
        data: {
            labels: ['Kyle Dela Rosa', 'Gab Tengco', 'Luis Chua'],
            datasets: [{
                label: 'Votes',
                data: [525, 438, 288],
                backgroundColor: ['#4cc9f0', '#4895ef', '#3f37c9'],
                borderRadius: 6,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    },
                    ticks: {
                        stepSize: 100
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Activity Chart
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    new Chart(activityCtx, {
        type: 'line',
        data: {
            labels: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
            datasets: [{
                label: 'Votes',
                data: [12, 45, 78, 120, 95, 140, 180, 210],
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#4361ee',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}