let rob = {
  name: "Robert Burdett",
  occupation: "Registered Nurse",
  skills: ["Nursing", "Music Production", "Snowboarding"]
  }
  
function thinkfulBootcamp(student) {
  student = {
    ...student,
    occupation: "Software Developer",
    skills: [...student.skills, "Coding"]
  }
  return student
}

thinkfulBootcamp(rob)