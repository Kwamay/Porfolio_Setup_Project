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

// reading from localstorage
const object = localStorage.getItem('formDetails');
const formName = document.getElementById('name');
formName.value = JSON.parse(object).name;
const email = document.getElementById('mail');
email.value = JSON.parse(object).email;
const message = document.getElementById('message');
message.value = JSON.parse(object).message;

const projectDetails = [
  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/> 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
    featureImage: 'images/dektop-images/nature.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    name: 'Tonic',
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/>  
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    featureImage: 'images/dektop-images/art.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    name: 'Multi-Post-Stories',
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/> 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `,
    featureImage: 'images/dektop-images/display-pic.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    name: 'Facebook 360',
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/> 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `,
    featureImage: 'images/dektop-images/avail.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    name: 'Uber Navigation',
  },
];
// here this is a clickProjectListener for your desktop version.
const clickProjectListener = (index) => {
  // before show, set the modal details
  const topic = document.querySelector('.pop-up-topic'); //
  topic.innerHTML = projectDetails[index].name;

  const image = document.querySelector('.pop-up-img');
  image.src = projectDetails[index].featureImage;
  const text = document.querySelector('.pop-up-text');
  text.innerHTML = projectDetails[index].description;
  // see live
  const seeLive = document.querySelector('.pop-button');
  seeLive.addEventListener('click', () => window.open(projectDetails[index].linkToLiveSection, '_blank'));
  const seeSource = document.querySelector('.pop-button-source');
  seeSource.addEventListener('click', () => window.open(projectDetails[index].linkToSource, '_blank'));
  // technologies
  const techParent = document.querySelector('.pop-tech');
  techParent.innerHTML = '';
  projectDetails[index].technologies.forEach((td) => {
    const list = document.createElement('li');
    list.textContent = td;
    list.classList = 'pop-up-tech-type';
    techParent.appendChild(list);
  });
  // open modal
  document.querySelector('.project-details-modal').classList.toggle('show');
};

const desktopButtons = document.querySelectorAll('.see-project-desktop');
desktopButtons.forEach((desktopButton, index) => {
  desktopButton.addEventListener('click', () => clickProjectListener(index));
});

// close modal
const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => document.querySelector('.project-details-modal').classList.toggle('show'));

// Form Validation
const form = document.getElementById('myForm');
const emailInput = document.getElementById('mail');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const emailValue = emailInput.value;
  if (emailValue.toLowerCase() === emailValue) {
    // Email is already in lowercase, form submission is allowed
    const object = {
      name: document.getElementById('name').value,
      email: emailValue,
      message: document.getElementById('message').value,
    };
    localStorage.setItem('formDetails', JSON.stringify(object));
    form.submit();
  } else {
    // Email is not in lowercase, display error message
    errorMessage.textContent = 'Email must be in lowercase.';
    errorMessage.style.display = 'block';
  }
});
