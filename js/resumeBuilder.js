// JSON Biography
var bio = {
    "name": "Marcos Rodriguez",
    "role": "Frontend Development",
    "contacts": {
        "mobile": "5533-1339",
        "email": "marcos.roag@gmail.com",
        "twitter": "@MarcoOZ",
        "gitHub": "MRodriguezz",
        "location": "Guatemala, Guatemala"
    },
    "pictureURL": "images/bender-1.png",
    "welcomeMessage": "Welcome to JavaScript project!",
    "skills": [
        "Frontend Web Development"
    ]
};
// JSON Education
var education = {
  "schools": [
    {
      "name": "Liceo Siglo XXI",
      "location": "Guatemala, Guatemala",
      "dates": "2014",
      "degree": "Bachiller en Computación"
    }
  ]
};
// JSON Work
var work = {
  "jobs": [
    {
      "employer": "Cognits",
      "title": "Front End Developer",
      "location": "Zona 10, Guatemala",
      "dates": "2010 - Current",
      "description": "I have the knowledge and experience in web development, front-end, and the learned languages are Html, Css, JavaScript, AnguarJS, Bootstrap, etc."
    },
    {
      "employer": "Henry County Board of Commissioners",
      "title": "Systems Administrator II",
      "location": "Zona 9, Guatemala",
      "dates": "2001 - 2010",
      "description": "We learned how to develop Web pages's, also to how to develop us as people, taught us to fight for our dreams and to fulfill our goals and that we have to be able to learn, sabrena tools to be able to play in the field of programming, always working as a team and helping each other and taught us to learn from our mistakes and not to give up."
    }
  ]
};
// JSON Projects
var projects = {
  "projects": [
    {
      "title": "Udacity",
      "dates": "2015",
      "description": "During Udacity perform variety of frontend and backend projects, which are: Build a Portfolio Site, Interactive Resume, Getting Started, Make a Web Page, Hello World, Program With Objects, Automate Your Website Page and Movie Trailer.",
    },
    {
      "title": "Projects Cognits",
      "dates": "2014, 2015",
      "description": "In cognits training we have done several projects which are as follows Build a Portfolio, Battleship, Cash Register, aletoreatorios numbers, countries and capitals, Browser, etc.",
    }
  ]
};
// Bio Start
function displayBio() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  bioDetails($("#topContacts"));
  var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").append(formattedPic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart); 
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
  }
}
displayBio(); //Bio Finish

// Education Start
function displayEducation() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
  }
}
displayEducation();//Education Finish

// Work Start
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
  }
}
displayWork();//Work Finish

// Projects Start
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  }
}
projects.display();//Projects Finish

//google map
$("#mapDiv").append(googleMap);

// Start Footer
function bioDetails(element) {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  element.append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  element.append(formattedEmail);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
  element.append(formattedGitHub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  element.append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  element.append(formattedLocation);
}
bioDetails($("#footerContacts"));//Footer Finish