
const ProjectsAPI = {
	projects : [
		{ number: 1, name: "Oak-Minatur", vertical: "interactive" },
    { number: 2, name: "Schindler", vertical: "interactive" },
    { number: 3, name: "Cisco", vertical: "live-action" },
    { number: 4, name: "GE-Stuff", vertical: "motion-graphics" },
    { number: 5, name: "Indian-Crickett", vertical: "video" },
    { number: 6, name: "Golden-State-Warriors", vertical: "motion-graphics" }

	],
	all: function() { return this.projects}, 
	get: function(id) {
		const isProject = p => p.number === id;
		return this.projects.find(isProject)
	}
}

export default ProjectsAPI