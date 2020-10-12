
function bug(bug){
    if(bug != undefined){
        this.id_ = bug._id;
        this.name = bug.name;
        this.details = bug.details;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assignes = bug.assigned;
        this.creator = bug.creator;
        this.time = bug.time;
    }
}

export default bug;
