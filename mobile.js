const mobileDetails = [
  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: "images/2nd-phase/pic_on_screen.png",
    mobileTechnologies: ["HTML", "CSS", "JavaScript"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    mobileName: "Tonic",
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: "images/2nd-phase/Avail.png",
    mobileTechnologies: ["HTML", "CSS", "JavaScript"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    mobileName: "Mult-Post-Stories",
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: "images/2nd-phase/gym.png",
    mobileTechnologies: ["HTML", "CSS", "JavaScript"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    mobileName: "Tonic",
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: "images/2nd-phase/art.png",
    mobileTechnologies: ["HTML", "CSS", "JavaScript"],
    linkToLiveSection: "https://kwamay.github.io/Porfolio_Setup_Project",
    linkToSource: "https://github.com/Kwamay/Porfolio_Setup_Project",
    mobileName: "Multi-Post-Stories",
  },
];

const clickProjectListener = (index) => {
    // before show, set the modal details
    const mobileTopic = document.querySelector(".Pop-mobile-topic"); //
    mobileTopicopic.innerHTML = mobileDetails[index].mobileNamename; 
  
    const image = document.querySelector(".pop-mobile-img");
     image.src = mobileDetails[index].featureImage; 
  
    const text = document.querySelector(".pop-mobile-text");
    text.innerHTML = mobileDetails[index].description;
  
    // see live
    const seeLive = document.querySelector(".see-live");
    seeLive.addEventListener("click", () =>
      window.open(mobileDetails[index].linkToLiveSection, "_blank")
    );
  
    const seeSource = document.querySelector(".see-source");
    seeSource.addEventListener("click", () =>
      window.open(mobileDetails[index].linkToSource, "_blank")
    );
  
    // technologies
    const techParent = document.querySelector(".pop-tech");
    techParent.innerHTML = "";
    mobileDetails[index].technologies.map((td) => {
      const list = document.createElement("li");
      list.textContent = td;
      list.classList = "pop-up-tech-type";
      techParent.appendChild(list);
    });
    // open modal
    document.querySelector(".project-details-modal").classList.toggle("show");
  };
  


const mobileSeeProjectButtons = document.querySelectorAll(
    ".see-project-mobile"
  );
  mobileSeeProjectButtons.forEach((mobileSeeProjectButton, index) => {
    mobileSeeProjectButton.addEventListener("click", () =>
      clickProjectListener(index)
    );
  });
  
  // close modal
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", () =>
    document.querySelector(".mobile-project-modal").classList.toggle("show")
  );