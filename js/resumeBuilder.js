// JSON Start
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
    "pictureURL": "images/super_mario.jpg",
    "welcomeMessage": "Welcome to JavaScript project!",
    "skills": [
        "Frontend Web Development"
    ]
};

var education = {
  "schools": [
    {
      "name": "Liceo Siglo XXI",
      "location": "Guatemala, Guatemala",
      "dates": "2000",
      "degree": "Bachiller en Computación"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Cognits",
      "title": "Front End Developer",
      "location": "Zona 10, Guatemala",
      "dates": "2010 - Current",
      "description": "Currently working with our Java team developing the front end of our Transportation Management software."
    },
    {
      "employer": "Henry County Board of Commissioners",
      "title": "Systems Administrator II",
      "location": "Zona 9, Guatemala",
      "dates": "2001 - 2010",
      "description": "Managed the daily technical operations of the Upper Courts, Lower Courts and District Attorneys Office."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Employee Directory",
      "dates": "2015",
      "description": "Directory of current employees",
      "images": [ "images/contacts1.jpg", "images/contacts2.jpg" ]
    },
    {
      "title": "Mobile Directory",
      "dates": "2013",
      "description": "Mobile directory for field agents. Project was built using jQuery Mobile framework.",
      "images": [ "images/jqm1.jpg", "images/jqm2.jpg" ]
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
displayBio();

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
displayEducation();

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
displayWork();

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
projects.display();

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

bioDetails($("#footerContacts"));

