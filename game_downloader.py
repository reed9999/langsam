"""
[Saint] Petersburg is one of the simplest games that I play regularly on Yucata.de, so we start
there. We already have code in the `slowgames` repo to rip the per-game webpages, which contain
history in JavaScript

We need nomenclature to distingush between a "game" (an instance with an ID where I won or lost
versus one or more specific opponents) and a game in the sense that Yucata added a new game or
something is my favorite game, etc.
"""
import os
import requests

class GameDownloader(object):
    _downloads_games_root = os.path.join('..', 'downloads', 'games') 
    
    def __init__(self, game_type='Petersburg'):
        self._game_type = game_type

    def save_all_games(self):
        """For the game type in question, save the HTML from all game instances to the standard location.
        
        There are multiple strategies we could use:
        1. Try all game numbers and see what game they resolve to. The lowest ID where 
        this works is something between 6_250_000 and 6_500_000
        2. Walk down the list of top players on a page like https://www.yucata.de/en/Ranking/Game/Petersburg . 
        I have tried this, but these dynamic pages generally don't work well with my way of making requests.
        It's worth trying.
        
        Maybe more?
        """
        
        # Can we get list of top players to work?
        url = f"https://www.yucata.de/en/Ranking/Game/{self._game_type}"
        response = requests.get(url)
        print(response.text)
        with open('temp_response.html', 'w') as thefile:
            thefile.write(response.text)
        
    def _html_for_id(self, game_id):
        url = f"https://yucata.de/en/Game/{self._game_type}/{game_id}"
        response = requests.get(url)
        return response.text

if __name__ == "__main__":
    GameDownloader().save_all_games()