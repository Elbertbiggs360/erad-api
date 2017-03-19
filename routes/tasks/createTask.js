var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Task = require('../../models/Task.js');


/* GET /tasks listing */
router.post('/createTask', function(req, res, next){
	var task = new Task();
	//picking post details for the task
	task.taskName	=	req.body.taskName;
	task.category = req.body.category;
	task.description = req.body.description;
	task.created_at = Date.now();
	task.start_date = req.body.start_date;
	task.created_at<task.start_date?task.status=true:task.status=false;
	/*task.priority = req.body.priority;*/
	if(req.body.parent_id)
		task.parent_id=req.body.parent_id;
	task.duration = req.body.duration;

	task.created_by = req.body.created_by;
	task.assigned_to = req.body.assigned_to;
	task.finish_date = task.start_date+task.duration;

	//recording task creation time


	task.save(function(err, post){
		if(err)
			return next(err);
		res.json(post);
	});
	
});


/**
 * TODO: POST route configuration
 */
module.exports = router;