import json
total_time_taken=0

def calculate_timescore(total_time):
      if total_time < 180 and total_time >= 0:
          score_time = 1
      elif total_time >= 180 and total_time < 360:
          score_time = 0.6
      elif total_time >= 360 and total_time < 540:
          score_time = 0.2
      else:
          score_time = 0

      return score_time

def metrics_Calculator(game_string):

      values_dictionary = json.loads(game_string)

      score_heart = values_dictionary["collected_hearts"]/values_dictionary["total_hearts"]
      # score_obstacles = 1 - values_dictionary["crashed_obstacles"]/values_dictionary["total_obstacles"]
      score_time = calculate_timescore(values_dictionary["total_time"])
      final_score = (score_heart+score_time)/2
      return final_score


x = '{"collected_hearts":4,"total_hearts":5, "crashed_obstacles": 6, "total_obstacles":10, "total_time": 200}'
print(metrics_Calculator(x)*100)
