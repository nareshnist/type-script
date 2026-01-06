
// Create a Taks Status type

type TaskFilter = 'all' | 'completed' | 'pending';

// creating the task object type


type Priorities = 'low' | 'high' | 'medium'

type Task = {
    id:number;
    title:string;
    completed:boolean;
    priority:Priorities;
    assignee?:string;
}


/**
    3️⃣ Tasks Data
    Create at least 4 tasks:
    At least 1 completed
    At least 1 without assignee
    Mix of priorities
 */


const tasks:Array<Task> = [
    {
        id:1,
        title:"JS",
        completed:false,
        priority:"high",
        assignee:"Naresh"
    },
      {
        id:2,
        title:"React",
        completed:true,
        priority:"low",
        assignee:"Naresh"
    },
      {
        id:3,
        title:"AI",
        completed:false,
        priority:"medium",
    },
      {
        id:4,
        title:"Nuxt",
        completed:false,
        priority:"low",
        assignee:"Naresh"
    }
]

/**
    4️⃣ Functions to Implement
    ✅ getTasksByFilter
 */

    function getTasksByFilter(filter:TaskFilter) :Task[] {

        if(filter === 'all') return tasks;
        if(filter==='completed') return tasks.filter(task => task.completed);
        else return tasks.filter(task => !task.completed);
    }

    getTasksByFilter('all');

    function getHighPriorityTasks(priority:Priorities): Task[] {
      return tasks.filter(task => task.priority === priority);
    }

    getHighPriorityTasks('high');

    function toggleTaskCompletion(id:number) : string {
        let task = tasks.find(task => task.id === id);
        if(!task) return 'Task not found.';
        task.completed = !task.completed;
        return 'Task Updated '
    }

    toggleTaskCompletion(2)