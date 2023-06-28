const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  document.querySelector('.desktop').classList.toggle('show');
});

const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
  document.querySelector('.desktop').classList.toggle('show');
});

const linkButtons = document.querySelectorAll('.links');
linkButtons.forEach((linkButton) => {
  linkButton.addEventListener('click', () => {
    document.querySelector('.desktop').classList.toggle('show');
  });
});

const projectDetails = [
  {
    nameMobile: 'Tonic',
    description:
      'A daily selection of private personalized reads; no accounts or sign-ups required.',
    featureImagePc: 'images/dektop-images/nature.png',
    featureImageMb: 'images/2nd-phase/pic_on_screen.png',
    technologiesMobile: ['HTML', 'CSS', 'JavaScript'],
    technologiesDesktop: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkToLiveSection: '',
    linkToSource: '',
    nameDesktop: 'Tonic',
    descriptionPC:
      'A daily selection of private personalized reads; no accounts or sign-ups required.',
  },

  {
    nameMobile: 'Multi-Post-Stories',
    description:
      'A daily selection of private personalized reads; no accounts or sign-ups required.',
    descriptionPc:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featureImagePc: 'images/dektop-images/art.png',
    featureImageMb: 'images/2nd-phase/Avail.png',
    technologiesMobile: ['HTML', 'CSS', 'JavaScript'],
    technologiesDesktop: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkToLiveSection: '',
    linkToSource: '',
    nameDesktop: 'Multi-Post-Stories',
  },

  {
    nameMobile: 'Tonic',
    description:
      'A daily selection of private personalized reads; no accounts or sign-ups required.',
    descriptionPc:
      'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.\', featureImagePc: \'images/dektop-images/display-pic.png',
    featureImagePc: 'images/dektop-images/display-pic.png',
    featureImageMb: 'images/2nd-phase/gym.png',
    technologiesMobile: ['HTML', 'CSS', 'JavaScript'],
    technologiesDesktop: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkToLiveSection: '',
    linkToSource: '',
    nameDesktop: 'Facebook 360',
  },

  {
    nameMobile: 'Multi-Post-Stories',
    description:
      'A daily selection of private personalized reads; no accounts or sign-ups required.',
    descriptionPc:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featureImagePc: 'images/dektop-images/avail.png',
    featureImageMb: 'images/2nd-phase/art.png',
    technologiesMobile: ['HTML', 'CSS', 'JavaScript'],
    technologiesDesktop: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkToLiveSection: '',
    linkToSource: '',
    nameDesktop: 'Uber Navigation',
  },
];

projectDetails.map((projectDetail, index) => {
  const desktopImages = document.querySelectorAll('.desktop-image');
  desktopImages[index].src = projectDetail.featureImagePc;

  const mobileImages = document.querySelectorAll('.mobile-image');
  mobileImages[index].src = projectDetail.featureImageMb;

  const titleMobiles = document.querySelectorAll('.title-mobile');
  titleMobiles[index].innerHTML = projectDetail.nameMobile;

  const titleDesktops = document.querySelectorAll('.title-desktop');
  titleDesktops[index].innerHTML = projectDetail.nameDesktop;

  const texts = document.querySelectorAll('.project-details');
  texts[index].innerHTML = projectDetail.description;

  const desktopTexts = document.querySelectorAll('.desktop-text');
  desktopTexts[index].innerHTML = projectDetail.descriptionPc;

  const desktopTechs = document.querySelectorAll('.desktop-lang');
  projectDetail.technologiesDesktop.map((td) => {
    const list = document.createElement('li');
    list.textContent = td;
    list.classList = 'desktop-lang-type';
    desktopTechs[index].appendChild(list);
  });
});

const desktopButtons = document.querySelectorAll('.see-project-desktop');
desktopButtons.forEach((desktopButton, index) => {
  desktopButton.addEventListener('click', () => {
    // before show, set the modal details
   const topic = document.querySelector('.Pop-up-topic')
   topic.innerHTML = projectDetails[index].nameDesktop
   
   const image = document.querySelector('.pop-up-img')
   image.src = projectDetails[index].featureImagePc

   const text = document.querySelector('.pop-up-text')
   text.innerHTML = projectDetails[index].descriptionPC
    // show
    document.querySelector('.project-details-modal').classList.toggle('show');

  });
});

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () =>
  document.querySelector('.project-details-modal').classList.toggle('show')
);

// Form Validation
const form = document.getElementById('myForm');
const emailInput = document.getElementById('mail');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailValue = emailInput.value;
  if (emailValue.toLowerCase() === emailValue) {
    // Email is already in lowercase, form submission is allowed
    form.submit();
  } else {
    // Email is not in lowercase, display error message
    errorMessage.textContent = 'Email must be in lowercase.';
    errorMessage.style.display = 'block';
  }
});

