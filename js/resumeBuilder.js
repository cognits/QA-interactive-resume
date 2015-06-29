var bio = {
    "name": "Abel Monterroso",
    "role": "Ninja",
    "contacts": {
        "mobile": "1730",
        "email": "marvinabelmon@gmail.com",
        "github": "github.com/AbelMon",
        "twitter": "@Yolo",
        "location": "Guatemala"
    },
    "welcomeMessage": "Welcome to my page! You will find important information about me. You do not extortion!",
    "skills": ["Sleep 14 hours straight.", "Touching bugs without feeling disgust.", "Rasengan", "Perfect chakra control.", "Yin-yang element", "Katon", "Fūton", "Raiton"],
    "biopic": "http://www.topdesignmag.com/wp-content/uploads/2014/03/cute-smiling-animals-251.jpg",
    display: function() {
        // body...
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", this.name);
        $("#header").prepend(formattedName);

        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(formattedBioPic);

        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
  };

    }
};

var education = {
    "schools": [
        {
        "name": "Ninja Academy",
        "location": "Japan",
        "degree": "Jōnin",
        "majors": ["Kakashi Hatake", "Captain Yamato", "Hagoromo Ōtsutsuki"],
        "dates": 2014,
        "url": "http://es.naruto.wikia.com/wiki/Naruto_Wiki"
        }
    ],
    "onlineCourses": [
        {
        "title": "ANBU",
        "school": "Ninja Academy",
        "date": 2014,
        "url": "http://www.topdesignmag.com/wp-content/uploads/2014/03/cute-smiling-animals-251.jpg"
        }
    ],
    display: function() {
        for (school in this.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
            $(".education-entry").append(formattedSchoolName);

            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            $(".education-entry").append(formattedDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            $(".education-entry").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            $(".education-entry").append(formattedSchoolLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
            $(".education-entry").append(formattedMajor);
        };

        $(".education-entry").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[0].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[0].school);
        $(".education-entry").append(formattedTitle + formattedSchool);

        var formattedDate = HTMLonlineDates.replace("%data%", this.onlineCourses[0].date);
        $(".education-entry").append(formattedDate);

        var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[0].url);
        $(".education-entry").append(formattedURL);
    }
};

var work = {
    "jobs": [
        {
            "employer": "Hagoromo Ōtsutsuki",
            "title": "Ambu Hunter",
            "location": "Japan",
            "dates": "05/05/2015",
            "description": "Find information about Kaguya."
        }
    ],
    display: function() {
        for (job in this.jobs) {
            // create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            // concat employer and title
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            $(".work-entry").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
            $(".work-entry").append(formattedDescription);
      };
    }
};

var projects = {
    "projects": [
        {
            "title": "Fourth ninja war",
            "dates": "06/06/2015",
            "description": "Killing members of Akatsuki and destroy Kaguya.",
            "image": ["http://images6.fanpop.com/image/photos/37300000/-Kaguya-Attack-s-naruto-shippuuden-37396410-1330-601.png"],
        }
    ],
    display: function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            $(".project-entry").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            $(".project-entry").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $(".project-entry").append(formattedDescription);

            var formattedImg = HTMLprojectImage.replace("%data%", this.projects[project].image);
            $(".project-entry").append(formattedImg);

            console.log(formattedImg);
        };
    }
};

//Calling the functions to display information in HTML.
bio.display()
education.display()
work.display()
projects.display()

$("#mapDiv").append(googleMap);
