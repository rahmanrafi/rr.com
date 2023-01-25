// const axios = require('axios');
// const resumeEndpoint = 'https://gitconnected.com/v1/portfolio/rahmanrafi'

const resumeDefault = '{"basics":{"name":"Rafi Rahman","label":"Software Engineer","image":"https://avatars2.githubusercontent.com/u/7981565?v=4","email":"","phone":"","url":null,"summary":"Dedicated team oriented engineer with established industry experience in wide ranging software and operational stacks. Passionate about exploring the complex intersections of software, hardware, ensuing networks, and the people that use them.","profiles":[{"network":"gitconnected","username":"rahmanrafi","url":"https://gitconnected.com/rahmanrafi"},{"network":"GitHub","username":"rahmanrafi","url":"https://github.com/rahmanrafi"},{"network":"LinkedIn","url":"https://linkedin.com/in/rahmanrafi","username":"rahmanrafi"}],"headline":"","blog":null,"yearsOfExperience":4,"username":"rahmanrafi","locationAsString":"Toronto","region":"Toronto","karma":15,"id":"acf6707d-7459-4bf7-bd65-282e8f258cce","followers":2,"following":3,"picture":"https://avatars2.githubusercontent.com/u/7981565?v=4","website":null},"skills":[{"name":"Python","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"JavaScript","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"Go","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"Java","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"Node.js","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"C","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"Perl","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"Docker","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"bash/zsh","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"jQuery","level":"","keywords":["framework"],"rating":0,"yearsOfExperience":null},{"name":"HTML/CSS","level":"","keywords":["languages"],"rating":0,"yearsOfExperience":null},{"name":"SQL","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"InfluxDB","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"Prometheus","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"Grafana","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"Jenkins","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"RHEL","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null},{"name":"ArcGIS","level":"","keywords":["tools"],"rating":0,"yearsOfExperience":null}],"projects":[],"work":[{"name":"Qlik","location":"Toronto","description":"","position":"Embedded Site Reliability Engineer","url":"https://qlik.com","startDate":"2022-10-01","endDate":"","summary":"","highlights":["Morbi quis velit sagittis, scelerisque libero et, pharetra odio.","Vivamus elementum magna et odio laoreet ultricies.","In eu nulla id nisi vestibulum tempus."],"isCurrentRole":true,"start":{"year":2022,"month":10},"end":{},"company":"Qlik","website":"https://qlik.com"},{"name":"Qlik","location":"Toronto","description":"","position":"DevOps Engineer","url":"https://qlik.com","startDate":"2022-01-01","endDate":"2022-10-01","summary":"Qlik Cloud catalog services development","highlights":["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Vestibulum lobortis tortor et mi accumsan, vel elementum tortor blandit."],"isCurrentRole":false,"start":{"year":2022,"month":1},"end":{"year":2022,"month":10},"company":"Qlik","website":"https://qlik.com"},{"name":"Alphawave","location":"Toronto","description":"","position":"DevOps Engineer","url":"https://awaveip.com","startDate":"2020-08-01","endDate":"2021-12-01","summary":"","highlights":["Development and deployment of 10+ bespoke programs and tools (Python/Perl) with for use within internal silicon design and external delivery flows","Ownership of key administrative responsibilities for configuration & provisioning of various essential infrastructure and components during period of significant company growth and IPO"],"isCurrentRole":false,"start":{"year":2020,"month":8},"end":{"year":2021,"month":12},"company":"Alphawave","website":"https://awaveip.com"},{"name":"Rogers Communications","location":"Toronto","description":"","position":"Software Developer","url":"https://rogers.com","startDate":"2018-06-01","endDate":"2018-08-01","summary":"Student Internship","highlights":["Implemented and maintained supplementary frontend frameworks for internal staging CI/CD workflows","Developed and deployed Node.js MySQL interface tracking CI/CD results w/ Angular frontend for managing, visualizing, and querying database results"],"isCurrentRole":false,"start":{"year":2018,"month":6},"end":{"year":2018,"month":8},"company":"Rogers Communications","website":"https://rogers.com"}],"publications":[],"education":[{"institution":"University of Toronto, St. George","url":"https://utoronto.ca","area":"Computer Science, Physical & Environmental Geography, History & Philosophy of Science & Technology","studyType":"Honours Bachelor of Science with Distinction","startDate":"2014-09-01","endDate":"2019-08-01","score":"3.4","courses":[],"description":"","activities":"","start":{"year":2014,"month":9},"end":{"year":2019,"month":8},"website":"https://utoronto.ca","gpa":"3.4"}],"volunteer":[],"awards":[{"title":"Academic Distinction","date":"2019-11-01","awarder":"University of Toronto","summary":"","fullDate":{"year":2019,"month":11}},{"title":"Deans List Scholar","date":"2016-09-01","awarder":"University of Toronto","summary":"","fullDate":{"year":2016,"month":9}}],"languages":[],"interests":[],"references":[],"certificates":[],"meta":{"note":"This is a combined version of the old and new JSON Resume API to provide maximum compatibility. You will notice duplicated values in different fields.","canonical":"https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json","version":"v1.0.0","lastModified":"2020-12-29T15:53:00"}}'

export async function getResume() {
    // const response = await axios.get(resumeEndpoint)
    // const resumeData = response.data
    const resumeData = JSON.parse(resumeDefault)
    console.log(resumeData)
    await new Promise(r => setTimeout(r, 1500))
    return resumeData
}