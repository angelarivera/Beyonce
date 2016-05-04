module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/drink/i, function(response) {
		response.send("I've been drinking, I've been drinking")
	})

	robot.hear(/completed the (.+)/i, function(response) {
		var completed = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply( completed + ', major key')
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who is they\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply( user.real_name +' doesn\'t want you to win')
	})

	robot.hear(/major key/i, function(response) {
		keyWisdom = ['tell \'em', 'boy bye', 'http://rip3pac.neocities.org/CW2bcETUsAAq_vW.jpg', 'http://static.wixstatic.com/media/a35832_2f122dc71d454324b9d779a828c507ef.png/v1/fill/w_554,h_473,al_c,lg_1/a35832_2f122dc71d454324b9d779a828c507ef.png']

		// res.send res.random keyWisdom
		response.send(response.random(keyWisdom));
	}) 
	

	robot.hear(/nicki/i, function(response) {
		
		if (response === nicki) {
  		response.reply('Queen of rap')
		} else {
    	reponse.reply('Queen B')
		}

	})

}