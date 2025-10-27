const wbsData = [
    {
        phase: "1. Analisis Kebutuhan",
        tasks: [
            {
                title: "Wawancara stakeholder",
                description: "Melakukan wawancara mendalam dengan stakeholder untuk memahami kebutuhan bisnis, ekspektasi pengguna, dan requirement sistem e-commerce."
            },
            {
                title: "Identifikasi kebutuhan fungsional & non-fungsional",
                description: "Mendefinisikan fitur-fitur yang diperlukan (katalog produk, keranjang belanja, checkout) serta requirement non-fungsional seperti keamanan, performa, dan skalabilitas."
            },
            {
                title: "Buat dokumen SRS",
                description: "Menyusun Software Requirements Specification yang lengkap mencakup use case, functional requirements, dan technical specifications sebagai panduan development."
            }
        ]
    },
    {
        phase: "2. Desain Sistem",
        tasks: [
            {
                title: "Desain ERD & DF",
                description: "Membuat Entity Relationship Diagram untuk struktur database dan Data Flow Diagram untuk alur data dalam sistem, memastikan normalisasi dan efisiensi."
            },
            {
                title: "Desain UI/UX",
                description: "Merancang user interface yang intuitif dan user experience yang optimal, termasuk wireframe, mockup, dan prototype untuk desktop dan mobile."
            },
            {
                title: "Desain arsitektur sistem",
                description: "Menentukan arsitektur teknis aplikasi (MVC, microservices, dll), tech stack, API design, dan infrastruktur cloud untuk skalabilitas optimal."
            }
        ]
    },
    {
        phase: "3. Implementasi",
        tasks: [
            {
                title: "Pengembangan front end (JavaFX)",
                description: "Membangun antarmuka desktop menggunakan JavaFX dengan implementasi design pattern, responsive layout, dan integrasi dengan backend API."
            },
            {
                title: "Pengembangan back-end (Java Hysq50)",
                description: "Mengembangkan server-side logic, REST API endpoints, business logic layer, dan service layer menggunakan Java framework untuk handling request dan response."
            },
            {
                title: "Integrasi database",
                description: "Mengimplementasikan database MySQL/PostgreSQL, membuat stored procedures, triggers, dan optimasi query untuk performa maksimal dengan connection pooling."
            }
        ]
    },
    {
        phase: "4. Pengujian",
        tasks: [
            {
                title: "Unit testing",
                description: "Melakukan pengujian pada setiap unit/modul code secara individual menggunakan JUnit untuk memastikan setiap fungsi bekerja sesuai spesifikasi."
            },
            {
                title: "Integration testing",
                description: "Menguji interaksi antar modul, API integration, database connectivity, dan komunikasi front-end dengan back-end untuk memastikan sistem terintegrasi dengan baik."
            },
            {
                title: "Final testing di lingkungan produksi",
                description: "Melakukan User Acceptance Testing (UAT), load testing, security testing, dan stress testing di environment production untuk validasi akhir sebelum deployment."
            }
        ]
    },
    {
        phase: "5. Dokumentasi & Pelatihan",
        tasks: [
            {
                title: "Penulisan laporan akhir",
                description: "Menyusun dokumentasi teknis lengkap mencakup architecture overview, API documentation, deployment guide, dan project summary report."
            },
            {
                title: "User manual",
                description: "Membuat panduan penggunaan sistem untuk end-user dengan step-by-step tutorial, screenshot, FAQ, dan troubleshooting guide yang mudah dipahami."
            },
            {
                title: "Pelatihan pengguna",
                description: "Menyelenggarakan sesi training untuk admin dan user, knowledge transfer ke tim maintenance, dan menyediakan support documentation untuk operasional harian."
            }
        ]
    }
];

const phasesContainer = document.getElementById('phasesContainer');

wbsData.forEach((phaseData, index) => {
    const phaseCard = document.createElement('div');
    phaseCard.className = 'phase-card collapsed';
    
    const phaseHeader = document.createElement('div');
    phaseHeader.className = 'phase-header';
    phaseHeader.innerHTML = `${phaseData.phase}<span class="collapse-indicator">▼</span>`;
    
    const phaseContent = document.createElement('div');
    phaseContent.className = 'phase-content';
    
    phaseData.tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        
        const taskTitle = document.createElement('div');
        taskTitle.className = 'task-title';
        taskTitle.textContent = task.title;
        
        const taskDescription = document.createElement('div');
        taskDescription.className = 'task-description';
        taskDescription.textContent = task.description;
        
        taskItem.appendChild(taskTitle);
        taskItem.appendChild(taskDescription);
        phaseContent.appendChild(taskItem);
    });
    
    phaseHeader.addEventListener('click', () => {
        phaseCard.classList.toggle('collapsed');
        phaseContent.classList.toggle('expanded');
    });
    
    phaseCard.appendChild(phaseHeader);
    phaseCard.appendChild(phaseContent);
    phasesContainer.appendChild(phaseCard);
});
