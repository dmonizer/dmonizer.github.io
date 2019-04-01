# Creating smart home DIYC
(DIYC => DoItYourselforderfromChina)

## Idea: 
To have my apartement (and also, to some extent my summercottage) monitorable and somewhat manageable via network.

### Initial wishes:
- apartement:
  - temp & humidity monitoring
  - automatic (and remote) management of heatpump, waterheater and radiators
  - cameras
  - door and windows open/close sensors
  - water leakage alarms
  
- cottage:
  - remote (over GSM) temperature monitoring and switching radiators on/off

### later:
- electricity consumption monitoring
- RPI3 should also function as a local "NAS" and PIEHOLE (secondary priority)

## How:
### Raspberry pie 3

### Install raspbian
enable ssh

### Install hassio and portainer
https://community.home-assistant.io/t/this-is-how-i-installed-hass-io-on-ubuntu-with-docker-portainer-via-ssh/71743


## TODO:

install message broker on docker
https://hub.docker.com/_/eclipse-mosquitto


later
https://community.home-assistant.io/t/zigbee2mqtt-getting-rid-of-your-proprietary-zigbee-bridges-xiaomi-hue-tradfri/52108


## interesting
https://github.com/1technophile/OpenMQTTGateway/wiki


## Sensors
### smart socket (metering) (ordered)
- https://www.banggood.com/BlitzWolf-BW-SHP6-EU-Plug-Metering-Version-WIFI-Smart-Socket-220V-240V-10A-Work-with-Amazon-Alexa-p-1356981.html?rmmds=search&cur_warehouse=CN
  - https://github.com/xoseperez/espurna/issues/737

### smart socket (no metering) (considering)
- https://www.banggood.com/SONOFF-S26-10A-AC90V-250V-Smart-WiFi-Socket-USUKAUEU-Wireless-Plug-Power-Sockets-p-1308841.html?rmmds=search&ID=532403&cur_warehouse=UK

### PIR movement sensors 433 (ordered)
- https://www.banggood.com/Digoo-DG-HOSA-433MHz-Window-Door-Sensor-PIR-Detector-Wireless-Remote-Controller-External-Siren-p-1163239.html?rmmds=myorder
  - https://community.home-assistant.io/t/ha-to-rf-433-gateway-and-how-to-set-up-binary-sensors-to-work-with-rf-payloads/64988/2

### 433 door/window sensors (ordered)
- https://www.banggood.com/SONOFF-DW1-433Mhz-Door-Window-Sensor-Compatible-With-RF-Bridge-For-Smart-Home-Alarm-Security-p-1227800.html?rmmds=myorder

### 433 thermo- & hygrometer (ordered)
- https://www.banggood.com/Digoo-DG-R8H-433MHz-Wireless-Digital-Hygrometer-Thermometer-Weather-Station-Sensor-for-TH11300-8380-p-1178108.html?rmmds=myorder&cur_warehouse=CN
  - https://github.com/dgomes/homeGW

### 433 water leakage sensor (ordered)
- https://www.banggood.com/DY-SQ100B-Water-Leakage-Detector-Rustproof-Sensor-Alarm-433MHz-for-Security-Home-Alarm-System-p-1266537.html?rmmds=myorder

## Other necessary hardware

### SONOFF 433 WiFi bridge
- https://www.banggood.com/SONOFF-RF-Bridge-WiFi-433-MHz-Replacement-Smart-Home-Automation-Universal-Switch-p-1179900.html?rmmds=myorder

### Broadlink mini WiFi 2 IR bridge
- https://www.banggood.com/Broadlink-Black-Bean-Smart-Home-Wifi-Remote-IR-Controller-Universal-Appliances-Smart-Control-p-1049494.html?rmmds=myorder
