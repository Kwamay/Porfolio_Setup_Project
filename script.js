const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  document.querySelector(".desktop").classList.toggle("show");
});

const navButton = document.querySelector("#nav-button");
navButton.addEventListener("click", () => {
  document.querySelector(".desktop").classList.toggle("show");
});

const linkButtons = document.querySelectorAll(".links");
linkButtons.forEach((linkButton) => {
  linkButton.addEventListener("click", () => {
    document.querySelector(".desktop").classList.toggle("show");
  });
});

const projectDetails = [
  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releorem 
    Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 
    1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: "images/dektop-images/nature.png",
    technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    name: "Tonic",
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releorem 
    Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 
    1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: "images/dektop-images/art.png",
    technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    name: "Multi-Post-Stories",
  },

  {
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releorem 
    Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 
    1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: "images/dektop-images/display-pic.png", //this is your feature image. it's for desktop
    technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    name: "Facebook 360",
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releorem 
    Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 
    1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: "images/dektop-images/avail.png",
    //featImage: "images/mobile-images/avail.png"
    technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    name: "Uber Navigation",
  },
];
//here this is a clickProjectListener for your desktop version.
const clickProjectListener = (index) => {
  // before show, set the modal details
  const topic = document.querySelector(".Pop-up-topic"); //
  topic.innerHTML = projectDetails[index].name; 

  const image = document.querySelector(".pop-up-img");
  //here you see the image is collected from projectDetails[index].featureImage. let's go to your featureImage
  //as it is only for desktop it will mess your mobile pop up.
  //my suggestion is add anoher feature image in your array of the objects. and put the value to your mobile image source link.
  //After doing this for every elementst. you can call another clickProjectlistener function for your mobile.
  image.src = projectDetails[index].featureImage; 

  const text = document.querySelector(".pop-up-text");
  text.innerHTML = projectDetails[index].description;

  // see live
  const seeLive = document.querySelector(".see-live");
  seeLive.addEventListener("click", () =>
    window.open(projectDetails[index].linkToLiveSection, "_blank")
  );

  const seeSource = document.querySelector(".see-source");
  seeSource.addEventListener("click", () =>
    window.open(projectDetails[index].linkToSource, "_blank")
  );

  // technologies
  const techParent = document.querySelector(".pop-tech");
  techParent.innerHTML = "";
  projectDetails[index].technologies.map((td) => {
    const list = document.createElement("li");
    list.textContent = td;
    list.classList = "pop-up-tech-type";
    techParent.appendChild(list);
  });
  // open modal
  document.querySelector(".project-details-modal").classList.toggle("show");
};

const desktopButtons = document.querySelectorAll(".see-project-desktop");
desktopButtons.forEach((desktopButton, index) => {
  desktopButton.addEventListener("click", () => clickProjectListener(index));
});

// const mobileSeeProjectButtons = document.querySelectorAll(
//   ".see-project-mobile"
// );
// mobileSeeProjectButtons.forEach((mobileSeeProjectButton, index) => {
//   mobileSeeProjectButton.addEventListener("click", () =>
//     clickProjectListener(index)
//   );
// });

// close modal
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", () =>
  document.querySelector(".project-details-modal").classList.toggle("show")
);

// Form Validation
const form = document.getElementById("myForm");
const emailInput = document.getElementById("mail");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const emailValue = emailInput.value;
  if (emailValue.toLowerCase() === emailValue) {
    // Email is already in lowercase, form submission is allowed
    form.submit();
  } else {
    // Email is not in lowercase, display error message
    errorMessage.textContent = "Email must be in lowercase.";
    errorMessage.style.display = "block";
  }
});
