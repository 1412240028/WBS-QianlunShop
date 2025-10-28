const wbsData = [
    {
      phase: "1. Analisis Kebutuhan",
      tasks: [
        {
          title: "Wawancara stakeholder",
          description:
            "Melakukan wawancara mendalam dengan stakeholder untuk memahami kebutuhan bisnis, ekspektasi pengguna, dan requirement sistem e-commerce.",
        },
        {
          title: "Identifikasi kebutuhan fungsional & non-fungsional",
          description:
            "Mendefinisikan fitur-fitur yang diperlukan (katalog produk, keranjang belanja, checkout) serta requirement non-fungsional seperti keamanan, performa, dan skalabilitas.",
        },
        {
          title: "Buat dokumen SRS",
          description:
            "Menyusun Software Requirements Specification yang lengkap mencakup use case, functional requirements, dan technical specifications sebagai panduan development.",
        },
      ],
    },
    {
      phase: "2. Desain Sistem",
      tasks: [
        {
          title: "Desain ERD & DF",
          description:
            "Membuat ERD dan DFD untuk memetakan struktur dan aliran data dengan efisien.",
        },
        {
          title: "Desain UI/UX",
          description:
            "Merancang antarmuka intuitif dan pengalaman pengguna optimal, termasuk mockup dan prototype.",
        },
        {
          title: "Desain arsitektur sistem",
          description:
            "Menentukan arsitektur teknis, tech stack, API design, dan infrastruktur cloud untuk skalabilitas optimal.",
        },
      ],
    },
    {
      phase: "3. Implementasi",
      tasks: [
        {
          title: "Pengembangan front end (JavaFX)",
          description:
            "Membangun antarmuka desktop menggunakan JavaFX dan integrasi API.",
        },
        {
          title: "Pengembangan back-end (Java)",
          description:
            "Mengembangkan server-side logic dan service layer dengan framework Java.",
        },
        {
          title: "Integrasi database",
          description:
            "Implementasi MySQL/PostgreSQL dengan optimasi query dan connection pooling.",
        },
      ],
    },
    {
      phase: "4. Pengujian",
      tasks: [
        {
          title: "Unit testing",
          description:
            "Menggunakan JUnit untuk memastikan fungsi berjalan sesuai spesifikasi.",
        },
        {
          title: "Integration testing",
          description:
            "Menguji konektivitas antar modul dan integrasi front-end/back-end.",
        },
        {
          title: "Final testing",
          description:
            "Melakukan UAT, load, dan security testing di lingkungan produksi.",
        },
      ],
    },
    {
      phase: "5. Documentation",
      tasks: [
        {
          title: "Penulisan laporan akhir",
          description:
            "Membuat dokumentasi lengkap mencakup arsitektur, API, dan laporan proyek.",
        },
        {
          title: "User manual",
          description:
            "Panduan penggunaan sistem untuk end-user dengan tutorial step-by-step.",
        },
        {
          title: "Pelatihan pengguna",
          description:
            "Training dan knowledge transfer ke tim maintenance dan admin.",
        },
      ],
    },
  ];
  
  const phasesContainer = document.getElementById("phasesContainer");
  
  wbsData.forEach((phaseData) => {
    const phaseCard = document.createElement("div");
    phaseCard.className = "phase-card glass-panel collapsed";
  
    const phaseHeader = document.createElement("div");
    phaseHeader.className = "phase-header";
    phaseHeader.innerHTML = `${phaseData.phase}<span class="collapse-indicator">▼</span>`;
  
    const phaseContent = document.createElement("div");
    phaseContent.className = "phase-content";
  
    phaseData.tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
  
      const taskTitle = document.createElement("div");
      taskTitle.className = "task-title";
      taskTitle.textContent = task.title;
  
      const taskDescription = document.createElement("div");
      taskDescription.className = "task-description";
      taskDescription.textContent = task.description;
  
      taskItem.appendChild(taskTitle);
      taskItem.appendChild(taskDescription);
  
      // Click to toggle description
      taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("show-desc");
      });
  
      phaseContent.appendChild(taskItem);
    });
  
    phaseHeader.addEventListener("click", () => {
      phaseCard.classList.toggle("collapsed");
      phaseContent.classList.toggle("expanded");
  
      // Animate connector appear/disappear
      const connector = document.querySelector(".connection-line");
      connector.style.opacity = phaseContent.classList.contains("expanded")
        ? "1"
        : "0";
    });
  
    phaseCard.appendChild(phaseHeader);
    phaseCard.appendChild(phaseContent);
    phasesContainer.appendChild(phaseCard);
  });
  