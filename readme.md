



# Project Clinics

### Steps to run the application : 

You need to have [node.js](https://nodejs.org/en/),[npm](https://www.npmjs.com/),[Angular ](https://angular.io) and [mongodb database](https://www.mongodb.com/download-center/community)  installed on your computer.
#### Start
Open IDE with project, run commands one by one in terminal (path should be equal to main project folder)

#### Settings 
Make sure mongodb is running on port 27017 (by default), else in app.js line - 6 you can change to port it's running. 
Same to node and Angular. Default ports 3000 and 4200,so make sure it's free.
 

#### Finally
```npm
npm init --y
npm install 
```

```javascript
To create database run code in console
use Honcharuk_2000;

db.users.insertMany([
{
	"login" : "roboCOP",
	"name": "Vitalii",
	"surname": "Honcharuk",
	"email": "vitalii@gmail.com",
	"password": "greedIsGoood",
	"roles":"User"
},
{
	"login" : "ViktorKmin",
	"name": "Viktor",
	"surname": "Kmin",
	"email": "viktorFather@gmail.com",
	"password": "Viktor",
	"roles":"User"
},
{
	"login" : "alex228",
	"name": "Alex",
	"surname": "Boychuk",
	"email": "228alex228@gmail.com",
	"password": "AlexBoychuk",
	"roles":"User"
},
{
	"login" : "alina1996",
	"name": "Alinka",
	"surname": "Mankiv",
	"email": "Mankiv1996@gmail.com",
	"password": "Alino4ka",
	"roles":"User"
},
{
	"login" : "anna1995",
	"name": "Anya",
	"surname": "Slivka",
	"email": "slivka123@gmail.com",
	"password": "animelost",
	"roles":"User"
},
{
	"login" : "TopCoder",
	"name": "Robot",
	"surname": "2000",
	"email": "Robot2000@gmail.com",
	"password": "SuperSecretPassword",
	"roles":"User"
}
]);


db.doctors.insertMany([
	{
		"name" : "mr.Doctor",
		"surname" : "Pupkin",
		"email": "pupkin@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"5",
		"floor":"3",
		"cabinet":"33",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Vitalii",
		"surname" : "Honcharuk",
		"email": "vitalii@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"3",
		"floor":"2",
		"cabinet":"123",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Olena",
		"surname" : "Polishuk",
		"email": "olenka228@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"14",
		"floor":"1",
		"cabinet":"22",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Viktor",
		"surname" : "Father",
		"email": "viktorKmin@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"25",
		"floor":"3",
		"cabinet":"156",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Vitushka",
		"surname" : "Petrushka",
		"email": "Petrusha@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"12",
		"floor":"1",
		"cabinet":"20",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Ivan",
		"surname" : "Winner",
		"email": "Winner@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"22",
		"floor":"4",
		"cabinet":"33",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Inna",
		"surname" : "Meguniv",
		"email": "InnaMeguniv@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"6",
		"floor":"1",
		"cabinet":"2",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Ivanna",
		"surname" : "Koach",
		"email": "Kokoach@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"9",
		"floor":"2",
		"cabinet":"13",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Oleh",
		"surname" : "Bondar",
		"email": "Bondar@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"7",
		"floor":"2",
		"cabinet":"13",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Antoniy",
		"surname" : "Gachka",
		"email": "Gachka12333@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"17",
		"floor":"2",
		"cabinet":"109",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	},
	{
		"name" : "Gordiy",
		"surname" : "Bahirov",
		"email": "Bahirovkakaka@gmail.com",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempora.",
		"experience":"14",
		"floor":"1",
		"cabinet":"6",
		"workingDays": ["Monday","Tuesday","Friday"],
		"roles":"Doctor"
	}
]);


db.clinicsections.insertMany([
	{
		"sectionName" : "Neurosurgery"
	},
	{
		"sectionName" : "Radiology"
	},
	{
		"sectionName" : "Surgery"
	},

]);
db.admins.insert({
	"login" : "admin",
	"password" : "admin",
	"roles":"Admin"
});

```
