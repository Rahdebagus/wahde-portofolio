
const tabs = document.querySelectorAll('[data-target]');
const tabsContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const target = document.querySelector(tab.dataset.target);
    tabsContent.forEach((tc) => {
      tc.classList.remove('filters-active');
    });
    target.classList.add('filters-active');
    tabs.forEach((t) => {
      t.classList.remove('filters-tabs-active');
    });
    tab.classList.add('filters-tabs-active');
  });
});

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx-sun');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


//jquery
$(document).ready(function () {
  var projectsData = [

      { 
          imgSrc: './assets/img/ui-ux-dapurly.png',
          category: "Ui-Ux",
          title: "Dapurly",
          link: "https://www.figma.com/file/nCPIK64rOktsxragYnL1BE/Dapurly?type=design&node-id=1-2&mode=design&t=UdX9JjeLoowpH3zQ-0"
      },
      { 
          imgSrc: './assets/img/logo-laravel.png',
          category: "Website",
          title: "Bumdes Asam Manis",
          link: "https://bumdesasammanis.com/"
      },
  ];

  function addProjectsToPage(projects) {
      var projectsContainer = $('#projects');

      projects.forEach(function (project) {
          var projectCard = $('<article class="projects-card">');
          var projectImg = $('<img src="' + project.imgSrc + '" alt="" class="projects-img">');
          var projectModal = $('<div class="projects-modal">');
          var projectInfo = $('<div>');
          var projectSubtitle = $('<span class="projects-subtitle">').text(project.category);
          var projectTitle = $('<h3 class="project-title">').text(project.title);
          var projectButton = $('<a href="' + project.link + '" class="projects-button button button-small"><i class="bx bx-link"></i></a>');

          projectInfo.append(projectSubtitle, projectTitle, projectButton);
          projectModal.append(projectInfo);
          projectCard.append(projectImg, projectModal);

          projectsContainer.append(projectCard);


  
      });
  }

  addProjectsToPage(projectsData);
});




$(document).ready(function () {
    function animateNumber(element, targetNumber) {
        $({ count: 0 }).animate({
            count: targetNumber
        }, {
            duration: 2000, 
            easing: 'swing',
            step: function () {
                $(element).text(Math.floor(this.count));
            },
            complete: function () {
                $(element).text(targetNumber);
            }
        });
    }

    animateNumber('.profile-info-number:eq(0)', 5);
    animateNumber('.profile-info-number:eq(1)', 20);
    animateNumber('.profile-info-number:eq(2)', 25);
}); 



$(document).ready(function () {
  // Array objek dengan data konten
  var projectsData = [
    { 
        imgSrc: './assets/img/dicodingdasarweb.png',
        category: "Sertifikat",
        title: "Belajar Dasar Pemrograman Web",
        link: "#"
    },
      { 
          imgSrc: './assets/img/fundamental-android-kotlin.png',
          category: "Sertifikat",
          title: "Fundamental Mobile",
          link: "#"
      },

      { 
          imgSrc: './assets/img/android intermedia.png',
          category: "Sertifikat",
          title: "Android Intermedia",
          link: "#"
      },
      { 
          imgSrc: './assets/img/compose.png',
          category: "Sertifikat",
          title: "Android JackPack Compose",
          link: "#"
      },
  ];

  function addSertifikat(projects) {
      var projectsContainer = $('#sertifikat');

      projects.forEach(function (project) {
          var projectCard = $('<article class="projects-card">');
          var projectImg = $('<img src="' + project.imgSrc + '" alt="" class="projects-img">');
          var projectModal = $('<div class="projects-modal">');
          var projectInfo = $('<div>');
          var projectSubtitle = $('<span class="projects-subtitle">').text(project.category);
          var projectTitle = $('<h3 class="project-title">').text(project.title);
          var projectButton = $('<a href="' + project.link + '" class="projects-button button button-small"><i class="bx bx-link"></i></a>');

          projectInfo.append(projectSubtitle, projectTitle, projectButton);
          projectModal.append(projectInfo);
          projectCard.append(projectImg, projectModal);

          projectsContainer.append(projectCard);


  
      });
  }

  addSertifikat(projectsData);
});