Module.register("MMM-Gesture-Sensor", {
  defaults: {
    verbose: true,
    energySavingTimer: 300000,

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
          payload: null,
        }
      },
      "RIGHT": {
        notificationExec: {
          notification: "CAROUSEL_NEXT",
          payload: null,
        }
      },
      "CLOCKWISE": {
        notificationExec: {
          notification: "CLOCKWISE",
          payload: null,
        }
      },
      "ANTICLOCKWISE": {
        notificationExec: {
          notification: "ANTICLOCKWISE",
          payload: null,
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
      "Up": "LEFT",
      "Down": "RIGHT",
      "Left": "UP",
      "Right": "DOWN",
      "Forward": "FORWARD",
      "Backward": "BACKWARD",
      "Clockwise": "CLOCKWISE",
      "AntiClockwise": "ANTICLOCKWISE",
      "Wave": "WAVE"
    },

    pythonPath: "/usr/bin/python",
  },

  energyTimer: 0,
  mirrorOnVar: true,

  start: function () {
  },

  notificationReceived: function (noti, payload, sender) {
    if (noti == "DOM_OBJECTS_CREATED") {
      this.prepare()
      this.restartTimer();
    }
  },

  restartTimer: function () {
    those = this;
    clearTimeout(this.energyTimer);
    this.energyTimer = setTimeout(function (that=those) {
      that.sendNotification('REMOTE_ACTION', { action: 'MONITOROFF' });
      that.mirrorOnVar = false;
    }, this.config.energySavingTimer);
  },

  monitorOn: function () {
    console.log("inMonitorOn");
    this.sendNotification('REMOTE_ACTION', { action: 'MONITORON' });
    this.mirrorOnVar = true;
  },

  prepare: function () {
    this.sendSocketNotification("INIT", this.config)
  },

  socketNotificationReceived: function (noti, payload) {
    if (noti == "SENDNOTI") {
      console.log("SendNoti"+this.mirrorOnVar)
      this.sendNotification(this.config.commandSet[payload].notificationExec.notification);
      if (this.mirrorOnVar === false) {
        console.log("beforeMonitoron")
        this.monitorOn();
      }
      else if (this.mirrorOnVar === true) {
        this.restartTimer();
      }
    }
  },
})
