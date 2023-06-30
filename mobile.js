const mobileDetails = [
  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    featureImageMobile: 'images/2nd-phase/pic_on_screen.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Tonic',
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    featureImageMobile: 'images/2nd-phase/Avail.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Mult-Post-Stories',
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    featureImageMobile: 'images/2nd-phase/gym.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Tonic',
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    featureImageMobile: 'images/2nd-phase/art.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    linkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Multi-Post-Stories',
  },
];

const clickListener = (index) => {
  // before show, set the modal details
  const mobileTopic = document.querySelector('.Pop-mobile-topic');
  mobileTopic.innerHTML = mobileDetails[index].mobileName;

  const imageMobile = document.querySelector('#mobile-popup-img');
  imageMobile.src = mobileDetails[index].featureImageMobile;

  const text = document.querySelector('.pop-mobile-text');
  text.innerHTML = mobileDetails[index].mobileDescription;

  // see live
  const seeLive = document.querySelector('.see-live');
  seeLive.addEventListener('click', () => window.open(mobileDetails[index].linkToLiveSection, '_blank'));

  const seeSource = document.querySelector('.see-source');
  seeSource.addEventListener('click', () => window.open(mobileDetails[index].linkToSource, '_blank'));

  // technologies
  const techParent = document.querySelector('.pop-mobile-tech');
  techParent.innerHTML = '';
  mobileDetails[index].mobileTechnologies.forEach((td) => {
    const list = document.createElement('li');
    list.textContent = td;
    list.classList = 'pop-up-tech-type';
    techParent.appendChild(list);
  });
  // open modal
  document.querySelector('.mobile-project-modal').classList.toggle('show');
};

const mobileSeeProjectButtons = document.querySelectorAll(
  '.see-project-mobile',
);
mobileSeeProjectButtons.forEach((mobileSeeProjectButton, index) => {
  mobileSeeProjectButton.addEventListener('click', () => clickListener(index));
});

// close modal
const closeMobileModal = document.querySelector('.close-mobile-modal');
closeMobileModal.addEventListener('click', () => document.querySelector('.mobile-project-modal').classList.toggle('show'));
