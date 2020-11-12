Module.register("MMM-Gesture-Sensor", {
  defaults: {
    },
    
    commandSet: {
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
            notification: "LEFT",
            payload:null,
          }
        },
        "RIGHT": {
          notificationExec: {
            notification: "RIGHT",
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
      "anti-clockwise": "ANTICLOCKWISE",
      "wave": "WAVE"
   },

  start: function(){
  },

  notificationReceived: function(noti, payload, sender) {
  
  },

  socketNotificationReceived: function(noti, payload, sender) {
   
  }
})
