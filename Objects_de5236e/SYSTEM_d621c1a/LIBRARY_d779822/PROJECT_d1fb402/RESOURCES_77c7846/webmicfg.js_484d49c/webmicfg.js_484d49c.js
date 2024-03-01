var webMIConfig = {
"frame.documentdomain": false,
"alarm.management.global": true,
//The configuration parameters are described in the atvise help section "Client/Browserside scripting reference -> Configuration".
"frame.scaletype": "transform",
"responsiveLite": {
        "active": true,
        "config": {
            "mobile": true,
            "tablet": false,
            "desktop": true,
            "forceDevice": "",
            "forceTouch": true,
            "ignoreTouch": false,
            "portrait": {
                "active": true,
                "thresholdMobile": 850,
                "thresholdDesktop": 1080
            },
            "landscape": {
                "active": false,
                "thresholdMobile": 1,
                "thresholdDesktop": 200
            }
        },
        "deviceScaling": {
            "desktop": {
                "window": {
                    "content": 1.0,
                    "titlebar": 1.0
                },
                "table": {
                    "fontsize": 1.0,
                    "rowheight": 1.0
                },
                "contextmenu": {
                    "fontsize": 1.0,
                    "rowheight": 1.0
                }
            },
            "tablet": {
                "window": {
                    "content": 1.5,
                    "titlebar": 1.5
                },
                "table": {
                    "fontsize": 1.1,
                    "rowheight": 1.5
                },
                "contextmenu": {
                    "fontsize": 1.1,
                    "rowheight": 1.5
                }
            },
            "mobile": {
                "window": {

                    "content": 1.3,
                    "titlebar": 1.3
                },
                "table": {
                    "fontsize": 1.3,
                    "rowheight": 1.7
                },
                "contextmenu": {
                    "fontsize": 1.7,
                    "rowheight": 1.7
                }
            }
        }
        }
};
