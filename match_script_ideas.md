make a copy of the matches that belong to a league
shift the first two out every time to run
save that somehow?

Script:

Get me the first two matches from league.matches
(these are the ones for this game day)

store these in an array then we can do each on them
(with the contents of the loop being the match script)

for each match, get me the relevant teams using home_team_id
and away_team_id and store them in variables

get the tactics models that belong to those teams

do some maths etc. based on the tactics and the ratings and form of the team etc.

update the match object with relevant stats

make one team a winner
  increase their points by 3
  add to their bank balance
  add the match to their array of matches

make one the the loser
  leave points alone
  add to bank balance
  add match to their array of matches

in the event of a draw
  1 pt to each team
  money to each team
  match in both of their arrays

run again for next match on gameday

stop
