import React, { useEffect } from 'react';
import { IonApp, setupIonicReact, isPlatform } from '@ionic/react';
import { Keyboard } from '@capacitor/keyboard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    if (!isPlatform('capacitor')) {
      return () => {};
    }

    Keyboard.addListener('keyboardDidShow', () => {
      setTimeout(() => {
        document.activeElement?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }, 100);
    });

    return () => {
      Keyboard.removeAllListeners();
    };
  }, []);

  return (
    <IonApp>
      <div>This showcases bad analytics</div>
    </IonApp>
  );
};

export default App;
