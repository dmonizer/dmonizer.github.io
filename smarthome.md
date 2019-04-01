# Creating smart home DIY

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

RPI3 should also function as a local "NAS" and PIEHOLE (secondary priority)

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
### smart socket (metering)
- https://www.banggood.com/BlitzWolf-BW-SHP6-EU-Plug-Metering-Version-WIFI-Smart-Socket-220V-240V-10A-Work-with-Amazon-Alexa-p-1356981.html?rmmds=search&cur_warehouse=CN
  - https://github.com/xoseperez/espurna/issues/737

### smart socket (no metering)
- https://www.banggood.com/SONOFF-S26-10A-AC90V-250V-Smart-WiFi-Socket-USUKAUEU-Wireless-Plug-Power-Sockets-p-1308841.html?rmmds=search&ID=532403&cur_warehouse=UK
