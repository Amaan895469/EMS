const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    firstname: "employee1",
    password: "123",
    tasks: [
      {
        task_title: "Task 1",
        task_description: "Complete the project design.",
        task_date: "2024-11-23",
        task_category: "Design",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        task_title: "Task 2",
        task_description: "Fix bugs in the codebase.",
        task_date: "2024-11-21",
        task_category: "Development",
        active: false,
        new_task: true,
        completed: false,
        failed: true,
      },
    ],
    task_counters: {
      active: 1,
      failed: 1,
      completed: 0,
      new_task: 2,
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    firstname: "employee2",
    password: "123",
    tasks: [
      {
        task_title: "Task 1",
        task_description: "Prepare a test plan.",
        task_date: "2024-11-26",
        task_category: "Testing",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        task_title: "Task 2",
        task_description: "Optimize deployment scripts.",
        task_date: "2024-11-30",
        task_category: "Deployment",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    task_counters: {
      active: 1,
      failed: 0,
      completed: 1,
      new_task: 1,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    firstname: "employee3",
    password: "123",
    tasks: [
      {
        task_title: "Task 1",
        task_description: "Conduct a design review.",
        task_date: "2024-12-01",
        task_category: "Design",
        active: true,
        new_task: false,
        completed: false,
        failed: true,
      },
      {
        task_title: "Task 2",
        task_description: "Refactor legacy code.",
        task_date: "2024-11-28",
        task_category: "Development",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    task_counters: {
      active: 1,
      failed: 1,
      completed: 1,
      new_task: 0,
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    firstname: "employee4",
    password: "123",
    tasks: [
      {
        task_title: "Task 1",
        task_description: "Set up CI/CD pipelines.",
        task_date: "2024-12-02",
        task_category: "Deployment",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        task_title: "Task 2",
        task_description: "Perform regression testing.",
        task_date: "2024-11-29",
        task_category: "Testing",
        active: false,
        new_task: true,
        completed: false,
        failed: true,
      },
    ],
    task_counters: {
      active: 1,
      failed: 1,
      completed: 1,
      new_task: 1,
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    firstname: "employee5",
    password: "123",
    tasks: [
      {
        task_title: "Task 1",
        task_description: "Document APIs for the client.",
        task_date: "2024-11-27",
        task_category: "Design",
        active: true,
        new_task: true,
        completed: true,
        failed: false,
      },
      {
        task_title: "Task 2",
        task_description: "Implement new features.",
        task_date: "2024-11-25",
        task_category: "Development",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
    task_counters: {
      active: 2,
      failed: 0,
      completed: 1,
      new_task: 2,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setlocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};


export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
