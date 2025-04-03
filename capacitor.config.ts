
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.70fcdef2571c4a149157bb4c0ef09b8a',
  appName: 'bookish-learning-hub',
  webDir: 'dist',
  server: {
    url: 'https://70fcdef2-571c-4a14-9157-bb4c0ef09b8a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreAliasPassword: undefined,
    }
  }
};

export default config;
