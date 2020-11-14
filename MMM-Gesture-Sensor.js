Module.register("MMM-Gesture-Sensor", {
  defaults: {
    verbose:true,
    
    commandSet: {
      "UP": {
          notificationExec: {
            notification: "UP",
            payload: null
          }
        },
      "DOWN": {
          notificationExec: {
            notification: "DOWN",
            payload: null
          }
        },
        "FORWARD": {
          notificationExec: {
            notification: "FORWARD",
            payload: null
          }
        },
        "BACKWARD": {
          notificationExec: {
            notification: "BACKWARD",
            payload: null
          }
        },
        "LEFT": {
          notificationExec: {
            notification: "CAROUSEL_PREVIOUS",
            payload:null,
          }
        },
        "RIGHT": {
          notificationExec: {
            notification: "CAROUSEL_NEXT",
            payload:null,
          }
        },
        "CLOCKWISE": {
          notificationExec: {
            notification: "CLOCKWISE",
            payload:null,
          }
        },
        "ANTICLOCKWISE": {
          notificationExec: {
            notification: "ANTICLOCKWISE",
            payload:null,
          }
        },
        "WAVE": {
          notificationExec: {
            notification: "WAVE",
            payload: null,
          }
        },
    },


    gestureMapFromTo: {
      "Up": "UP",
      "Down": "DOWN",
      "Left": "LEFT",
      "Right": "RIGHT",
      "Forward": "FORWARD",
      "Backward": "BACKWARD",
      "Clockwise": "CLOCKWISE",
      "AntiClockwise": "ANTICLOCKWISE",
      "Wave": "WAVE"
   },
    
    pythonPath: "/usr/bin/python",
  },

  start: function(){
  },

  notificationReceived: function(noti, payload, sender) {
    if (noti == "DOM_OBJECTS_CREATED") {
      this.prepare()
    }
  },
  
  prepare: function() {
    this.sendSocketNotification("INIT", this.config)
  },

  socketNotificationReceived: function(noti, payload) {
    if(noti=="SENDNOTI")
    {
      this.sendNotification(this.config.commandSet[payload].notificationExec.notification)
    }
  },
})
