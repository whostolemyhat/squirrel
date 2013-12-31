# Squirrel Eat Squirrel (a 2D Katamari Damacy clone)
# By Al Sweigart al@inventwithpython.com
# http://inventwithpython.com/pygame
# Released under a "Simplified BSD" license

import random, sys, time, math, pygame
from pygame.locals import *

FPS = 30
WINWIDTH = 640
WINHEIGHT = 480
HALF_WINWIDTH = int(WINWIDTH / 2)
HALF_WINHEIGHT = int(WINHEIGHT / 2)

GRASSCOLOUR = (24, 255, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)

NUMGRASS = 80
NUMSQUIRRELS = 30
SQUIRRELMINSPEED = 3
SQUIRRELMAXSPEED = 7
DIRCHANGEFREQ = 2
LEFT = 'left'
RIGHT = 'right'

# player attr
CAMERASLACK = 90
MOVERATE = 9
BOUNCERATE = 6
BOUNCEHEIGHT = 30
STARTSIZE = 25
WINSIZE = 300
INVULNTIME = 2
GAMEOVERTIME = 4 # time to display game over text
MAXHEALTH = 3

