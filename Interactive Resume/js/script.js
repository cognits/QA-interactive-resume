//Biography
var bio = {
    "name": "Kevin Herrera",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "+55-01-29-45",
        "email": "kherrera16@gmail.com",
        "github": "KAR2014",
        "twitter": "@Kevin_Herrera16",
        "location": "Guatemala, Guatemala"
    },
    "picture": "http://static.tumblr.com/u7rwwlh/nyNm6v1n7/tonyavatar.png",
    "welcome-message": "Welcome to my resume",
    "skills": ["HTML5", "CSS3" , "JavaScript", "jQuery", "Bootstrap Framework"]
};

//Schools
var education = {
    "schools": [
        {
            "name": "Instituto de Bachillerato en Computación",
            "city": "Zona 13, Guatemala",
            "degree": "B.I.P.C.",
            "dates": "2011-2013",
            "url": "some website"
        }
    ],
    "onlineCourses": [
        {
            "title": "The complete web developer course",
            "school": "CodeCademy",
            "date": "2014 ",
            "url": "http://www.codecademy.com/?locale_code=es"
        },
        {
            "title": "Front-end Nanodegree",
            "school": "Udacity",
            "date": "2015 ",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

//Works
var work = {
    "jobs": [
        {
            "employer": "Cognits",
            "title": "Front-end Developer",
            "location": "Zona 10, Guatemala",
            "dates": "2015-",
            "description": "Training Code School / Job"
        }
    ]
};


//Proyects
var projects = {
    "projects": [
        {
            "title": "Front-end Portfolio",
            "dates": "2014",
            "description": "My Official Portfolio",
            "url":"https://github.com/KAR2014/frontend-portfolio"
        },
        {
            "title": "Front-end Blog",
            "dates": "2014",
            "description": "In here work with Json.js",
            "url":"https://github.com/KAR2014/frontend-blog"
        },
        {
            "title": "Front-end Weather Forecast",
            "dates": "2014",
            "description": "A simple weather forecast web app.",
            "url":"https://github.com/KAR2014/frontend-weather-forecast"
        },
        {
            "title": "Front-end Music",
            "dates" :"2015",
            "description": "A postalcode finder web app where you insert an address<br> and get the postalcode for that address",
            "images": ["images/post.png"],
            "url":"http://217.199.187.195/iamlearning8.com/apis/postcode.php"
        },
        {
            "title": "Pitch Perfect iOS App",
            "dates": "2015",
            "description": "A simple iOS App with Swift",
            "url":"https://github.com/KAR2014/ios-examples"
        }
    ]
};

/* Functions and Appends */
//Biography
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Kevin Herrera");
    var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Developer");
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["welcome-message"]);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedBioLocation);
    $("#header").append(formattedPicture);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}
bio.display();


//Work
work.display = function(){
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer+formattedTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}
work.display();

//Proyects
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectTitleURL = HTMLprojectTitle.replace("%url%", projects.projects[project].url);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
    }
}
projects.display();


//Education
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedSchoolLocation);
    }

    $("#online").append(HTMLOnlineStart);
    for (var course in education.onlineCourses) {
        var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".online-entry").append(formattedCourseName);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".online-entry").append(formattedCourseSchool);
        var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".online-entry").append(formattedCourseDates);
        var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".online-entry").append(formattedCourseURL);
    }
}
education.display();


//GoogleMap
$("#mapDiv").append(googleMap);
