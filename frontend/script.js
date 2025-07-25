    // Toggle sidebar
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-collapsed');
        mainContent.classList.toggle('main-content-collapsed');
    });
    
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