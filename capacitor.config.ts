import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.encoded.badanalytics',
  appName: 'Bad Analytics',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'http',
    // url: 'http://10.40.44.29:8100',
    // cleartext: true,
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_local_gas_station',
      iconColor: '#3dc2ff',
      sound: 'beep.wav',
    },
  },
};

export default config;
