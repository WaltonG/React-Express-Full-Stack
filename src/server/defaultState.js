export const defaultState = {
  users: [{
    id: "user1",
    name: "walton"
  }],
  groups: [{
    name: "To Do",
    id: "G1",
    owner: "U1"
  }],
  tasks: [{
    name: "Do Tests",
    id: "T1",
    group: "G1",
    owner: "U1",
    isComplete: "false"
  }],
  comments: [{
    owner: "U1",
    id: "C1",
    task: "T1",
    content: "Good Job"
  }]
}
