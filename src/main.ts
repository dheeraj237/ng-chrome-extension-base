import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TAB_ID } from './app/providers/tab-id.provider';
import { environment } from './environments/environment';

if (chrome && chrome.tabs) {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		if (environment.production) {
			enableProdMode();
		}

		const tab = [...tabs].pop();

		// provides the current Tab ID so you can send messages to the content page
		platformBrowserDynamic([{ provide: TAB_ID, useValue: tab?.id }])
			.bootstrapModule(AppModule)
			.catch((error) => console.error(error));
	});
} else {
	if (environment.production) {
		enableProdMode();
	}

	// provides the current Tab ID so you can send messages to the content page
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.catch((error) => console.error(error));
}
