// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  


  // the ID of the learner for which this data has been collected======
  
  function getLearnarId(learnarArray){
    let tempArray = learnarArray.map((obj)=>obj["learner_id"])
    let idArray = [];
    tempArray.forEach((num)=> {
        if(idArray.indexOf(num) == -1){
            idArray.push(num);
        }
    });
    return idArray;
  }
  // console.log(getLearnarId);

  // Function to calculate weighted average and percentages
function avarageLearnerData(submissions, assignments) {
  const learnerData = {};

  submissions.forEach(submission => {
      const assignment = assignments.find(a => a.id === submission.assignment_id); 
      const learnerId = submission.learner_id;

      if (!learnerData[learnerId]) {
          learnerData[learnerId] = {
              id: learnerId,
              totalWeightedScore: 0,
              totalWeight: 0,
              assignmentScores: {}
          };
      }

        if (assignment && new Date(assignment.due_at) == new Date()) { 

            const weightedScore = submission.submission.score * (assignment.points_possible / 100) * (assignment.group_weight / 100); // Calculate weighted score
            console.log(weightedScore);
            
            learnerData[learnerId].totalWeightedScore += weightedScore; // Add to total weighted score
            learnerData[learnerId].totalWeight += assignment.group_weight; // Add to total weight
            learnerData[learnerId].assignmentScores[assignment.id] = submission.submission.score / assignment.points_possible; // Calculate assignment percentage
        }
    });
    
    // Calculate weighted average for each learner
    for (const learnerId in learnerData) {
        learnerData[learnerId].avg = learnerData[learnerId].totalWeightedScore / learnerData[learnerId].totalWeight;
    }

    return Object.values(learnerData);
}

// Calculate learner data
const learnerData = avarageLearnerData(LearnerSubmissions, AssignmentGroup.assignments);

// Output results
console.log(learnerData);
   
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  

  //===============================================================

  function checkDuedate(assignmentData){

  let date1 = new Date();
let date2 = new Date("6/01/2022");
  }
// console.log(date1);
// console.log(date2);



// the ID of the learner for which this data has been collected
//console.log(learner_id);